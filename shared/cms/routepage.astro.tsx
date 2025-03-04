import { defineCollection, z } from 'astro:content'

export const astroRoutepageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      subPagesActive: z.boolean(),
    }),
})
