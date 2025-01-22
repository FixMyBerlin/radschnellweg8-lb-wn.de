import { defineCollection, z } from 'astro:content'

export const astroHomepageDefinition = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string().optional(), // INFO CMS: The `optional()` is a workaround, see https://github.com/Thinkmill/keystatic/discussions/361#discussioncomment-10475460 for more.
      titleMilestones: z.string().optional(),
      titleLinks: z.string().optional(),
      links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    }),
})
