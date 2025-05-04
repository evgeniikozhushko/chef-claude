Chef Claude Recipe Generator

Chef Claude is a React-based web application that helps you generate cooking recipes on the fly based on the ingredients you have on hand. Powered by AI, it communicates with the Anthropic Claude model (and optionally Mistral) to craft markdown-formatted recipes that you can scroll into view and follow step by step.

Features

Ingredient List Management: Add and remove ingredients dynamically.

AI-Generated Recipes: Send your current ingredient list to an AI model and receive a formatted recipe suggestion.

Smooth Scroll: Automatically scroll the UI to the recipe section when a new recipe is loaded.

Responsive UI: Built with React hooks (useState, useEffect, useRef) for real-time updates and side-effects.

Getting Started

Clone the repository

git clone https://github.com/your-username/chef-claude.git
cd chef-claude

Install dependencies

npm install

Set up environment variables

Create a .env file in the project root.

Add your API keys for Anthropic and Hugging Face:

ANTHROPIC_API_KEY=your_anthropic_key_here
HF_ACCESS_TOKEN=your_hf_access_token_here

Start the development server

npm start

Open in browser
Navigate to http://localhost:3000 to begin adding ingredients and generating recipes.

Project Structure

src/Main.js — Main React component handling state and side-effects.

src/components/IngredientsList.js — Renders the ingredient list and the "Get a recipe" button.

src/components/ClaudeRecipe.js — Displays the AI-generated markdown recipe.

src/ai/index.js — Functions to call external AI APIs (getRecipeFromChefClaude, getRecipeFromMistral).

Learnings & Patterns

React Hooks: useState for local state, useEffect for side-effects (fetching data, DOM interactions), useRef for direct DOM access.

Conditional Rendering: Show ingredient list only if items exist, and only show the recipe panel when a recipe is returned.

Scroll into View: Use a ref and effect to bring the recipe section into view smoothly.

Contributing

Fork the repo

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add new feature")

Push to the branch (git push origin feature-name)

Open a pull request

License

This project is licensed under the MIT License.
