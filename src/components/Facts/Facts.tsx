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
    <>
      {items.map((item) => (
        <div
          className="my-14 items-center justify-between first:mt-0 last:mb-0 md:flex"
          key={item.value}
        >
          <div className="rounded-md bg-white py-4 px-6 text-center drop-shadow md:w-[35%]">
            <div className="font-extrabold text-rs8-pink lg:text-[32px] lg:leading-[48px]">
              {item.value}
            </div>
            <div className="text-[ text-rs8-blue">{item.description}</div>
          </div>
          <div className="mt-8 md:mt-0 md:w-[55%]">{item.longDescription}</div>
        </div>
      ))}
    </>
  )
}
