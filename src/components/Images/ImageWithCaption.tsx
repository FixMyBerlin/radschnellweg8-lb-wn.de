import React from 'react'

type Props = {
  image: React.ReactNode
  children: string | React.ReactNode
}

export const ImageWithCaption: React.FC<Props> = ({ image, children }) => {
  return (
    <figure>
      {image}
      <figcaption className="text-[0.85rem] italic">{children}</figcaption>
    </figure>
  )
}
