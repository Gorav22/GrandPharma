const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

dotenv.config();


const app = express();

connectDB();

const corsOptions = {
  origin: 'https://grand-pharma-xh8b.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/medicines', require('./routes/medicineRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

const OPENROUTER_API_KEY = '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'; // Replace with your actual API key
const SITE_URL = 'https://grand-pharma-xh8b.vercel.app'; // Replace with your actual site URL
const SITE_NAME = 'MedChat Assistant'; // Replace with your site name

let chatHistory = [];

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  console.log(message);
  
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": SITE_URL,
        "X-Title": SITE_NAME,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // "model": "deepseek/deepseek-r1:free",
        "model":"deepseek/deepseek-chat:free",
        "messages": [
          {
            "role": "system",
            "content": "You are an AI doctor assistant. Help users with medical questions. For non-medical questions, politely respond that you can't help with that topic."
          },
          {
            "role": "user",
            "content": message
          }
        ]
      })
    });
    
    const result = await response.json();
    const reply = result.choices && result.choices[0] ? result.choices[0].message.content : "Sorry, I couldn't process that request.";
    
    const prompt="you are a ai doctor, dietician help the user for that anf for other questions just just say sorry i can't help you with that."
    const response = await model.generateContent(prompt+message);
    const reply = response.response.text();
    console.log(reply);
    chatHistory.push({ user: message, bot: reply });
    res.json({ reply, history: chatHistory });
  } catch (err) {
    console.error('Error calling OpenRouter API:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/history', (req, res) => {
  res.json(chatHistory);
});


app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    console.log('PaymentIntent was successful:', paymentIntent);
  }

  res.json({ received: true });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));