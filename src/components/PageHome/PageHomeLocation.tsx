import React from 'react'
import { Section } from '../Layout'
import { Link, LinkExternal, LinkMail } from '../Link'
import { RouteMap } from '../Maps/RouteMap/RouteMap'
import { H2, P } from '../Text'

export const PageHomeLocation: React.FC = () => {
  return (
    <Section className="pb-10">
      <H2>Wo soll der Radschnellweg entlangführen?</H2>

      <P>
        So sieht die aktuell angedachte Linienführung der Vorplanung aus: Auf
        einer Strecke von 15 Kilometern soll der Radschnellweg die beiden
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
        wurden. Ziel des Radweges ist es, wichtige (Pendler-)Ziele zu verbinden.
        In die Entscheidungen eingeflossen sind zudem verkehrliche Kriterien
        (Potenziale, Zeitverluste und Einbindung im Gesamtnetz), Belange des
        Umweltschutzes sowie die Kosten.
      </P>

      <RouteMap />

      <P>
        Die auf dieser Website gezeigte Vorplanung wurde bereits in den
        Gemeinderäten der beteiligten Städte präsentiert – die Streckenführung
        dort aber noch nicht abschließend festgelegt. Parallel wurden auch schon
        erste Interessengruppen eingebunden, so z. B. ansässige
        landwirtschaftlichen Betriebe, die teilweise Flächen für den
        Radschnellweg bereitstellen und später die Wege mit Radfahrenden teilen
        werden, sowie die „Alltagsexperten“ lokaler Radverkehrsverbände, die gut
        abschätzen können, wo Wege lang führen und wie sie beschaffen sein
        müssen, damit sie von Radfahrenden gut angenommen werden.
      </P>

      <P>
        <Link to="/route">Details zur geplanten Streckenführung.</Link>
      </P>

      <H2>Herzliche Einladung zur Beteiligung!</H2>

      <P>
        Im nächsten Schritt sind nun Sie, die Bürgerinnen und Bürger gefragt:
        Welche Anmerkungen haben Sie zur vorgeschlagenen Route, wo sehen Sie
        Potenziale, wo eventuell noch Verbesserungsbedarf?
      </P>
      <P>
        Bis zum 20.08. haben Sie noch die Möglichkeit, sich digital zu
        beteiligen.
      </P>
      <P>
        <Link
          button
          className="z-20 rounded-lg bg-rs8-pink text-sm font-normal text-white"
          to="/beteiligung"
        >
          Zur Beteiligung
        </Link>{' '}
      </P>
      <P>Wir freuen uns auf Ihr Mitwirken!</P>
    </Section>
  )
}
