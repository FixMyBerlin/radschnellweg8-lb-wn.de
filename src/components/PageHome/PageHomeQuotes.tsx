import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'
import { Section } from '../Layout'
import { QuotesSlider } from '../QuotesSlider'

export type Quote = {
  image: React.ReactNode
  source: string
  quote: string
  person: string
  position: string
}

const quotes: Quote[] = [
  {
    image: (
      <StaticImage
        src="./assets/portraits/wolf.jpeg"
        alt="Sebastian Wolf"
        className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
      />
    ),
    source: 'Bild: © Stadt Waiblingen',
    quote:
      'Die bessere Verknüpfung der Wirtschaftsräume Waiblingen/Ludwigsburg ist uns ein wichtiges Anliegen. Der Radschnellweg verbindet dieses Vorhaben hervorragend mit dem Ziel einer nachhaltigeren Mobilität.',
    person: 'Sebastian Wolf',
    position: 'Oberbürgermeister Waiblingen',
  },
  {
    image: (
      <StaticImage
        src="./assets/portraits/sigel.jpeg"
        alt="Dr. Richard Sigel"
        className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
      />
    ),
    source: 'Bild: © Rems-Murr-Kreis',
    quote:
      'Radschnellverbindungen ebnen den Weg für nachhaltige Mobilität und können gerade beim RS8 die Hauptverkehrsachsen zwischen unseren beiden Landkreisen entlasten.',
    person: 'Dr. Richard Sigel',
    position: 'Landrat Rems-Murr-Kreis',
  },
  {
    image: (
      <StaticImage
        src="./assets/portraits/allgaier.jpeg"
        alt="Dietmar Allgaier"
        className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
      />
    ),
    source: 'Bild: © Landkreis Ludwigsburg',
    quote:
      'Wir freuen uns, dass wir gemeinsam an der Realisierung einer der ersten Radschnellwege im Land beteiligt sind.',
    person: 'Dietmar Allgaier',
    position: 'Landrat Kreis Ludwigsburg',
  },
  {
    image: (
      <StaticImage
        src="./assets/portraits/hermann.jpeg"
        alt="Winfried Hermann"
        className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
      />
    ),
    source: 'Bild: ©  Ministerium für Verkehr BW, Daniel Mühlebach',
    quote:
      'Es freut mich sehr, dass der Rems-Murr-Kreis, der Kreis Ludwigsburg und alle beteiligten Kommunen eine leistungsstarke und schnelle Radverbindung für Pendlerinnen und Pendler zwischen Waiblingen und Ludwigsburg realisieren möchten.',
    person: 'Winfried Hermann',
    position: 'Minister für Verkehr des Landes Baden-Württemberg',
  },
  {
    image: (
      <StaticImage
        src="./assets/portraits/knecht.jpeg"
        alt="Dr. Matthias Knecht"
        className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
      />
    ),
    source: 'Bild: © Stadt Ludwigsburg',
    quote:
      'Der Ausbau des Radschnellwegs ist ein hervorragendes Beispiel für nachhaltige Mobilität über Stadt- und Kreisgrenzen hinweg.',
    person: 'Dr. Matthias Knecht',
    position: 'Oberbürgermeister Ludwigsburg',
  },
  {
    image: (
      <StaticImage
        src="./assets/portraits/schoenberger.jpeg"
        alt="Dirk Schönberger"
        className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
      />
    ),
    source: 'Bild: © Stadt Remseck am Neckar',
    quote:
      'Wir freuen uns sehr, dass mit dem Radschnellweg eine Ergänzung zu dem eher touristisch orientierten Rems-Radweg, der den Schleifen der Rems folgt, nun eine direkte Radverbindung erstellt wird, die insbesondere von den Pendlern und Rennradfahren genutzt werden kann.',
    person: 'Dirk Schönberger',
    position: 'Oberbürgermeister Remseck am Neckar',
  },
]

export const PageHomeQuotes: React.FC = () => {
  const ssrItem: Quote[] = [
    {
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 320"
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        >
          <circle cx="50%" cy="50%" r="160" fill="rgb(248 250 252)" />
        </svg>
      ),
      source: '',
      quote: '',
      person: '',
      position: '',
    },
  ]

  const [items, setItems] = useState(ssrItem)

  useEffect(() => {
    setItems(quotes.sort(() => Math.random() - 0.5))
  }, [])

  return (
    <Section>
      <QuotesSlider items={items} />
    </Section>
  )
}
