import { collection, fields } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticRoutesegmentsConfig = collection({
  label: 'Routen',
  path: 'src/content/routesegments/*',
  slugField: 'title',
  columns: ['position'],
  format: { contentField: 'body' },
  schema: {
    title: fields.slug({ name: { label: 'Titel' } }),
    operator: fields.text({ label: 'Baulastträger' }),
    position: fields.number({ label: 'Position' }),
    documents: fields.array(
      fields.object({
        document: fields.file({
          label: 'Dokument',
          validation: { isRequired: true },
          directory: 'public/files/',
          publicPath: '/files/',
        }),
        description: fields.text({ label: 'Beschreibung' }),
        title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
      }),

      {
        itemLabel: (props) => props.fields.title.value,
        label: 'Dokumente',
      },
    ),
    socials: fields.array(
      fields.object({
        label: fields.text({ label: 'Label', validation: { isRequired: true } }),
        link: fields.url({ label: 'Link', validation: { isRequired: true } }),
      }),
      {
        itemLabel: (props) => props.fields.label.value,
        label: 'Social Media Links',
      },
    ),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('routesegments'),
      options: { image: false },
    }),
  },
})
