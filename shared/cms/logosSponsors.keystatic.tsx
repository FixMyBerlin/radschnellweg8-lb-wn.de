import { collection, fields } from '@keystatic/core'

export const keystaticLogosSponsorsConfig = collection({
  label: 'Förderer Logos',
  path: 'src/content/logosSponsors/*',
  slugField: 'imageAlt',
  columns: ['position'],
  schema: {
    position: fields.number({ label: 'Reihenfolge', validation: { isRequired: true } }),
    imageAlt: fields.slug({ name: { label: 'Bild Alt Attribut' } }),
    image: fields.image({
      label: 'Bild',
      description: 'Bild bitte im Format 400x400px hochladen.',
      directory: 'src/content/logosSponsors',
      publicPath: '../../content/logosSponsors',
      validation: { isRequired: true },
    }),
    href: fields.url({ label: 'Link' }),
  },
})
