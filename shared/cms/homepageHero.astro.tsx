import { defineCollection, z } from 'astro:content'

export const astroHomepageHeroDefinition = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      participation: z.discriminatedUnion('discriminant', [
        z.object({
          discriminant: z.literal(false),
        }),
        z.object({
          discriminant: z.literal(true),
          value: z.object({
            participationHref: z.string(),
            participationText: z.string(),
          }),
        }),
      ]),
      title1: z.string(),
      title2: z.string().optional(),
      waypoints: z.array(z.string()),
      image: image(),
      imageCopyright: z.string().optional(),
    }),
})
