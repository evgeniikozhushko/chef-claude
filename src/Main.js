import React, { useState, useEffect} from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import { getRecipeFromChefClaude } from "./ai"; // Import from ai.js
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Main() {
  // **Ingredients State**
  // This state holds an array of ingredients.
  const [ingredients, setIngredients] = useState([
    "All the main spices."
  ]);

  // **Recipe Visibility State**
  // This boolean controls whether the recipe should be shown.
  const [recipeShown, setRecipeShown] = useState(false);
  const recipeSection = React.useRef(null)
  console.log(recipeSection)

  useEffect(() => {
    if (recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipeShown]);


  // **Recipe Text State**
  // This state holds the text (markdown) returned by the AI.
  const [recipeText, setRecipeText] = useState("");


  // **Function to Add Ingredients**
  // Called when the form is submitted.
  function addIngredient(formEvent) {
    formEvent.preventDefault(); // Prevents the page from reloading.
    const formData = new FormData(formEvent.currentTarget);
    const newIngredient = formData.get("ingredient");
    // Append the new ingredient to the existing array.
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    // Optionally, clear the form after submission:
    formEvent.target.reset();
  }

  // **Async Function to Fetch Recipe from AI**
  // When called, it sends the ingredients array to the AI function,
  // waits for the recipe text, then updates state.
  async function handleGetRecipe() {
    // const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
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
    <main className="container mx-auto">
      <Card className="mb-8 text-left">
        <CardHeader>
          <CardTitle>Chef Claude App</CardTitle>
          <CardDescription>Add 3 or more ingredients</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={addIngredient} className="flex gap-2 mb-6">
            <Input
              type="text"
              placeholder="e.g. oregano"
              aria-label="Add ingredient"
              name="ingredient"
              className="flex-1"
            />
            <Button type="submit">Add an ingredient</Button>
          </form>

          {/* Render the IngredientsList component and pass down the ingredients array
          and a function to toggle the recipe view */}
          {ingredients.length > 0 && (
            <IngredientsList
              recipeSection={recipeSection}
              ingredients={ingredients}
              handleGetRecipe={handleGetRecipe}
            />
          )}

          {/* Conditionally render the ClaudeRecipe component if recipeShown is true.
          Pass the recipe text as a prop so the component can display it. */}
          {recipeShown && <ClaudeRecipe recipeText={recipeText} />}
        </CardContent>
      </Card>
    </main>
  );
}