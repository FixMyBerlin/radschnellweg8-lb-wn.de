import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'

export const keystaticMapConfig = block({
  label: 'Map',
  schema: {
    // https://keystatic.com/docs/fields/relationship
    relationship: fields.relationship({
      label: 'Karte',
      collection: 'maps',
    }),
  },
  ContentView: (props) => {
    return <>{JSON.stringify(props.value.relationship)}</>
  },
})
