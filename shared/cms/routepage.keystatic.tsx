import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticRoutepageConfig = singleton({
  entryLayout: 'form',
  label: 'Routenseite',
  format: { contentField: 'body' },
  path: 'src/content/routepage/',
  schema: {
    title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
    subtitle: fields.text({ label: 'Untertitel' }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('routepage'),
      options: { image: false },
    }),
  },
})
