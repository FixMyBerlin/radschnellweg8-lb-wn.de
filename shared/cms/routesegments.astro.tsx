import { defineCollection, z } from 'astro:content'

export const astroRoutesegmentsDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      operator: z.string(),
      position: z.number(),
    }),
})
