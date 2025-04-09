"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export function IngredientForm({ onAddIngredient }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ingredient: "",
    },
  })

  function onSubmit(values) {
    onAddIngredient(values.ingredient)
    form.reset()
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="ingredient"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input placeholder="e.g. oregano" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add your ingredient</Button>
      </form>
    </Form>
  )
} 