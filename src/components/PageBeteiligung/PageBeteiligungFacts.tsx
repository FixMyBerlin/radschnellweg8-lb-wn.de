import React from 'react'
import { FactGrid } from '../Facts/FactGrid'
import { Section } from '../Layout'
import { H2 } from '../Text'

export const PageBeteiligungFacts: React.FC = () => {
  const facts = [
    {
      value: '132',
      description: 'Zusätzliches Feedback',
    },
    {
      value: '406',
      description: 'Teilnahmen',
    },
    {
      value: '66',
      description: 'Interesse an Updates',
    },
    {
      value: '56',
      description: 'Beiträge mit Ortsangabe ',
    },
    {
      value: '76',
      description: 'Beiträge ohne Ortsangabe',
    },
    {
      value: '160',
      description: 'Gefällt mir',
    },
  ]

  return (
    <Section className="bg-rs8-blue pt-8 pb-20 text-white">
      <H2 className="text-center">Wer hat mitgemacht?</H2>
      <FactGrid items={facts} />
    </Section>
  )
}
