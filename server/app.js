const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));