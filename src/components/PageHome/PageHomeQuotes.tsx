import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Section } from '../Layout'
import { QuotesSlider } from '../QuotesSlider'

export const PageHomeQuotes: React.FC = () => {
  const quotes = [
    {
      image: (
        <StaticImage
          src="../../images/portraits/sigel.jpeg"
          alt=""
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote: `Radschnellverbindungen ebnen den Weg für nachhaltige
    Mobilität und können gerade beim RS8 die Hauptverkehrsachsen zwischen
    unseren beiden Landkreisen entlasten`,
      person: 'Dr. Richard Sigel',
      position: 'Landrat Rems-Murr-Kreis',
    },
    {
      image: (
        <StaticImage
          src="../../images/portraits/allgaier.jpeg"
          alt=""
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote: `Wir freuen uns, dass wir gemeinsam an der Realisierung einer der
  ersten Radschnellwege im Land beteiligt sind.`,
      person: 'Dietmar Allgaier',
      position: 'Landrat Kreis Ludwigsburg',
    },
    {
      image: (
        <StaticImage
          src="../../images/portraits/hesky.jpeg"
          alt=""
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote: `Die Verbindung der Wirtschaftsräume Ludwigsburg/Waiblingen ist
    wichtig und ein zentrales Anliegen nicht nur der Unternehmen, sondern auch
    der Menschen, wie das Projekt des Radschnellwegs zeigt.`,
      person: 'Andreas Hesky',
      position: 'Oberbürgermeister a.D. Waiblingen',
    },
    {
      image: (
        <StaticImage
          src="../../images/portraits/hermann.jpeg"
          alt=""
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote: `Es freut mich sehr, dass der Rems-Murr-Kreis, der Kreis Ludwigsburg
    und alle beteiligten Kommunen eine leistungsstarke und schnelle
    Radverbindung für Pendlerinnen und Pendler zwischen Waiblingen und
    Ludwigsburg realisieren möchten.`,
      person: 'Winfried Hermann',
      position: 'Minister für Verkehr des Landes Baden-Württemberg',
    },
    {
      image: (
        <StaticImage
          src="../../images/portraits/knecht.jpeg"
          alt=""
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote: `Der Ausbau des Radschnellwegs ist ein hervorragendes Beispiel für
    nachhaltige Mobilität über Stadt- und Kreisgrenzen hinweg.`,
      person: 'Dr. Matthias Knecht',
      position: 'Oberbürgermeister Ludwigsburg',
    },
    {
      image: (
        <StaticImage
          src="../../images/portraits/schoenberger.jpeg"
          alt=""
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote: `Wir freuen uns sehr, dass mit dem Radschnellweg eine Ergänzung zu
    dem eher touristisch orientierten Rems-Radweg, der den Schleifen der Rems
    folgt, nun eine direkte Radverbindung erstellt wird, die insbesondere von
    den Pendlern und Rennradfahren genutzt werden kann.`,
      person: 'Dirk Schönberger',
      position: 'Oberbürgermeister Remseck am Neckar',
    },
  ]

  return (
    <Section>
      <QuotesSlider items={quotes} />
    </Section>
  )
}
