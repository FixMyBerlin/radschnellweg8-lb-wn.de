import React from 'react'

type Fact = {
  value: string
  description: string
  longDescription: string
}

type Props = {
  items: Fact[]
}

export const Facts: React.FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.value}>
          <div>
            <div>{item.value}</div>
            <div>{item.description}</div>
          </div>
          <div>{item.longDescription}</div>
        </div>
      ))}
    </div>
  )
}
