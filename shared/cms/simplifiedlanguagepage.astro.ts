import { defineCollection, z } from 'astro:content'

export const astroSimplifiedlanguagepageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      active: z.boolean(),
      title: z.string(),
      subtitle: z.string().optional(),
    }),
})
