import { defineCollection, z } from 'astro:content'

export const astroSurveyresultspageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      active: z.boolean().optional(),
      title: z.string().optional(), // Required to be optional to avoid conflicts with bodybelowcharts
      subtitle: z.string().optional(),
      bodyBelowCharts: z.string().optional(),
    }),
})
