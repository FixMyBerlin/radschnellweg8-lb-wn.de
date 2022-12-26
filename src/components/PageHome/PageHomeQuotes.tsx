import { Section } from '@components/Layout/Section'
import { useMemo } from 'react'
import { QuotesSlider } from './QuotesSlider'

export type Quote = {
  image: {
    src: string
    alt: string
  }
  source: string
  quote: string
  person: string
  position: string
}

const quotes: Quote[] = [
  {
    image: {
      src: '/src/assets/home/portraits/wolf.jpeg',
      alt: 'Sebastian Wolf',
    },
    source: 'Foto: © Stadt Waiblingen',
    quote:
      'Die bessere Verknüpfung der Wirtschaftsräume Waiblingen/Ludwigsburg ist uns ein wichtiges Anliegen. Der Radschnellweg verbindet dieses Vorhaben hervorragend mit dem Ziel einer nachhaltigeren Mobilität.',
    person: 'Sebastian Wolf',
    position: 'Oberbürgermeister Waiblingen',
  },
  {
    image: {
      src: '/src/assets/home/portraits/sigel.jpeg',
      alt: 'Dr. Richard Sigel',
    },
    source: 'Foto: © Rems-Murr-Kreis',
    quote:
      'Radschnellverbindungen ebnen den Weg für nachhaltige Mobilität und können gerade beim RS8 die Hauptverkehrsachsen zwischen unseren beiden Landkreisen entlasten.',
    person: 'Dr. Richard Sigel',
    position: 'Landrat Rems-Murr-Kreis',
  },
  {
    image: {
      src: '/src/assets/home/portraits/allgaier.jpeg',
      alt: 'Dietmar Allgaier',
    },
    source: 'Foto: © Landkreis Ludwigsburg',
    quote:
      'Wir freuen uns, dass wir gemeinsam an der Realisierung einer der ersten Radschnellwege im Land beteiligt sind.',
    person: 'Dietmar Allgaier',
    position: 'Landrat Kreis Ludwigsburg',
  },
  {
    image: {
      src: '/src/assets/home/portraits/hermann.jpeg',
      alt: 'Winfried Hermann',
    },
    source: `Foto: ©  Ministerium für Verkehr BW, Daniel Mühlebach`,
    quote:
      'Es freut mich sehr, dass der Rems-Murr-Kreis, der Kreis Ludwigsburg und alle beteiligten Kommunen eine leistungsstarke und schnelle Radverbindung für Pendlerinnen und Pendler zwischen Waiblingen und Ludwigsburg realisieren möchten.',
    person: 'Winfried Hermann',
    position: 'Minister für Verkehr des Landes Baden-Württemberg',
  },
  {
    image: {
      src: '/src/assets/home/portraits/knecht.jpeg',
      alt: 'Dr. Matthias Knecht',
    },
    source: 'Foto: © Stadt Ludwigsburg',
    quote:
      'Der Ausbau des Radschnellwegs ist ein hervorragendes Beispiel für nachhaltige Mobilität über Stadt- und Kreisgrenzen hinweg.',
    person: 'Dr. Matthias Knecht',
    position: 'Oberbürgermeister Ludwigsburg',
  },
  {
    image: {
      src: '/src/assets/home/portraits/schoenberger.jpeg',
      alt: 'Dirk Schönberger',
    },
    source: 'Foto: © Stadt Remseck am Neckar',
    quote:
      'Wir freuen uns sehr, dass mit dem Radschnellweg eine Ergänzung zu dem eher touristisch orientierten Rems-Radweg, der den Schleifen der Rems folgt, nun eine direkte Radverbindung erstellt wird, die insbesondere von den Pendlern und Rennradfahren genutzt werden kann.',
    person: 'Dirk Schönberger',
    position: 'Oberbürgermeister Remseck am Neckar',
  },
]

export const PageHomeQuotes: React.FC = () => {
  const items = useMemo(() => quotes.sort(() => Math.random() - 0.5), [quotes])

  return (
    <Section>
      <QuotesSlider items={items} />
    </Section>
  )
}
