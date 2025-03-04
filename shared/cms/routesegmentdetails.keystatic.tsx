import { collection, fields } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticRoutesegmentdetailsConfig = collection({
  label: 'Detailinfos zu Abschnitten',
  path: 'src/content/routesegmentdetails/*',
  slugField: 'title',
  format: { contentField: 'body' },
  columns: ['route', 'position'],
  schema: {
    title: fields.slug({ name: { label: 'Titel' } }),
    route: fields.relationship({
      label: 'Abschnitt',
      collection: 'routesegments',
      description: 'Der Abschnitt (Planungsabschnitt), zu dem dieses Detail gehört.',
    }),
    detailId: fields.text({
      label: 'Detail-ID',
      description:
        'Wenn es zu dieser Detailinfo eine Geometrie gibt (aus Detailinfos Geo Upload), dann muss hier eine Detail-ID vergeben werden und diese in den Properties der passenden Punktgeometrie als detailId gespeichert sein.',
    }),
    position: fields.number({ label: 'Position', validation: { isRequired: true } }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('routesegments'),
      options: { image: false },
    }),
  },
})
