import React from 'react'
import { TSectionDetails, TSectionHeader } from '../data.const'
import { SectionDetails } from './SectionDetails'
import { SectionHeader } from './SectionHeader'

type Props = {
  header: TSectionHeader
  details: TSectionDetails[]
}

export const Section: React.FC<Props> = ({ header, details }) => {
  return (
    <div>
      <SectionHeader header={header} />
      <SectionDetails details={details} />
    </div>
  )
}
