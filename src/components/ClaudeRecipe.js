import React from "react";

export default function ClaudeRecipe({ recipeText }) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <article className="suggested-recipe-container" aria-live="polite">
        {/* For now, we simply display the raw markdown text returned by the AI. */}
        <pre>{recipeText}</pre>
      </article>
    </section>
  );
}