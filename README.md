# Chef Claude Recipe Generator

Chef Claude is a React-based web application that helps you generate cooking recipes on the fly based on the ingredients you have on hand. Powered by AI, it communicates with the Anthropic Claude model (and optionally Mistral) to craft markdown-formatted recipes that you can scroll into view and follow step by step.

## Features

* **Ingredient List Management:** Add and remove ingredients dynamically.
* **AI-Generated Recipes:** Send your current ingredient list to an AI model (Claude or Mistral) and receive a formatted recipe suggestion.
* **Smooth Scroll:** Automatically scroll the UI to the recipe section when a new recipe is loaded.
* **Responsive UI:** Built with React hooks (`useState`, `useEffect`, `useRef`) for real-time updates and side-effects.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/chef-claude.git
   cd chef-claude
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   * Create a `.env` file in the project root.
   * Add your API keys for Anthropic and Hugging Face:

     ```bash
     ANTHROPIC_API_KEY=your_anthropic_key_here
     HF_ACCESS_TOKEN=your_hf_access_token_here
     ```

4. **Start the development server**

   ```bash
   npm start
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to begin adding ingredients and generating recipes.

## Project Structure

```
src/
├── ai/
│   └── index.js          # API calls: getRecipeFromChefClaude, getRecipeFromMistral
├── components/
│   ├── IngredientsList.js # Renders ingredient list & "Get a recipe" button
│   └── ClaudeRecipe.js    # Displays AI-generated markdown recipe
└── Main.js               # Main React component (state & side-effects)
```

## Learnings & Patterns

* **React Hooks**: `useState` for local state, `useEffect` for side-effects (fetching data, DOM interactions), `useRef` for direct DOM access.
* **Conditional Rendering**: Show ingredient list only if items exist, and show the recipe panel only when a recipe is returned.
* **Smooth Scroll**: Use a ref and effect to bring the recipe section into view smoothly.

## Contributing

1. Fork the repo
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:

   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
