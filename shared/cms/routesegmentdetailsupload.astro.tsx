import { defineCollection, z } from 'astro:content'

export const astroRoutesegmentdetailsUploadDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      upload: z.string(),
    }),
})
