import React from 'react'

type Fact = {
  value: string
  description: string
  longDescription: string
}

type Props = {
  items: Fact[]
}

export const FactColumns: React.FC<Props> = ({ items }) => {
  return (
    <div className="space-y-14">
      {items.map(({ value, description, longDescription }) => (
        <div key={value} className="items-center justify-between md:flex">
          <div className="rounded-md bg-white px-6 py-4 text-center shadow-lg md:w-[35%] w-full">
            <div className="font-extrabold text-rs8-pink lg:text-[32px] lg:leading-[48px]">
              {value}
            </div>
            <div className="text-[ text-rs8-blue">{description}</div>
          </div>
          {longDescription && (
            <div className="mt-8 md:mt-0 md:w-[55%]">{longDescription}</div>
          )}
        </div>
      ))}
    </div>
  )
}
