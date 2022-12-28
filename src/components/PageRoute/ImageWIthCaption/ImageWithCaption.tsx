import React from 'react'
import { Lightbox } from '../Lightbox'

type Props = {
  image: React.ReactNode
  children: string | React.ReactNode
}

export const ImageWithCaption: React.FC<Props> = ({ image, children }) => {
  return (
    <figure>
      <Lightbox image={image}>{children}</Lightbox>
      <figcaption className="text-[0.85rem] italic">{children}</figcaption>
    </figure>
  )
}
