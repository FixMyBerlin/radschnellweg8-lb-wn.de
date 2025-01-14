import { fields, singleton } from '@keystatic/core'

export const keystaticSurveyresultsConfig = singleton({
  label: 'Beteiligungserg. Daten',
  path: 'src/content/surveyresults/',
  format: { data: 'json' },
  schema: {
    results: fields.array(
      fields.object({
        questionLabel: fields.text({ label: 'Titel (Daten nicht manuell bearbeiten)' }),
        data: fields.array(
          fields.object({
            name: fields.text({
              label: 'Untertitel (Daten nicht manuell bearbeiten)',
              validation: { isRequired: true },
            }),
            value: fields.number({
              label: 'Wert (Daten nicht manuell bearbeiten)',
              validation: { isRequired: true },
            }),
          }),
          {
            label: 'Einträge (Daten nicht manuell bearbeiten)',
            itemLabel: (props) => `${props.fields.name.value} | ${props.fields.value.value}`,
          },
        ),
      }),
      {
        label: 'Ergebnis sortieren',
        description:
          'Die Daten in dieser Ansicht bitte nicht bearbeiten. Die Ansicht ist nur zur Sortierung und Kontrolle der Daten gedacht. Die Daten werden durch die Entwickler von FixMyCity ins System übernommen. (Die Dokumentation dazu ist unter `docs/README.md`.)',
        itemLabel: (props) => props.fields.questionLabel.value,
      },
    ),
  },
})
