import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { FAQ, FAQItem } from '../FAQ'
import { Section } from '../Layout'
import { H2, Link, LinkExternal, P } from '../Text'
import { YouTubePreview } from '../YouTubePreview'

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
          <YouTubePreview
            link="https://www.youtube.com/watch?v=t9GxxxYse_8"
            image={
              <StaticImage
                src="./assets/youtube-preview-radschnellwege.jpeg"
                alt="Vorschau YouTube Video 'Radschnellwege in Baden-Württemberg: direkt – schnell – sicher'"
              />
            }
          />
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
            <StaticImage
              className="mt-4"
              src="../../images/baukosten-radverkehrsanlagen.jpg"
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
            visualisiern lassen.{' '}
            <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/verkehr-sicherheit-ordnung/radverkehr/radschnellwege/machbarkeitsstudie-radschnellverbindung-ludwigsburg-waiblingen/">
              Die Machbarkeitsstudie
            </LinkExternal>{' '}
            prognostiziert 2.100 Radfahrende pro Tag, wir zeigen der Einfachheit
            halber das Potenzial von 2.000 Radfahrenden. Dargestellt ist die
            sogenannte &quot;Spitzenstunde&quot;. Diese ist definiert als ein
            Zehntel der täglichen Verkehrsmenge (DTV). Die Simulationen wurden
            erstellt von Schlothauer & Wauer im Auftrag des Landratsamts
            Ludwigsburg.
            <br />
            <YouTubePreview
              link="https://www.youtube.com/watch?v=pqtAmXkCeEU"
              image={
                <StaticImage
                  src="../../images/radschnellweg-simulation.png"
                  alt="Video: Radschnellweg mit 2.000 Radfahrenden pro Tag"
                  className="aspect-video"
                />
              }
            />
            Simulation eines Radschnellwegs mit einem Potenzial von 2.000
            Radfahrenden/Tag. © Visualisierung durch Schlothauer & Wauer im
            Auftrag des Landratsamts Ludwigsburg
          </P>
        </FAQItem>
      </FAQ>
      <div className="mt-10 text-center">
        <Link to="/faq" button>
          Mehr unter FAQs
        </Link>
      </div>
    </Section>
  )
}
