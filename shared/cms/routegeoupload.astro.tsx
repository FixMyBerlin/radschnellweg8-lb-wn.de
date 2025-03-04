import { defineCollection, z } from 'astro:content'

export const astroRouteGeoUploadDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      uploadSegements: z.string(),
      uploadDetails: z.string(),
    }),
})
