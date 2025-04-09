import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IngredientsList({ ingredients, handleGetRecipe }) {
  // Map over the ingredients array to create list items.
  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <Card className="text-left">
      <CardHeader>
        <CardTitle className="text-left">Ingredients on hand:</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
        {/* If there are more than 3 ingredients, show a button to get a recipe.
            When clicked, this calls the toggleRecipeShown function passed via props. */}
        {ingredients.length > 3 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <Button onClick={handleGetRecipe} variant="default">Get a recipe</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 