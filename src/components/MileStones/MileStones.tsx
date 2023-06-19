import React from 'react'

type MileStone = {
  name: string
  description: string | React.ReactNode
  comingUp?: boolean
}

type Props = {
  items: MileStone[]
}

export const MileStones: React.FC<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.name} className="group relative pl-[54px]">
          <div className={item.comingUp ? 'text-gray-400' : 'text-rs8-blue'}>
            <div
              className={`absolute bottom-0 left-[17px] top-0 w-1 border-l-2 group-last:hidden ${
                item.comingUp
                  ? 'border-dashed border-[#f2f2f2] '
                  : 'border-rs8-pink'
              }`}
            />
            <div
              className={`${
                item.comingUp ? 'bg-[#f2f2f2]' : 'bg-rs8-pink'
              } absolute left-0 h-[37px] w-[37px] rounded-full`}
            />
            <div className="pt-0.5">{item.name}</div>
          </div>
          <div
            className={`pb-10 ${item.comingUp ? 'text-gray-400' : 'inherit'}`}
          >
            {item.description}
          </div>
        </div>
      ))}
    </div>
  )
}
