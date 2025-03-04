import { fields } from '@keystatic/core'
import { block } from '@keystatic/core/content-components'

export const keystaticMapImageConfig = block({
  label: 'Kartenbild (statisch)',
  schema: {
    // https://keystatic.com/docs/fields/relationship
    relationship: fields.relationship({
      label: 'Kartenbild',
      collection: 'mapImages',
    }),
  },
  ContentView: (props) => {
    return <>{JSON.stringify(props.value.relationship)}</>
  },
})
