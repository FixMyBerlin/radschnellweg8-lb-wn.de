import React from 'react'
import { TSectionHeader } from '../data.const/types'

type Props = {
  header: TSectionHeader
}

export const SectionHeader: React.FC<Props> = ({ header }) => {
  return (
    <header
      id={header.id}
      className="mb-11 scroll-m-8 md:-ml-10 md:-mr-10 lg:-ml-48 lg:-mr-48"
    >
      <h2>{header.title}</h2>
      <p>{header.owner}</p>
      <p className="mb-11">{header.intro}</p>
      <div>{header.image}</div>
    </header>
  )
}
