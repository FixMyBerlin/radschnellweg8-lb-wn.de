import { PlayIcon } from '@heroicons/react/outline'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import BaukostenImage from '~/images/baukosten-radverkehrsanlagen.jpg'
import { FAQ, FAQItem } from '../FAQ'
import { Section } from '../Layout'
import { H2, LinkExternal, P } from '../Text'

export const PageHomeFaqs: React.FC = () => {
  return (
    <Section>
      <H2 className="text-center">Häufig gestellte Fragen</H2>

      <FAQ>
        <FAQItem title="Was ist ein Radschnellweg?">
          <P>
            Radschnellwege sind extrabreite, direkte und möglichst
            kreuzungsfreie Wege, auf denen Radfahrerinnen und Radfahrer jeden
            Alters im eigenen Tempo direkt und sicher zum Ziel kommen. Eine
            klare Kennzeichnung und gute Beleuchtung der Fahrspuren erhöhen die
            Sicherheit und durch die Breite der Wege ist es möglich, problemlos
            nebeneinander zu fahren oder zu überholen. Obwohl man nicht
            unbedingt schneller fährt als auf herkömmlichen Radwegen, verkürzt
            sich die Fahrtzeit aufgrund der wenigen Stopps erheblich. Dadurch
            wird das Radfahren auch auf längeren Strecken attraktiv.
          </P>
        </FAQItem>
        <FAQItem title="Was zeichnet einen Radschnellweg aus?">
          <ul className="list-disc pl-5">
            <li>Gesamtstrecke mindestens fünf Kilometer</li>
            <li>Potenzial von mindestens 2.000 Fahrradfahrten täglich</li>
            <li>
              Breite mindestens zwischen drei Metern (Richtungsverkehr) und vier
              Metern (Zweirichtungsverkehr)
            </li>
            <li>In der Regel von anderen Verkehrsmitteln getrennt</li>
            <li>
              Routen möglichst kreuzungsfrei oder mit minimalen Wartezeiten an
              Kreuzungen
            </li>
            <li>Hohe Belagsqualität und eine möglichst geringe Steigung</li>
          </ul>
          <P>
            In den{' '}
            <LinkExternal href="https://www.aktivmobil-bw.de/radverkehr/radschnellverbindungen/qualitaetsstandards-und-musterloesungen/">
              Qualitätsstandards für Radschnellverbindungen in Baden-Württemberg
            </LinkExternal>{' '}
            werden für unterschiedliche Führungsformen verbindliche Standards
            festgelegt.
          </P>
        </FAQItem>
        <FAQItem title="Was kosten Radschnellwege?">
          <P>
            Die Kosten für einen Radschnellweg sind abhängig von seiner Länge,
            den verschiedenen Umbaumaßnahmen im Straßenkörper sowie der Menge an
            neuen Bauwerken bzw. deren Ausbau.
          </P>
          <P>
            Die prognostizierten Baukosten für die Radschnellverbindung
            Ludwigsburg&lt;&gt;Waiblingen (RS8) liegen bei: 31 Mio. Euro. Bei
            einer Strecke von ca. 15 Kilometern sind dies etwa 2,1 Mio.
            Euro/Kilometer.
          </P>
          <P>
            Zusätzlich müssen nach Fertigstellung, wie bei anderen Straßen auch,
            Kosten für den Unterhalt und anfallende Sanierungen eingeplant
            werden. Diese liegen aber deutlich unter den Erhaltungskosten von
            Straßen und Autobahnen, weil diese viel höheren Belastungen
            ausgesetzt sind.
          </P>
          <P>
            In der Gegenüberstellung der unterschiedlichen Infrastrukturarten
            zeigt sich, dass auch die Baukosten für Radschnellwege
            vergleichsweise gering sind:
            <img
              className="mt-4"
              src={BaukostenImage}
              alt="Für ca. 10 Mio. Euro können 0,5 km Autobahn, 2,5 km Hauptverkehrsstraße und 11,1 km Radschnellweg gebaut werden."
            />
          </P>
        </FAQItem>
        <FAQItem title="Wie viele Radfahrende fahren denn da später?">
          <P>
            Wie kann man sich so einen Radschnellweg eigentlich vorstellen? Wie
            viele Leute fahren denn da, kommt man da zu Fuß überhaupt noch
            drüber? Damit man sich davon ein besseres Bild machen kann, haben
            wir die Radschnellverbindung Ludwigsburg&lt;&gt;Waiblingen
            visualisiern lassen. Die Machbarkeitsstudie prognostiziert 2.100
            Radfahrende pro Tag, wir zeigen der Einfachheit halber das Potenzial
            von 2.000 Radfahrenden. Dargestellt ist die sogenannte
            &quot;Spitzenstunde&quot;. Diese ist definiert als ein Zehntel der
            täglichen Verkehrsmenge (DTV). Die Simulationen wurden erstellt von
            Schlothauer & Wauer im Auftrag des Landratsamts Ludwigsburg.
            <br />
            <br />
            <LinkExternal
              className="relative block text-rs8-pink/60 hover:text-rs8-pink/80"
              href="https://www.landkreis-ludwigsburg.de/fileadmin/user_upload/seiteninhalte/verkehr-sicherheit/Radverkehr/Visualisierung-RSV-Potenzial-2.000-Radelnde_Kurzversion.mp4"
            >
              <StaticImage
                src="../../images/radschnellweg-simulation.png"
                alt=""
              />
              <span className="sr-only">
                Video: Radschnellweg mit 2.000 Radfahrenden pro Tag
              </span>
              <div className="align-center absolute top-0 left-0 bottom-0 right-0 flex justify-center">
                <PlayIcon className="w-[150px]" />
              </div>
            </LinkExternal>
            <br />
            (Simulation eines Radschnellwegs mit einem Potenzial von 2.000
            Radfahrenden/Tag. © Visualisierung durch Schlothauer & Wauer im
            Auftrag des Landratsamts Ludwigsburg)
          </P>
        </FAQItem>
      </FAQ>
    </Section>
  )
}
