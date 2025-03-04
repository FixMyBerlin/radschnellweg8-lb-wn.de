import { defineCollection, z } from 'astro:content'

export const astroMapImagesDefinition = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      image: image(),
      imageAlt: z.string().optional(),
      imageCopyright: z.string().optional(),
      legend: z
        .array(
          z.object({
            label: z.string(),
            shape: z.enum(['line', 'circle', 'icon']),
            color: z.string(),
            iconKey: z.string().optional(),
          }),
        )
        .optional(),
    }),
})
