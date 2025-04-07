// No need to import Anthropic SDK here anymore since we're using our backend
import { HfInference } from '@huggingface/inference';

// For Hugging Face API (if we still want to use it)
const HF_ACCESS_TOKEN = process.env.REACT_APP_HF_ACCESS_TOKEN;
const hf = new HfInference(HF_ACCESS_TOKEN);

// Backend API URL
const API_URL = 'http://localhost:5000/api';

export async function getRecipeFromChefClaude(ingredientsArr) {
  try {
    // Call our backend instead of Anthropic directly
    const response = await fetch(`${API_URL}/recipe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to get recipe');
    }

    const data = await response.json();
    return data.recipe;
  } catch (error) {
    console.error("Error calling recipe API:", error);
    throw new Error("Failed to get recipe suggestion");
  }
}

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: "You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients." },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
      ],
      max_tokens: 1024,
    });
    
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error calling Mistral API:", error);
    throw new Error("Failed to get recipe suggestion");
  }
}