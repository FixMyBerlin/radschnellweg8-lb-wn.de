import React from 'react'
import { Section } from '../Layout'
import { P } from '../Text'

export const PageRouteIntro: React.FC = () => {
  return (
    <Section>
      <P>
        Der Radschnellweg RS 8 verbindet die Städte Ludwigsburg, Remseck und
        Waiblingen. Auf diesen Seiten erhalten Sie Information zu Anforderungen,
        Planungsstand und Beteiligungsmöglichkeiten dieses Gemeinschaftsprojekts
        des Rems-Murr-Kreises mit dem Landkreis Ludwigsburg, der Stadt
        Ludwigsburg, der Stadt Waiblingen und der Stadt Remseck am Neckar.
      </P>
      <P>
        Unten finden Sie jeweils eine Beschreibung der aktuell geplanten
        Routenführung sowie Detailhinweise zu jeder Teilstrecke.
      </P>
    </Section>
  )
}
