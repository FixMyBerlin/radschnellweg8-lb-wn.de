import React from 'react'
import { Section } from '~/components/Layout'
import { TSectionDetails, TSectionHeader } from '../data.const'
import { SectionDetails } from './SectionDetails'
import { SectionHeader } from './SectionHeader'

type Props = {
  header: TSectionHeader
  details: TSectionDetails[]
}

export const PageRouteSection: React.FC<Props> = ({ header, details }) => {
  return (
    <Section>
      <SectionHeader header={header} />
      <SectionDetails details={details} />
    </Section>
  )
}
