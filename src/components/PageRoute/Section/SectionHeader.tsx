import React from 'react'
import { H2, P } from '~/components/Text'
import { TSectionHeader } from '../data.const/types'

type Props = {
  header: TSectionHeader
}

export const SectionHeader: React.FC<Props> = ({ header }) => {
  return (
    <header id={header.id} className="mb-11 scroll-m-8">
      <H2>{header.title}</H2>
      <P>{header.owner}</P>
      <P className="mb-11">{header.intro}</P>
      <div>{header.image}</div>
    </header>
  )
}
