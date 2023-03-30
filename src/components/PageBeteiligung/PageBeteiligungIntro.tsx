import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Section } from '../Layout'
import { ImageSlide } from '../Images'
import { H2, P } from '../Text'
import { Link } from '../Link'
import { Image } from '../Images/Image'

export const PageBeteiligungIntro: React.FC = () => {
  return (
    <Section>
      <P>
        Auf dem Weg zur Schule, Sportstätte und Arbeitsplatz, beim Wocheneinkauf
        oder dem Familienausflug – unser Ziel ist, dass der Radschnellweg von
        vielen Menschen angenommen wird.
      </P>

      <ImageSlide />

      <H2>Bürgerbeteiligung</H2>
      <P>
        Deshalb interessieren uns die Ideen, Anmerkungen und Hinweise von
        Alltagsexpertinnen und -experten. Sie kennen sich vor Ort aus.
        Unterstützen Sie das Planungsteam dabei, den RS 8 zum Erfolgsprojekt zu
        machen!
      </P>
      <P>
        Die Bürgerbeteiligung läuft noch bis zum X.X.2023. Die Beantwortung
        dauert ca. 5-10 Minuten.
      </P>

      <div className="my-12 flex justify-center">
        <Link button to="/beteiligung">
          Beteiligung starten
        </Link>
      </div>

      <H2>Die geplante Route</H2>
      <P>
        Möchten Sie sich vorher noch einmal über die genaue Route informieren?{' '}
        <Link to="/route">Hier</Link> können Sie sich die geplante
        Streckenführung noch einmal anschauen.
      </P>

      <div className="my-12">
        <Image
          image={
            <StaticImage
              src="../../images/rs8_map.jpg"
              alt="Gesamtstrecke von Ludwigsburg nach Waiblingen auf einer Karte"
            />
          }
        />
      </div>

      <H2>So funktioniert die Bürgerbeteiligung</H2>
      <ol className="list-inside list-decimal space-y-6 marker:font-bold">
        <li>
          <strong>Sie sagen uns Ihre Meinung.</strong>
          <br />
          Im ersten Teil der Bürgerbeteiligung stellen wir ein paar allgemeine
          Fragen. Uns interessiert, ob und wie Sie den Radschnellweg nutzen
          würden und welche Ausstattungsmerkmale Ihnen dabei wichtig sind.
        </li>
        <li>
          <strong>Sie geben uns weitere Hinweise.</strong>
          <br />
          Im zweiten Teil der Bürgerbeteiligung haben Sie die Möglichkeit, uns
          gezielt Hinweise zu einzelnen Themen oder konkreten Stellen entlang
          der Route zu geben.
        </li>
        <li>
          <strong>
            Ihr Feedback wird bei der weiteren Planung berücksichtigt.
          </strong>
          <br />
          Nach Abschluss der Beteiligung (X.X.2023) werden die eingegangenen
          Anregungen vom Planungsteam ausgewertet und geprüft, ob und inwieweit
          sie in die weitere Entwurfsplanung einfließen können. Wir bitten im
          Vorhinein um Verständnis, dass wir nicht jeden Hinweis kommentieren
          können. Nach der Auswertung werden wir gebündelt Rückmeldung zu den
          angesprochenen Themen geben.
        </li>
      </ol>

      <div className="my-12 flex justify-center">
        <Link button to="/beteiligung">
          Beteiligung starten
        </Link>
      </div>
    </Section>
  )
}
