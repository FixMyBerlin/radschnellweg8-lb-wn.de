import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Section } from '../Layout'
import { QuotesSlider } from '../QuotesSlider'

export const PageHomeQuotes: React.FC = () => {
  const quotes = [
    {
      image: (
        <StaticImage
          src="./assets/portraits/wolf.jpeg"
          alt="Sebastian Wolf; Bild: © Stadt Waiblingen"
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote:
        'Die bessere Verknüpfung der Wirtschaftsräume Waiblingen/Ludwigsburg ist uns ein wichtiges Anliegen. Der Radschnellweg verbindet dieses Vorhaben hervorragend mit dem Ziel einer nachhaltigeren Mobilität.',
      person: 'Sebastian Wolf',
      position: 'Oberbürgermeister Waiblingen',
    },
    {
      image: (
        <StaticImage
          src="./assets/portraits/sigel.jpeg"
          alt="Dr. Richard Sigel; Bild: © Rems-Murr-Kreis"
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote:
        'Radschnellverbindungen ebnen den Weg für nachhaltige Mobilität und können gerade beim RS8 die Hauptverkehrsachsen zwischen unseren beiden Landkreisen entlasten.',
      person: 'Dr. Richard Sigel',
      position: 'Landrat Rems-Murr-Kreis',
    },
    {
      image: (
        <StaticImage
          src="./assets/portraits/allgaier.jpeg"
          alt="Dietmar Allgaier; Bild: © Landkreis Ludwigsburg"
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote:
        'Wir freuen uns, dass wir gemeinsam an der Realisierung einer der ersten Radschnellwege im Land beteiligt sind.',
      person: 'Dietmar Allgaier',
      position: 'Landrat Kreis Ludwigsburg',
    },
    {
      image: (
        <StaticImage
          src="./assets/portraits/hermann.jpeg"
          alt="Winfried Hermann; Bild: ©  Ministerium für Verkehr BW, Daniel Mühlebach"
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote:
        'Es freut mich sehr, dass der Rems-Murr-Kreis, der Kreis Ludwigsburg und alle beteiligten Kommunen eine leistungsstarke und schnelle Radverbindung für Pendlerinnen und Pendler zwischen Waiblingen und Ludwigsburg realisieren möchten.',
      person: 'Winfried Hermann',
      position: 'Minister für Verkehr des Landes Baden-Württemberg',
    },
    {
      image: (
        <StaticImage
          src="./assets/portraits/knecht.jpeg"
          alt="Dr. Matthias Knecht; Bild: © Stadt Ludwigsburg"
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote:
        'Der Ausbau des Radschnellwegs ist ein hervorragendes Beispiel für nachhaltige Mobilität über Stadt- und Kreisgrenzen hinweg.',
      person: 'Dr. Matthias Knecht',
      position: 'Oberbürgermeister Ludwigsburg',
    },
    {
      image: (
        <StaticImage
          src="./assets/portraits/schoenberger.jpeg"
          alt="Dirk Schönberger; Bild: © Stadt Remseck am Neckar"
          className="h-[130px] w-[130px] overflow-hidden rounded-full lg:h-[320px] lg:w-[320px]"
        />
      ),
      quote:
        'Wir freuen uns sehr, dass mit dem Radschnellweg eine Ergänzung zu dem eher touristisch orientierten Rems-Radweg, der den Schleifen der Rems folgt, nun eine direkte Radverbindung erstellt wird, die insbesondere von den Pendlern und Rennradfahren genutzt werden kann.',
      person: 'Dirk Schönberger',
      position: 'Oberbürgermeister Remseck am Neckar',
    },
  ]

  const randomQuotes = quotes.sort(() => Math.random() - 0.5)

  return (
    <Section>
      <QuotesSlider items={randomQuotes} />
    </Section>
  )
}
