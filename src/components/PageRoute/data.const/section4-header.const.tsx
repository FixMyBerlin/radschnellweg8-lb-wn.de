import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TSectionHeader } from './types'

export const section4Header: TSectionHeader = {
  id: 'teilstrecke-4',
  title: 'Teilstrecke 4 von Ortseingang Waiblingen bis Waiblingen Bahnhof',
  owner: 'Baulastträgerin: Stadt Waiblingen',
  intro: (
    <>
      Auf dem Radschnellweg sollen Radfahrende die Schmidener Straße
      konfliktfrei durch eine neue Überführung kreuzen. Dann verläuft die
      Strecke entlang der Kleingärten und parallel zu Bahntrasse, unterquert
      diese beim Knotenpunkt Dammstraße/Fronackerstraße/Westtangente und führt
      die Radfahrerinnen und Radfahrer anschließend über die Dammstraße in
      Richtung Bahnhof.
    </>
  ),
  image: <StaticImage src="../assets/Teilstrecke-4.svg" alt="" />,
}
