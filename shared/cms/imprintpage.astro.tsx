import { defineCollection, z } from 'astro:content'

export const astroImprintpageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
    }),
})
