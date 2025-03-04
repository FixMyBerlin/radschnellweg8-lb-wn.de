import { defineCollection, z } from 'astro:content'

export const astroRoutesegmentsDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      operator: z.string().optional(),
      contact: z.string().optional(),
      position: z.number(),
      markerPositionBottom: z.boolean().optional(),
      tsSlug: z.string().optional(),
      documents: z
        .array(
          z.object({
            document: z.string(),
            description: z.string().optional(),
            title: z.string(),
          }),
        )
        .optional(),
      socials: z
        .array(
          z.object({
            label: z.string(),
            link: z.string(),
            type: z.enum(['facebook', 'instagram', 'linkedin', 'tiktok']),
          }),
        )
        .optional(),
    }),
})
