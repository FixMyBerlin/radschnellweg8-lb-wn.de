import { defineCollection, z } from 'astro:content'

export const astroRoutesegmentsDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      operator: z.string(),
      details: z.array(
        z.object({ position: z.number(), title: z.string(), description: z.string() }),
      ),
    }),
})
