import { collection, fields } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticRoutesegmentsConfig = collection({
  label: 'Routen',
  path: 'src/content/routesegments/*',
  slugField: 'title',
  format: { contentField: 'body' },
  schema: {
    title: fields.slug({ name: { label: 'Titel' } }),
    operator: fields.text({ label: 'Baulastträger' }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('routesegments'),
      options: { image: false },
    }),
  },
})
