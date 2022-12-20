import React from 'react'
import { TSectionHeader } from '../data.const/types'

type Props = {
  header: TSectionHeader
}

export const SectionHeader: React.FC<Props> = ({ header }) => {
  return (
    <header id={header.id} className="mb-20 scroll-m-8">
      <h2>{header.title}</h2>
      <p>{header.owner}</p>
      <p>{header.intro}</p>
      {header.image}
    </header>
  )
}
