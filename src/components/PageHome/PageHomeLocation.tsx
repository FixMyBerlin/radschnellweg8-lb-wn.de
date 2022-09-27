import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Section } from '../Layout'
import { H2, P } from '../Text'
import { ZoomableImage } from '../ZoomableImage'

export const PageHomeLocation: React.FC = () => {
  return (
    <Section className="pb-10">
      <H2>Wo soll der Radschnellweg entlang führen?</H2>

      <ZoomableImage
        className="mb-4 h-auto w-full overflow-hidden rounded-lg md:float-left md:mr-10 lg:h-[350px] lg:w-[350px]"
        image={
          <StaticImage
            src="../../images/rsv8-map.png"
            alt="Radschnellweg 8 Übersichtskarte"
          />
        }
      />

      <P>
        So sieht die aktuell angedachte Linienführung der Vorplanung aus: Auf
        einer Strecke von 15 km soll die Radschnellverbindung die beiden
        Mittelzentren Ludwigsburg und Waiblingen verbinden. Vom Ludwigsburger
        Zentrum aus führt die Strecke über Oßweil entlang der Landesstraße 1140
        nach Remseck am Neckar, führt dort durch Neckargröningen und Neckarrems
        und dann über Hegnach nach Waiblingen. (Diese Streckenführung ist noch
        nicht final beschlossen.)
      </P>

      <P>
        Grundlage für diese Linienführung sind umfangreiche Voruntersuchungen im
        Rahmen einer Machbarkeitsstudie, die anschließend von
        Verkehrsplanerinnen und -planern der beteiligten Kreisen und Städten vor
        Ort in der sogenannten Vorplanung konkretisiert wurden. In die
        Entscheidungen eingeflossen sind verkehrliche Kriterien (Potenziale,
        Zeitverluste und Einbindung im Gesamtnetz), Belange des Umweltschutzes
        und die Kosten.
      </P>

      <P>
        Parallel wurden auch schon erste Interessengruppen eingebunden, so z.B.
        die ansässigen landwirtschaftlichen Betriebe, die teilweise Flächen für
        den Radschnellweg bereitstellen und später die Wege mit Radfahrenden
        teilen werden, sowie die “Alltagsexperten” des ADFC Kreisverband
        Ludwigsburg, die gut abschätzen können, wo WEge lang führen und wie sie
        beschaffen sein müssen, damit sie von Radfahrenden gut angenommen
        werden.
      </P>

      <H2>Herzliche Einladung zur Beteiligung!</H2>

      <P>
        Und im nächsten Schritt sind nun Sie, die Bürgerinnen und Bürger
        gefragt: Welche Anmerkungen haben Sie zur vorgeschlagenen Route, wo
        sehen Sie Potenziale, wo eventuell noch Nacharbeitungsbedarf?
      </P>

      <P>
        Sobald die Bürgerbeteiligung startet, finden Sie hier auf dieser Seite
        eine digitale Karte. Dort können Sie die aktuelle Streckenführung im
        Detail ansehen und finden zu jedem Abschnitt erklärende Hinweise. Der
        Start der Bürgerbeteiligung ist Mitte November geplant. Tragen Sie sich
        gerne in unsere Kontaktliste ein, dann informieren wir Sie per E-Mail,
        sobald es losgeht. Wir freuen uns auf Ihr Mitwirken!
      </P>
    </Section>
  )
}
