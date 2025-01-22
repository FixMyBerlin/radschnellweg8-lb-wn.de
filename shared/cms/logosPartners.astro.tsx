import { defineCollection, z } from 'astro:content'

export const astroLogosPartnersDefinition = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      position: z.number(),
      imageAlt: z.string(),
      image: image(),
      imageHeight: z.number().optional(),
      href: z.string().url().optional(),
    }),
})
