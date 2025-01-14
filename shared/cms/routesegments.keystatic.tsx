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
    details: fields.array(
      fields.object({
        position: fields.number({ label: 'Position', validation: { isRequired: true } }),
        title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
        description: fields.text({
          label: 'Beschreibung',
          multiline: true,
          validation: { isRequired: false },
        }),
      }),
      {
        label: 'Routendetails',
        itemLabel: (props) => props.fields.title.value,
      },
    ),
  },
})
