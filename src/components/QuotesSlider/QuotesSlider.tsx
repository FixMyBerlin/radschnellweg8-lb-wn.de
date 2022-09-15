import React from 'react'

type Slide = {
  quote: string
  person: string
  position: string
}

type Props = {
  items: Slide[]
}

export const QuotesSlider: React.FC<Props> = ({ items }) => {
  const item = items[0]
  return (
    <figure>
      <blockquote>
        <p>„{item.quote}“</p>
      </blockquote>
      <figcaption>
        <span>{item.person}</span>
        <span>{item.position}</span>
      </figcaption>
    </figure>
  )
}
