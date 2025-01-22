import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticFaqspageConfig = singleton({
  entryLayout: 'form',
  label: 'FAQs-Seite',
  format: { contentField: 'body' },
  path: 'src/content/faqspage/',
  schema: {
    active: fields.checkbox({ label: 'Menüpunkt anzeigen', defaultValue: true }),
    title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
    subtitle: fields.text({ label: 'Untertitel' }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('faqspage'),
      // Astro does not allow to configure max image sizes for Content components.
      // Instead we rely on our custom image components.
      options: { image: false },
    }),
  },
})
