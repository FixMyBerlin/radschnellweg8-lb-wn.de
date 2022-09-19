import React from 'react'
import { Section } from '../Layout'
import { Button, H2, P } from '../Text'

export const PageHomeNewsletter: React.FC = () => {
  return (
    <Section>
      <H2>Informiert bleiben</H2>
      <P>
        Tragen Sie sich gerne in unseren kostenlosen Newsletter ein und wir
        informieren Sie rechtzeitig, sobald es Neuigkeiten gibt und die
        Online-Beteiligung zur Radschnellverbindung startet. Sie können den
        Newsletter jederzeit ganz einfach kündigen.
      </P>

      <Button className="mt-4">Newsletter abonnieren</Button>
    </Section>
  )
}
