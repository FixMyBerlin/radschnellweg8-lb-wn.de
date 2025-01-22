import { defineCollection, z } from 'astro:content'

export const astroHomepageFactsDefinition = defineCollection({
  type: 'data',
  schema: () =>
    z.object({
      position: z.number(),
      fact: z.string(),
      subline: z.string(),
      description: z.string().optional(),
    }),
})
