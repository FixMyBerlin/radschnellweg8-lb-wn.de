import { defineCollection, z } from 'astro:content'

export const astroSurveyresultsDefinition = defineCollection({
  type: 'data',
  schema: () =>
    z.object({
      results: z.array(
        z.object({
          questionLabel: z.string(),
          data: z.array(z.object({ name: z.string(), value: z.number() })),
        }),
      ),
    }),
})
