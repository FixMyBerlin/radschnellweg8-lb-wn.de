import React from 'react'
import { Section } from '../Layout'
import { LinkMail, P } from '../Text'

export const PageFaqOutro: React.FC = () => {
  return (
    <Section>
      <P>
        Sollten Sie eine Frage haben, die hier nicht beantwortet wird, können
        Sie sich gerne mit uns in Verbindung setzen:{' '}
        <LinkMail>info@radschnellweg8-lb-wn.de</LinkMail>
      </P>
    </Section>
  )
}
