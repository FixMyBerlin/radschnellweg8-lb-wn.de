import { collection, fields } from '@keystatic/core'

export const keystaticHomepageMilestonesConfig = collection({
  label: 'Startseite Meilensteine',
  path: 'src/content/homepageMilestones/*',
  slugField: 'title',
  format: { contentField: 'description' },
  columns: ['position'],
  schema: {
    position: fields.number({ label: 'Reihenfolge', validation: { isRequired: true } }),
    status: fields.select({
      label: 'Status',
      options: [
        { label: 'Meilenstein abgeschlossen', value: 'done' },
        { label: 'Meilenstein offen', value: 'comingUp' },
      ],
      defaultValue: 'comingUp',
    }),
    title: fields.slug({ name: { label: 'Titel' } }),
    description: fields.mdx({ label: 'Beschreibung' }),
  },
})
