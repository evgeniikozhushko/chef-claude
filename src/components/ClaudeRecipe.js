import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ClaudeRecipe({ recipeText }) {
  return (
    <Card className="suggested-recipe-container">
      <CardHeader>
        <CardTitle className="text-left">Suggested Recipe</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactMarkdown>{recipeText}</ReactMarkdown>
      </CardContent>
    </Card>
  );
}