const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

dotenv.config();


const app = express();

connectDB();

const corsOptions = {
  origin: 'http://localhost:5173',
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
const SITE_URL = 'http://localhost:5173'; // Replace with your actual site URL
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
    const res = await model.generateContent(prompt+message);
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


app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body;

  const lineItems = items.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price * 100, // Stripe expects the amount in cents
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.json({ id: session.id });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));