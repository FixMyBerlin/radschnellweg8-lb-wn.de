import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Section } from '../Layout'
import { P } from '../Text'
import { Lightbox } from './Lightbox'

export const PageRouteIntro: React.FC = () => (
  <Section>
    <P>
      Der Radschnellweg RS 8 verbindet die Städte Ludwigsburg, Remseck und
      Waiblingen. Auf diesen Seiten erhalten Sie Information zu Anforderungen,
      Planungsstand und Beteiligungsmöglichkeiten dieses Gemeinschaftsprojekts
      des Rems-Murr-Kreises mit dem Landkreis Ludwigsburg, der Stadt
      Ludwigsburg, der Stadt Waiblingen und der Stadt Remseck am Neckar.
    </P>

    <Lightbox
      image={
        <StaticImage
          src="./assets/TS2Detailpkt4.1-Unterfuehrung_K1666_LRA-LB.PNG"
          alt="Bestehendes Radroutennetz der Stadt Ludwigsburg. © Stadt Ludwigsburg"
        />
      }
    />
    <P>
      Unten finden Sie jeweils eine Beschreibung der aktuell geplanten
      Routenführung sowie Detailhinweise zu jeder Teilstrecke.
    </P>
  </Section>
)
