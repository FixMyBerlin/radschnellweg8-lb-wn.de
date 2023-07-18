// This component was derived from QuotesSlider.tsx

import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import { CaptionImage } from './ImageSlide'

type Props = {
  items: CaptionImage[]
}

export const ImageSlider: React.FC<Props> = ({ items }) => {
  const [active, setActive] = useState<number>(0)
  const [manualMode, setManualMode] = useState<boolean>(false)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      if (!manualMode) {
        setActive((active + 1) % items.length)
      }
    }, 3000)

    return () => clearInterval(imageInterval)
  }, [active])

  const arrow = (icon, right = false) => {
    if ((right && active === items.length - 1) || (!right && active === 0)) {
      return null
    }

    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          setManualMode(true)
          setActive(
            Math.min(items.length - 1, Math.max(0, active + (right ? 1 : -1))),
          )
        }}
        className={classNames(
          'absolute top-0 block h-14 w-14 text-gray-400 hover:text-rs8-blue lg:top-[45%]',
          {
            'right-[60px] lg:left-0': !right,
            'right-0': right,
          },
        )}
      >
        {icon}
      </button>
    )
  }

  return (
    <div className="relative my-16 h-[550px] px-[70px]">
      {arrow(<ArrowLeftCircleIcon />)}
      {items.map((item, index) => (
        <figure
          className={`transition-opacity duration-500 lg:absolute lg:left-[70px] lg:right-[70px] lg:flex ${
            index === active
              ? 'visible lg:opacity-100'
              : 'hidden lg:visible lg:opacity-0'
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
      {arrow(<ArrowRightCircleIcon />, true)}
    </div>
  )
}
