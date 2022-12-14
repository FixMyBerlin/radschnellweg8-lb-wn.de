import React from 'react'
import { Facts } from '../Facts'
import { Section } from '../Layout'

export const PageHomeFacts: React.FC = () => {
  const facts = [
    {
      value: '15 Kilometer',
      description: 'Gesamtlänge des RS 8',
      longDescription:
        'Die Radschnellverbindung führt vom Ludwigsburger Zentrum über Oßweil entlang der L 1140 nach Remseck am Neckar, führt dort durch Neckargröningen und Neckarrems und dann über Hegnach nach Waiblingen.',
    },
    {
      value: '4 Baulastträger',
      description: 'Ein Gemeinschaftsprojekt',
      longDescription:
        'Der RS 8 ist ein Gemeinschaftsprojekt der Kreis Rems-Murr und Ludwigsburg, sowie der Städte Ludwigsburg und Waiblingen. Die Baulast für die Strecke in Remseck trägt der Kreis Ludwigsburg.',
    },
    {
      value: '2.100 Radfahrende',
      description: 'pro Tag',
      longDescription:
        'So viele Radfahrende werden potentiell erwartet, wenn die Verbindung fertiggestellt ist. In die Berechnung fließen unterschiedliche Faktoren ein, wie zum Beispiel Unternehmen oder Bildungseinrichtungen entlang der Strecke.',
    },
    {
      value: '31 Millionen €',
      description: 'Gesamtkosten',
      longDescription:
        'Ca. 2 Mio. € Baukosten pro Kilometer klingen zunächst viel, sind aber tatsächlich nur ein Bruchteil dessen, was z.B. Kreis- oder Landesstraßen kosten.',
    },
    {
      value: '87,5 %',
      description: 'Förderung von Bund und Land',
      longDescription:
        'Radschnellverbindungen werden als besonders positives Infrastrukturelement finanziell gefördert.',
    },
    {
      value: '1,9',
      description: 'Nutzen-Kosten-Faktor',
      longDescription:
        'Die Wirkung von Baumaßnahmen berechnet man mit dem sogenannten Nutzen-Kosten-Faktor. Liegt dieser über 1 (so wie hier beim RS 8), so ist die Wirkung positiv: Der gesamtwirtschaftliche Nutzen der geplanten Verbindung ist höher als die erforderlichen Investitionskosten.',
    },
  ]

  return (
    <Section className="bg-rs8-blue py-12 text-white">
      <Facts items={facts} />
    </Section>
  )
}
