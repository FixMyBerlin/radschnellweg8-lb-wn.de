import { collection, fields } from '@keystatic/core'

export const keystaticHomepageQuotesConfig = collection({
  label: 'Startseite Zitate',
  path: 'src/content/homepageQuotes/*',
  slugField: 'name',
  schema: {
    quote: fields.text({ label: 'Zitat', multiline: true, validation: { isRequired: true } }),
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
