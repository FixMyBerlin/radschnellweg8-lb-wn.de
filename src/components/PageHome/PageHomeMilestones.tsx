import React from 'react'
import { Section } from '../Layout'
import { LinkExternal } from '../Link'
import { MileStones } from '../MileStones'
import { H2 } from '../Text'

export const PageHomeMilestones: React.FC = () => {
  const milestones = [
    {
      name: 'Idee',
      description:
        'Bildung einer Projektgruppe aus Verantwortlichen der Kreise und Städte, Organisation von Workshops mit niederländischen Radverkehrsplanern (ab 2017)',
    },
    {
      name: 'Machbarkeitsanalyse',
      description: (
        <>
          Zwei Planungsbüros prüfen die Trassenvarianten auf Herz und Nieren,
          ermitteln Potenziale und wägen Nutzen und Kosten gegeneinander ab (ab
          2018).{' '}
          <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/verkehr-sicherheit-ordnung/radverkehr/radschnellwege/machbarkeitsstudie-radschnellverbindung-ludwigsburg-waiblingen/">
            Zur Machbarkeitsanalyse
          </LinkExternal>
          .
        </>
      ),
    },
    {
      name: 'Förderung',
      description:
        'Für die geplante Strecke wird eine Förderung bei Bund und Land beantragt. Erfolgreich! (2020)',
    },
    {
      name: 'Benennung',
      description:
        'Mit der Förderung bekommt das Projekt einen Namen „Radschnellweg RS 8“ (2020)',
    },
    {
      name: 'Vorplanung',
      description: (
        <>
          Nach Rückversicherung bei den politischen Gremien beginnt jeder
          Projektträger im Rahmen seiner Zuständigkeit mit der Vorplanung. Hier
          werden die Vorarbeiten aus{' '}
          <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/verkehr-sicherheit-ordnung/radverkehr/radschnellwege/machbarkeitsstudie-radschnellverbindung-ludwigsburg-waiblingen/">
            der Machbarkeitsanalyse
          </LinkExternal>{' '}
          konkretisiert und eine Trasse festgelegt. (2020–2022)
        </>
      ),
    },
    {
      name: 'Bürgerbeteiligung',
      description: '(geplant Q2 2023)',
      comingUp: true,
    },
    {
      name: 'Entwurfsplanung',
      description: '(geplant 2022–23)',
      comingUp: true,
    },
    {
      name: 'Anhörung Träger öffentlicher Belange',
      description: '(geplant 2023)',
      comingUp: true,
    },
    {
      name: 'Politische Beschlüsse',
      description: '(geplant 2023)',
      comingUp: true,
    },
    { name: 'Bau', description: '(geplant ab 2024)', comingUp: true },
  ]

  return (
    <span>
      <Section>
        <H2>Die Meilensteine</H2>
        <MileStones items={milestones} />
      </Section>
    </span>
  )
}
