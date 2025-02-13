import { defineCollection, z } from 'astro:content'

export const astroRoutesegmentsDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      operator: z.string(),
      position: z.number(),
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
          }),
        )
        .optional(),
    }),
})
