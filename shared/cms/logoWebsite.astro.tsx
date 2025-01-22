import { defineCollection, z } from 'astro:content'

export const astroLogoWebsiteDefinition = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      imageAlt: z.string(),
      image: image(),
    }),
})
