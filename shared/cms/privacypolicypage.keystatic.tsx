import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticPrivacypolicypageConfig = singleton({
  entryLayout: 'form',
  label: 'Datenschutzerklärung',
  format: { contentField: 'body' },
  path: 'src/content/privacypolicypage/',
  schema: {
    title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
    subtitle: fields.text({ label: 'Untertitel' }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('privacypolicypage'),
      options: { image: false },
    }),
  },
})
