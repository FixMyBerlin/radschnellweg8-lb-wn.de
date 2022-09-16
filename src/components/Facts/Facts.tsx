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
          className="my-14 flex items-center justify-between first:mt-0 last:mb-0"
          key={item.value}
        >
          <div className="w-[35%] rounded-md bg-white py-4 px-6 text-center drop-shadow">
            <div className="text-[32px] font-extrabold leading-[48px] text-rs8-pink">
              {item.value}
            </div>
            <div className="text-[ text-rs8-blue">{item.description}</div>
          </div>
          <div className="w-[55%]">{item.longDescription}</div>
        </div>
      ))}
    </>
  )
}
