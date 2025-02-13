import { defineCollection, z } from 'astro:content'

export const astroRoutesegmentdetailsDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      route: z.string(),
      detailId: z.string().optional(),
      position: z.number(),
    }),
})
