import { fields, singleton } from '@keystatic/core'

export const keystaticLogoWebsiteConfig = singleton({
  label: 'Website Logo',
  path: 'src/content/logoWebsite/',
  schema: {
    imageAlt: fields.text({ label: 'Bild Alt Attribut' }),
    image: fields.image({
      label: 'Bild',
      description: 'Bild bitte im Format 80x80px hochladen.',
      directory: 'src/content/logoWebsite',
      publicPath: '../../content/logoWebsite',
      validation: { isRequired: true },
    }),
  },
})
