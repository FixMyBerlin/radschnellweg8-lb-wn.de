import { collection, fields } from '@keystatic/core'

export const keystaticHomepageQuotesConfig = collection({
  label: 'Startseite Zitate',
  path: 'src/content/homepageQuotes/*',
  slugField: 'name',
  schema: {
    quote: fields.text({
      label: 'Zitat',
      description: 'Empfohlen sind 100-200 Zeichen. Maximal 500 Zeichen',
      multiline: true,
      validation: { isRequired: true, length: { max: 500 } },
    }),
    name: fields.slug({ name: { label: 'Name' } }),
    position: fields.text({ label: 'Rolle', validation: { isRequired: false } }),
    image: fields.image({
      label: 'Bild',
      description: 'Bild bitte im Format 500x500px hochladen.',
      directory: 'src/content/homepageQuotes',
      publicPath: '../../content/homepageQuotes',
      validation: { isRequired: true },
    }),
    imageCopyright: fields.text({
      label: 'Bild Quellennachweis',
      description: 'Format: Foto ©TEXT',
      validation: { isRequired: false },
    }),
  },
})
