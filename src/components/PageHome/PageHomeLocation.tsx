import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Section } from '../Layout'
import { H2, LinkExternal, LinkMail, P } from '../Text'
import { ZoomableImage } from '../ZoomableImage'

export const PageHomeLocation: React.FC = () => {
  return (
    <Section className="pb-10">
      <H2>Wo soll der Radschnellweg entlangführen?</H2>

      <P>
        So sieht die aktuell angedachte Linienführung der Vorplanung aus: Auf
        einer Strecke von 15 km soll die Radschnellverbindung die beiden
        Mittelzentren Ludwigsburg und Waiblingen verbinden. Vom Ludwigsburger
        Zentrum aus führt die Strecke über Oßweil entlang der Landesstraße 1140
        nach Remseck am Neckar, führt dort durch Neckargröningen und Neckarrems
        und dann über Hegnach nach Waiblingen.
      </P>

      <P>
        Grundlage für diese Linienführung sind umfangreiche Voruntersuchungen im
        Rahmen{' '}
        <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/verkehr-sicherheit-ordnung/radverkehr/radschnellwege/machbarkeitsstudie-radschnellverbindung-ludwigsburg-waiblingen/">
          einer Machbarkeitsstudie
        </LinkExternal>
        , die anschließend von Verkehrsplanerinnen und -planern der beteiligten
        Kreise und Städten vor Ort in der sogenannten Vorplanung konkretisiert
        wurden. In die Entscheidungen eingeflossen sind verkehrliche Kriterien
        (Potenziale, Zeitverluste und Einbindung im Gesamtnetz), Belange des
        Umweltschutzes und die Kosten.
      </P>

      <P>
        Die auf dieser Website gezeigte Vorplanung wurde bereits in den
        Gemeinderäten der beteiligten Städte präsentiert – die Streckenführung
        dort aber noch nicht beschlossen. Parallel wurden auch schon erste
        Interessengruppen eingebunden, so z. B. ansässige landwirtschaftlichen
        Betriebe, die teilweise Flächen für den Radschnellweg bereitstellen und
        später die Wege mit Radfahrenden teilen werden, sowie die
        “Alltagsexperten” des ADFC, die gut abschätzen können, wo Wege lang
        führen und wie sie beschaffen sein müssen, damit sie von Radfahrenden
        gut angenommen werden.
      </P>

      <P>
        <LinkExternal href="/route">
          Hier finden Sie Details zur geplanten Streckenführung
        </LinkExternal>
      </P>

      <H2>Herzliche Einladung zur Beteiligung!</H2>

      <P>
        Im nächsten Schritt sind nun Sie, die Bürgerinnen und Bürger gefragt:
        Welche Anmerkungen haben Sie zur vorgeschlagenen Route, wo sehen Sie
        Potenziale, wo eventuell noch Verbesserungsbedarf?
      </P>

      <P>
        Sobald die Bürgerbeteiligung startet, finden Sie hier auf dieser Seite
        eine digitale Karte, auf der Sie Hinweise eintragen können. Der Start
        der Bürgerbeteiligung ist in Kürze geplant. Melden Sie sich unter{' '}
        <LinkMail>info@radschnellweg8-lb-wn.de</LinkMail>, dann informieren wir
        Sie per Mail, sobald es losgeht. Wir freuen uns auf Ihr Mitwirken!
      </P>
    </Section>
  )
}
