import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ClaudeRecipe({ recipeText }) {
  return (
    <Card className="mt-8 border border-border shadow-md">
      <CardHeader className="bg-muted/50 pb-2">
        <CardTitle className="text-left text-xl font-semibold">Suggested Recipe</CardTitle>
        <CardDescription className="text-left text-muted-foreground">
          Here's a recipe you can make with your ingredients
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ScrollArea className="h-[500px] w-full rounded-md border p-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <ReactMarkdown>{recipeText}</ReactMarkdown>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}