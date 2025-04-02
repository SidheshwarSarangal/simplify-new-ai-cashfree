import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import otpRoutes from './routes/otpEmailRoutes.js';
import subscriptionRoutes  from './routes/subscriptionRoutes.js';
import geminiRoutes from './routes/geminiRoutes.js'
//import { GoogleGenerativeAI } from "@google/generative-ai";

//import OpenAI from 'openai/index.mjs';


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Routes
app.use('/api/auth', authRoutes);

app.use('/api/otp', otpRoutes);

app.use("/api/subscription", subscriptionRoutes);

app.use('/api/gemini/', geminiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
/*
async function listModels() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  try {
    const models = await genAI.listModels();
    console.log("Available Models:", models);
  } catch (error) {
    console.error("Error fetching models:", error);
  }
}

listModels();*/
/*
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyCheeeTvNU4L4jNZ53VGpmGNXbRP0VtyAA");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Explain how AI works";

const result = await model.generateContent(prompt);
console.log(result.response.text());*/


//console.log("Loaded API Key:", process.env.AI_API_KEY); // Check if it's loaded
