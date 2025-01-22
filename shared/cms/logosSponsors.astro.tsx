import { defineCollection, z } from 'astro:content'

export const astroLogosSponsorsDefinition = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      position: z.number(),
      imageAlt: z.string(),
      image: image(),
      href: z.string().url().optional(),
    }),
})
