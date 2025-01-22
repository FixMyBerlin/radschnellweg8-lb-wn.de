import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticSurveyresultspageConfig = singleton({
  entryLayout: 'form',
  label: 'Beteiligungserg.-Seite',
  format: { contentField: 'body' },
  path: 'src/content/surveyresultspage/',
  schema: {
    active: fields.checkbox({ label: 'Menüpunkt anzeigen', defaultValue: true }),
    title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
    subtitle: fields.text({ label: 'Untertitel' }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('surveyresultspage'),
      options: { image: false },
    }),
    bodyBelowCharts: fields.mdx({
      label: 'Text unter den Ergebnissen',
      components: mdxComponentsKeystatic('surveyresultspage'),
      options: { image: false },
    }),
  },
})
