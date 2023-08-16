import React from 'react'

type Fact = {
  value: string
  description: string
}

type Props = {
  items: Fact[]
}

export const FactGrid: React.FC<Props> = ({ items }) => {
  return (
    <div className="grid gap-12 md:grid-cols-3 sm:grid-cols-2">
      {items.map(({ value, description }) => (
        <div
          key={value}
          className="rounded-md bg-white px-6 py-8 flex flex-col items-center justify-center shadow-lg w-full"
        >
          <div className="font-extrabold text-rs8-pink lg:text-[32px] lg:leading-[48px]">
            {value}
          </div>
          <div className="text-[ text-rs8-blue text-center">{description}</div>
        </div>
      ))}
    </div>
  )
}
