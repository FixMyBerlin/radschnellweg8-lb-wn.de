import { defineCollection, z } from 'astro:content'

export const astroHomepageMilestonesDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      position: z.number(),
      status: z.enum(['done', 'comingUp']),
      title: z.string(),
      description: z.string().optional(),
    }),
})
