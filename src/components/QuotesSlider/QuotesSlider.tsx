import React, { useState } from 'react'
import classNames from 'classnames'
import {
  AnnotationIcon,
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline'

type Slide = {
  quote: string
  person: string
  position: string
  image: React.ReactNode
}

type Props = {
  items: Slide[]
}

export const QuotesSlider: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState<number>(0)
  const arrow = (icon, right = false) => {
    if ((right && active === items.length - 1) || (!right && active === 0)) {
      return null
    }
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          setActive(
            Math.min(items.length - 1, Math.max(0, active + (right ? 1 : -1)))
          )
        }}
        className={classNames(
          'absolute top-[138px] block h-14 w-14 text-gray-400 hover:text-rs8-blue',
          {
            'left-0': !right,
            'right-0': right,
          }
        )}
      >
        {icon}
      </button>
    )
  }
  return (
    <div className="relative mt-10 mb-[110px] h-[20em] px-[70px]">
      {arrow(<ArrowCircleLeftIcon />)}
      {items.map((item, index) => (
        <figure
          className={`absolute left-[70px] right-[70px] flex transition-opacity duration-500 ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div>
            <div className="h-[320px] w-[320px] overflow-hidden rounded-full">
              {item.image}
            </div>
          </div>
          <div className="relative pl-10 pt-12">
            <AnnotationIcon className="absolute top-[-30px] left-0 z-[-1] w-[200px] text-gray-100" />
            <blockquote className="text-[24px] font-medium leading-[32px]">
              {item.quote}
            </blockquote>
            <figcaption className="text-[16px] leading-[24px]">
              <span className="mt-8 block font-extrabold text-rs8-blue">
                {item.person}
              </span>
              <span className="block text-rs8-pink">{item.position}</span>
            </figcaption>
          </div>
        </figure>
      ))}
      {arrow(<ArrowCircleRightIcon />, true)}
    </div>
  )
}
