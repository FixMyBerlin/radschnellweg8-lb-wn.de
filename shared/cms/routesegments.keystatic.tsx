import { collection, fields } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticRoutesegmentsConfig = collection({
  label: 'Abschnitte',
  path: 'src/content/routesegments/*',
  slugField: 'title',
  columns: ['position'],
  format: { contentField: 'body' },
  schema: {
    title: fields.slug({ name: { label: 'Titel' } }),
    tsSlug: fields.text({
      label: 'Trassenscout Slug',
      description:
        'Hier den Slug des Planungsabschnittes aus dem TS angeben (im GeoJSON ist es die property `subsectionSlug`), damit dem Abschnitt eine Geometrie zugeordnet werden kann.',
    }),
    operator: fields.text({ label: 'Baulastträger' }),
    contact: fields.text({ label: 'Ansprechpartner*in' }),
    position: fields.number({ label: 'Position' }),
    markerPositionBottom: fields.checkbox({
      label: 'Tip-Marker in der Karte unten anzeigen',
      defaultValue: false,
      description:
        'Standardmäßig erscheint der Tip-Marker in der Karte oberhalb der Linie. Hier einen Haken setzen, wenn der Tip-Marker unten erscheinen soll.',
    }),
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
        type: fields.select({
          label: 'Typ',
          options: [
            { value: 'facebook', label: 'Facebook' },
            { value: 'instagram', label: 'Instagram' },
            { value: 'linkedin', label: 'LinkedIn' },
            { value: 'tiktok', label: 'TikTok' },
          ],
          defaultValue: 'facebook',
        }),
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
