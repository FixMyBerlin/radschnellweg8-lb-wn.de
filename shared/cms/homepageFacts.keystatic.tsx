import { collection, fields } from '@keystatic/core'

export const keystaticHomepageFactsConfig = collection({
  label: 'Startseite Fakten-Boxen',
  path: 'src/content/homepageFacts/*',
  slugField: 'fact',
  columns: ['position'],
  schema: {
    position: fields.number({ label: 'Reihenfolge', validation: { isRequired: true } }),
    fact: fields.slug({ name: { label: 'Fakt' } }),
    subline: fields.text({ label: 'Untertitel', validation: { isRequired: true } }),
    description: fields.text({
      label: 'Beschreibung',
      multiline: true,
      validation: { isRequired: false },
    }),
  },
})
