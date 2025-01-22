import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticSimplifiedlanguagepageConfig = singleton({
  entryLayout: 'form',
  label: 'Leichte Sprache',
  format: { contentField: 'body' },
  path: 'src/content/simplifiedlanguagepage/',
  schema: {
    active: fields.checkbox({ label: 'Menüpunkt anzeigen', defaultValue: true }),
    title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
    subtitle: fields.text({ label: 'Untertitel' }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('simplelanguagepage'),
      options: { image: false },
    }),
  },
})
