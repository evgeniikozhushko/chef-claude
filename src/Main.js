import React, { useState } from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import { getRecipeFromChefClaude } from "./ai"; // Import from ai.js

export default function Main() {
  // **Ingredients State**
  // This state holds an array of ingredients.
  const [ingredients, setIngredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste"
  ]);

  // **Recipe Visibility State**
  // This boolean controls whether the recipe should be shown.
  const [recipeShown, setRecipeShown] = useState(false);

  // **Recipe Text State**
  // This state holds the text (markdown) returned by the AI.
  const [recipeText, setRecipeText] = useState("");

  // **Function to Add Ingredients**
  // Called when the form is submitted.
  function addIngredient(event) {
    event.preventDefault(); // Prevents the page from reloading.
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    // Append the new ingredient to the existing array.
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    // Optionally, clear the form after submission:
    event.target.reset();
  }

  // **Async Function to Fetch Recipe from AI**
  // When called, it sends the ingredients array to the AI function,
  // waits for the recipe text, then updates state.
  async function handleGetRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    try {
      // Pass the ingredients array to the AI function.
      const response = await getRecipeFromChefClaude(ingredients);
      // Save the recipe text from the API response.
      setRecipeText(response);
      // Show the recipe.
      setRecipeShown(true);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      // Optionally, you could set an error state here to display to the user
    }
  }

  return (
    <main>
      <h2>Hello World</h2>
      {/* Form for adding new ingredients */}
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>

      {/* Render the IngredientsList component and pass down the ingredients array
      and a function to toggle the recipe view */}
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          handleGetRecipe={handleGetRecipe} // We pass handleGetRecipe so that when the button is clicked, the AI call is made.
        />
      )}

      {/* Conditionally render the ClaudeRecipe component if recipeShown is true.
      Pass the recipe text as a prop so the component can display it. */}
      {recipeShown && <ClaudeRecipe recipeText={recipeText} />}
    </main>
  );
}