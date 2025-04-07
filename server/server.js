const express = require('express');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // This enables CORS for all routes
app.use(express.json());

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// System prompt for recipe generation
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

// Recipe generation endpoint
app.post('/api/recipe', async (req, res) => {
  try {
    const { ingredients } = req.body;
    
    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({ error: 'Please provide an array of ingredients' });
    }
    
    const ingredientsString = ingredients.join(', ');
    
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: [
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
      ],
    });
    
    res.json({ recipe: response.content[0].text });
  } catch (error) {
    console.error('Error generating recipe:', error);
    res.status(500).json({ error: 'Failed to generate recipe', details: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is healthy!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 