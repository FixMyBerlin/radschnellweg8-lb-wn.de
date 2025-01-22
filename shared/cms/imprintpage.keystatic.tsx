import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticImprintpageConfig = singleton({
  entryLayout: 'form',
  label: 'Impressum & Kontakt',
  format: { contentField: 'body' },
  path: 'src/content/imprintpage/',
  schema: {
    title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
    subtitle: fields.text({ label: 'Untertitel' }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('imprintpage'),
      options: { image: false },
    }),
  },
})
