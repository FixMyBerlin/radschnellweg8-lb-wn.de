import { collection, fields } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticRoutesegmentdetailsConfig = collection({
  label: 'Routendetails',
  path: 'src/content/routesegmentdetails/*',
  slugField: 'title',
  format: { contentField: 'body' },
  columns: ['route', 'position'],
  schema: {
    title: fields.slug({ name: { label: 'Titel' } }),
    route: fields.relationship({ label: 'Route', collection: 'routesegments' }),
    position: fields.number({ label: 'Position', validation: { isRequired: true } }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('routesegments'),
      options: { image: false },
    }),
  },
})
