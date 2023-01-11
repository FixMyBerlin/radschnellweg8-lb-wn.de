import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TSectionHeader } from './types'

export const section3Header: TSectionHeader = {
  id: 'teilstrecke-3',
  title: 'Teilstrecke 3 von Waiblingen-Hegnach bis Ortseingang Waiblingen',
  owner:
    'Baulastträger: Rems-Murr-Kreis / Stadt Waiblingen (Hegnach innerorts)',
  intro: (
    <>
      Aus Richtung Remseck-Neckarrems kommend soll der Radschnellweg RS 8 nach
      aktuellem Planungsstand auf einem Teilstück des bestehenden Geh- und
      Radweges parallel zur Landesstraße L 1142 geführt werden und nach einer
      Unterquerung der Landesstraße über die Oeffinger Straße am südlichen Rand
      von Waiblingen-Hegnach verlaufen. Im Anschluss orientiert sich der Verlauf
      des Radschnellwegs wieder an der L 1142 und verläuft über die bestehenden
      Wege der Hegnacher Höhe an der Schmidener Straße in Richtung Bahnhof
      Waiblingen.
    </>
  ),
  image: <StaticImage src="../assets/Teilstrecke-3.svg" alt="" />,
}
