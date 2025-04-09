import { z } from "zod"

// Form schema for ingredient input
export const formSchema = z.object({
  ingredient: z.string().min(1, {
    message: "Please enter an ingredient.",
  }).max(100, {
    message: "Ingredient name is too long.",
  }),
})

// You can add more schemas here as needed
// For example:
// export const loginSchema = z.object({ ... })
// export const contactSchema = z.object({ ... }) 