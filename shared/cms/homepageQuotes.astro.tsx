import { defineCollection, z } from 'astro:content'

export const astroHomepageQuotesDefinition = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      quote: z.string(),
      name: z.string(),
      position: z.string().optional(),
      image: image(),
      imageCopyright: z.string().optional(),
    }),
})
