import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'

export const MapConfig = block({
  label: 'Karte (dynamisch)',
  schema: {
    type: fields.conditional(
      fields.select({
        label: 'Typ',
        description: 'Wähle aus welche Art der Karte angezeigt werden soll.',
        options: [
          { label: 'Gesamtansicht - nur Trasse', value: 'basic' },
          { label: 'Gesamtansicht mit Abschnitten und Status', value: 'routemap' },
          { label: 'Fokusansicht eines Abschnitts', value: 'routesegmentmap' },
        ],
        defaultValue: 'basic',
      }),
      {
        basic: fields.empty(),
        routemap: fields.empty(),
        routesegmentmap: fields.relationship({
          label: 'Abschnitt',
          collection: 'routesegments',
        }),
      },
    ),
  },
  ContentView: (props) => {
    return <>{props.value.type.discriminant}</>
  },
})
