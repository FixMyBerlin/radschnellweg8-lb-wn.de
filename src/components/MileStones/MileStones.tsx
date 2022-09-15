import React from 'react'

type MileStone = {
  name: string
  description: string
  comingUp?: boolean
}

type Props = {
  items: MileStone[]
}

export const MileStones: React.FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.name}>
          <div>{item.name}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  )
}
