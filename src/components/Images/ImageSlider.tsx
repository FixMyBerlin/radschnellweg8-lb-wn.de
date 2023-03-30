// This component was derived from QuotesSlider.tsx

import React, { useEffect, useState } from 'react'
import { CaptionImage } from './ImageSlide'

type Props = {
  items: CaptionImage[]
}

export const ImageSlider: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState<number>(0)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setActive((active + 1) % items.length)
    }, 7000)

    return () => clearInterval(imageInterval)
  }, [active])

  return (
    <div className="relative my-12">
      {items.map((item, index) => (
        <figure
          className={`transition-opacity duration-500 ${
            index === active ? 'visible opacity-100' : 'hidden opacity-0'
          }`}
        >
          <div className="flex flex-col justify-between space-y-6">
            {item.image}
            <p className="max-w-[300px] text-[16px] leading-5 text-gray-400">
              {item.caption}
            </p>
          </div>
        </figure>
      ))}
    </div>
  )
}
