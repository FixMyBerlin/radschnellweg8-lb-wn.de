import React from 'react'
import { TSectionHeader } from '../data.const/types'
import { Lightbox } from '../Lightbox'

type Props = {
  header: TSectionHeader
}

export const SectionHeader: React.FC<Props> = ({ header }) => {
  return (
    <header id={header.id} className="mb-11 scroll-m-8">
      <h2>{header.title}</h2>
      <p>{header.owner}</p>
      <p className="mb-11">{header.intro}</p>
      <div className="hidden lg:block">
        <Lightbox image={header.image}>{header.title}</Lightbox>
      </div>
      <div className="lg:hidden">{header.image}</div>
    </header>
  )
}
