const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const { GoogleGenerativeAI } = require("@google/generative-ai");

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

const GEMINI_API_KEY = 'AIzaSyDHYoUo5WYldZXOMp6cOaS3m3rS-AiR3DA';
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

let chatHistory = [];

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  console.log(message);
  try {
    const prompt="you are a ai doctor help the user for that anf for other questions just just say sorry i can't help you with that."
    const response = await model.generateContent(prompt+message);
    const reply = response.response.text();
    console.log(reply);
    chatHistory.push({ user: message, bot: reply });
    res.json({ reply, history: chatHistory });
  } catch (err) {
    console.error('Error calling Gemini API:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/history', (req, res) => {
  res.json(chatHistory);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
