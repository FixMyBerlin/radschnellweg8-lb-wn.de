import { defineCollection, z } from 'astro:content'
import { basePath, categoryEnumAndOrder, highlightOptionEnum } from './faqs.keystatic'
import { loader } from './utils/loader'

export const astroFaqsDefinition = defineCollection({
  loader: loader(basePath, 'mdx'),
  schema: () =>
    z.object({
      title: z.string(),
      category: z.enum(categoryEnumAndOrder),
      order: z.number(),
      highlight: z.array(z.enum(highlightOptionEnum)).optional(),
    }),
})
