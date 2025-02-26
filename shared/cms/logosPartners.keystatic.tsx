import { collection, fields } from '@keystatic/core'

export const keystaticLogosPartnersConfig = collection({
  label: 'Partner Logos',
  path: 'src/content/logosPartners/*',
  slugField: 'imageAlt',
  columns: ['position'],
  schema: {
    position: fields.number({ label: 'Reihenfolge', validation: { isRequired: true } }),
    imageAlt: fields.slug({ name: { label: 'Bild Alt Attribut' } }),
    image: fields.image({
      label: 'Bild',
      description: 'Bild bitte im Format 80x80px hochladen.',
      directory: 'src/content/logosPartners',
      publicPath: '../../content/logosPartners',
      validation: { isRequired: true },
    }),
    imageHeight: fields.number({
      label: 'Sonderwert Höhe (px)',
      description:
        'Manche Bilder (bspw. querformatige Bilder) brauchen eine andere Höhe als 40px, hier kann dann ein geringerer Wert angegeben werden, bspw. 30px.',
    }),
    href: fields.url({ label: 'Link' }),
  },
})
