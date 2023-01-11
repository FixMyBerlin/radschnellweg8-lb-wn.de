import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { TSectionHeader } from './types'

export const section1Header: TSectionHeader = {
  id: 'teilstrecke-1',
  title: 'Teilstrecke 1: Ludwigsburg Bahnhof bis Friedhof Oßweil',
  owner: 'Baulastträgerin: Stadt Ludwigsburg',
  intro: (
    <>
      Starten soll die Radschnellverbindung am Ludwigsburger Bahnhof. So bindet
      der RS 8, wie in Waiblingen, an einen regionalbedeutsamen Mobilitätsknoten
      an. Er wird voraussichtlich in der Myliusstraße beginnen und dann in die
      Alleenstraße abbiegen. Der RS 8 verläuft dann in Richtung Osten durch den
      Innenstadtcampus mit den Schulen und der Filmakademie. Er erschließt somit
      bedeutsame Bildungsstandorte. Die B 27 kreuzend, geht es weiter in
      Richtung Osten über die Friedrich-Ebert-Straße am Forum vorbei. Beim Forum
      verlaufen wichtige Hauptradrouten in Nord-Süd-Richtung, die hier an die
      Radschnellverbindung anschließen. Nach aktuellem Planungsstand läuft der
      Weg dann weiter durch die Oststadt bis zur Oststraße. In Richtung
      nördliche Stadtteile zweigt hier wieder eine Hauptradroute ab. Weiter nach
      Osten geht es durch den Sportpark Ost bis an den Grünzug, der an den
      benachbarten Stadtteil Oßweil grenzt. In Oßweil sind die Varianten noch
      nicht festgelegt. Am Ostfriedhof an der Schmidener Straße schließt der RS
      8 an den Abschnitt des Landkreises an.
    </>
  ),
  image: (
    <StaticImage
      src="../assets/Teilstrecke-1.svg"
      alt="Die Blühstreifen werden mit heimischem Saatgut eingesät und stellen wichtige Nahrungs-, Fortpflanzungs- und Rückzugsbiotope für Insekten und andere Kleintiere dar. © Pixabay, Levke Hannemann"
    />
  ),
}
