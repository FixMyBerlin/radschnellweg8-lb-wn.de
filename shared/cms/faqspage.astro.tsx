import { defineCollection, z } from 'astro:content'

export const astroFaqspageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      active: z.boolean().optional(),
      title: z.string(),
      subtitle: z.string().optional(),
    }),
})
