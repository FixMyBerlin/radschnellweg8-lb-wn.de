import React from 'react'
import { Facts } from '../Facts'
import { Section } from '../Layout'

export const PageHomeFacts: React.FC = () => {
  const facts = [
    {
      value: '15 Kilometer',
      description: 'Gesamtlänge des RS 8',
      longDescription:
        'Der Radschnellweg führt vom Ludwigsburger Zentrum über Oßweil entlang der L 1140 nach Remseck am Neckar, führt dort durch Neckargröningen und Neckarrems und dann über Hegnach nach Waiblingen.',
    },
    {
      value: '4 Baulastträger',
      description: 'Ein Gemeinschaftsprojekt',
      longDescription:
        'Der RS 8 verbindet zwei Landkreise und drei Kommunen. Die Kreise und die Städte Ludwigsburg und Waiblingen planen in eigener Baulast, die Baulast für Remseck am Neckar trägt der Kreis Ludwigsburg.',
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
        'Ca. 2 Mio. € Baukosten pro Kilometer klingen zunächst viel, sind aber tatsächlich nur ein Bruchteil dessen, was z. B. Kreis- oder Landesstraßen kosten. Bei den Baukosten handelt es sich um eine Abschätzung aus der Machbarkeitsstudie, die tatsächliche Höhe ist abhängig von der konkreten Ausgestaltung.',
    },
    {
      value: 'Bis zu 90 %',
      description: 'Förderung von Bund und Land',
      longDescription:
        'Radschnellwege werden als besonders positives Infrastrukturelement finanziell gefördert. Für die Planung gibt es eine Förderung in Höhe von 87,5 % der Kosten, beim Bau sind es je nach Einhaltung der Qualitätsstandards sogar bis zu 90 %.',
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
