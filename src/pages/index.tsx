import { PlayIcon } from '@heroicons/react/outline'
import { PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Facts } from '~/components/Facts'
import { FAQ, FAQItem } from '~/components/FAQ'
import { HelmetSeo } from '~/components/HelmetSeo'
import { Layout, Section } from '~/components/Layout'
import { MileStones } from '~/components/MileStones'
import {
  PageHomeIntro,
  PageHomeLocation,
  PageHomeQuotes,
} from '~/components/PageHome'
import { Button, H2, LinkExternal, P } from '~/components/Text'
import BaukostenImage from '~/images/baukosten-radverkehrsanlagen.jpg'

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo title="Radschnellweg 8 | Der neue Radschnellweg von Waiblingen nach Ludwigsburg" />

      <PageHomeIntro />
      <PageHomeQuotes />
      <PageHomeLocation />

      <Section className="bg-rs8-blue py-12 text-white">
        <Facts
          items={[
            {
              value: '15 Kilometer',
              description: 'Gesamtlänge des RS8',
              longDescription:
                'Die Radschnellverbindung führt vom Ludwigsburger Zentrum über Oßweil entlang der L 1140 nach Remseck am Neckar, führt dort durch Neckargröningen und Neckarrems und dann über Hegnach nach Waiblingen.',
            },
            {
              value: '4 Baulastträger',
              description: 'Ein Gemeinschaftsprojekt',
              longDescription:
                'Der RS 8 ist ein Gemeinschaftsprojekt der Kreis Rems-Murr und Ludwigsburg, sowie der Städte Ludwigsburg und Waiblingen. Die Baulast für die Strecke in Remseck trägt der Kreis Ludwigsburg.',
            },
            {
              value: '2.100 Radfahrende',
              description: 'pro Tag',
              longDescription:
                'So viele Radfahrende werden potentiell erwartet, wenn die Verbindung fertiggestellt ist. In die Berechnung fließen unterschiedliche Faktoren ein, wie zum Beispiel Unternehmen oder Bildungseinrichtungen entlang der Strecke.',
            },
            {
              value: '31 Millionen €',
              description: 'Gesamtkosten',
              longDescription:
                'Ca. 2 Mio. € Baukosten pro Kilometer klingen zunächst viel, ist aber tatsächlich nur ein Bruchteil dessen, was z.B. Kreis- oder Landesstraßen kosten.',
            },
            {
              value: '87,5 %',
              description: 'Förderung von Bund und Land',
              longDescription:
                'Radschnellverbindungen werden als besonders positives Infrastrukturelement finanziell gefördert.',
            },
            {
              value: '1,9',
              description: 'Nutzen-Kosten-Faktor',
              longDescription:
                'Die Wirkung von Baumaßnahmen berechnet man mit dem sogenannten Nutzen-Kosten-Faktor. Liegt dieser über 1 (so wie hier beim RS 8), so ist die Wirkung positiv: Der gesamtwirtschaftliche Nutzen der geplanten Verbindung ist höher als die erforderlichen Investitionskosten.',
            },
          ]}
        />
      </Section>

      <Section className="py-12">
        <H2>Die Meilensteine</H2>

        <MileStones
          items={[
            {
              name: 'Idee',
              description:
                'Bildung einer Projektgruppe aus Verantwortlichen der Kreise und Städte, Organisation von Workshops mit niederländischen Radverkehrsplanern (ab 2017)',
            },
            {
              name: 'Machbarkeitsanalyse',
              description:
                'Zwei Planungsbüros prüfen die Trassenvarianten auf Herz und Nieren, ermitteln Potenziale und wägen Nutzen und Kosten gegeneinander ab (ab 2018)',
            },
            {
              name: 'Förderung',
              description:
                'Für die geplante Strecke wird eine Förderung bei Bund und Land beantragt. Erfolgreich! (2020)',
            },
            {
              name: 'Benennung',
              description:
                'Mit der Förderung bekommt das Projekt einen Namen „Radschnellweg RS 85“ (2020)',
            },
            {
              name: 'Vorplanung',
              description:
                'Nach Rückversicherung bei den politischen Gremien beginnt jeder Projektträger im Rahmen seiner Zuständigkeit mit der Vorplanung. Hier werden die Vorarbeiten aus der Machbarkeitsstudie konkretisiert und eine Trasse festgelegt. (2020–2022)',
            },
            {
              name: 'Bürgerbeteiligung',
              description: '(geplant Q4 2022)',
              comingUp: true,
            },
            {
              name: 'Entwurfsplanung',
              description: '(geplant 2022–23)',
              comingUp: true,
            },
            {
              name: 'Politische Beschlüsse',
              description: '(geplant 2023)',
              comingUp: true,
            },
            { name: 'Bau', description: '(geplant ab 2023)', comingUp: true },
          ]}
        />

        <H2>Was ist eine Radschnellverbindung?</H2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/t9GxxxYse_8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <H2 className="text-center">Häufig gestellte Fragen</H2>

        <FAQ>
          <FAQItem title="Was ist ein Radschnellweg?">
            <P>
              Radschnellwege sind extrabreite, direkte und möglichst
              kreuzungsfreie Wege, auf denen Radfahrerinnen und Radfahrer jeden
              Alters im eigenen Tempo direkt und sicher zum Ziel kommen. Eine
              klare Kennzeichnung und gute Beleuchtung der Fahrspuren erhöhen
              die Sicherheit und durch die Breite der Wege ist es möglich,
              problemlos nebeneinander zu fahren oder zu überholen. Obwohl man
              nicht unbedingt schneller fährt als auf herkömmlichen Radwegen,
              verkürzt sich die Fahrtzeit aufgrund der wenigen Stopps erheblich.
              Dadurch wird das Radfahren auch auf längeren Strecken attraktiv.
            </P>
          </FAQItem>
          <FAQItem title="Was zeichnet einen Radschnellweg aus?">
            <ul className="list-disc pl-5">
              <li>Gesamtstrecke mindestens fünf Kilometer</li>
              <li>Potenzial von mindestens 2.000 Fahrradfahrten täglich</li>
              <li>
                Breite mindestens zwischen drei Metern (Richtungsverkehr) und
                vier Metern (Zweirichtungsverkehr)
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
                Qualitätsstandards für Radschnellverbindungen in
                Baden-Württemberg
              </LinkExternal>{' '}
              werden für unterschiedliche Führungsformen verbindliche Standards
              festgelegt.
            </P>
          </FAQItem>
          <FAQItem title="Was kosten Radschnellwege?">
            <P>
              Die Kosten für einen Radschnellweg sind abhängig von seiner Länge,
              den verschiedenen Umbaumaßnahmen im Straßenkörper sowie der Menge
              an neuen Bauwerken bzw. deren Ausbau.
            </P>
            <P>
              Die prognostizierten Baukosten für die Radschnellverbindung
              Ludwigsburg&lt;&gt;Waiblingen (RS8) liegen bei: 31 Mio. Euro. Bei
              einer Strecke von ca. 15 Kilometern sind dies etwa 2,1 Mio.
              Euro/Kilometer.
            </P>
            <P>
              Zusätzlich müssen nach Fertigstellung, wie bei anderen Straßen
              auch, Kosten für den Unterhalt und anfallende Sanierungen
              eingeplant werden. Diese liegen aber deutlich unter den
              Erhaltungskosten von Straßen und Autobahnen, weil diese viel
              höheren Belastungen ausgesetzt sind.
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
              Wie kann man sich so einen Radschnellweg eigentlich vorstellen?
              Wie viele Leute fahren denn da, kommt man da zu Fuß überhaupt noch
              drüber? Damit man sich davon ein besseres Bild machen kann, haben
              wir die Radschnellverbindung Ludwigsburg&lt;&gt;Waiblingen
              visualisiern lassen. Die Machbarkeitsstudie prognostiziert 2.100
              Radfahrende pro Tag, wir zeigen der Einfachheit halber das
              Potenzial von 2.000 Radfahrenden. Dargestellt ist die sogenannte
              &quot;Spitzenstunde&quot;. Diese ist definiert als ein Zehntel der
              täglichen Verkehrsmenge (DTV). Die Simulationen wurden erstellt
              von Schlothauer & Wauer im Auftrag des Landratsamts Ludwigsburg.
              <br />
              <br />
              <LinkExternal
                className="relative block text-rs8-pink/60 hover:text-rs8-pink/80"
                href="https://www.landkreis-ludwigsburg.de/fileadmin/user_upload/seiteninhalte/verkehr-sicherheit/Radverkehr/Visualisierung-RSV-Potenzial-2.000-Radelnde_Kurzversion.mp4"
              >
                <StaticImage
                  src="../images/radschnellweg-simulation.png"
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

        <H2>Links</H2>

        <ul>
          <li>
            <LinkExternal href="https://www.rems-murr-kreis.de/fileadmin/Dateien/Bilder/3.39002_Stabsstelle_Radwege/191029_Abschlussbericht_MBS_RSV_Ludwigsburg_Waiblingen.pdf">
              Machbarkeitsstudie Hauptdokument
            </LinkExternal>
          </li>
          <li>
            <LinkExternal href="https://www.rems-murr-kreis.de/fileadmin/Dateien/Bilder/3.39002_Stabsstelle_Radwege/191029_Anlage_1_und_2_MBS_RSV_Ludwigsburg_Waiblingen.pdf">
              Machbarkeitsstudie Anlagen 1+2
            </LinkExternal>
          </li>
          <li>
            <LinkExternal href="https://www.rems-murr-kreis.de/fileadmin/Dateien/Bilder/3.39002_Stabsstelle_Radwege/191029_Anlage_3_und_4_MBS_RSV_Ludwigsburg_Waiblingen.pdf">
              Machbarkeitsstudie Anlagen 3+4
            </LinkExternal>
          </li>
        </ul>

        <H2>Pressemitteilungen</H2>

        <ul>
          <li>
            <strong>7.5.2019 | </strong>
            <LinkExternal href="https://www.rems-murr-kreis.de/bauen-umwelt-und-verkehr/aktuelles/?tx_hwnews_hwnews%5BnewsartikelId%5D=1043&tx_hwnews_hwnews%5BcurrentPage%5D=2&tx_hwnews_hwnews%5Baction%5D=show&tx_hwnews_hwnews%5Bcontroller%5D=Newsartikel&cHash=2eb7bb05a868847505a7b59090e3f7dc">
              Grünes Licht für Radschnellverbindung im Rems-Murr-Kreis:
              Rems-Murr-Kreis
            </LinkExternal>
          </li>
          <li>
            <strong>25.05.2020 | </strong>
            <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/landratsamt-landkreis/aktuelles/pressemitteilungen/detail/nachhaltige-mobilitaet-zwischen-den-landkreisen/">
              Nachhaltige Mobilität zwischen den Landkreisen - Landratsamt
              Ludwigsburg
            </LinkExternal>
          </li>
        </ul>

        <H2>Informiert bleiben</H2>
        <P>
          Tragen Sie sich gerne in unseren kostenlosen Newsletter ein und wir
          informieren Sie rechtzeitig, sobald es Neuigkeiten gibt und die
          Online-Beteiligung zur Radschnellverbindung startet. Sie können den
          Newsletter jederzeit ganz einfach kündigen.
        </P>

        <Button className="mt-4">Newsletter abonnieren</Button>

        <H2 className="mt-[150px] text-center !text-base !font-normal text-[#959595]">
          Gefördert durch:
        </H2>

        <ul className="gap-24 sm:columns-3">
          {[
            <StaticImage
              src="../images/bw-radschnellweg-logo.jpg"
              alt="RadKULTUR Baden-Württemberg; RadSCHNELLWEG"
            />,
            <StaticImage
              src="../images/bmdv-foerderung-logo.png"
              alt="Bundesministerium für Digitales und Verkehr; aufgrund eines Beschlusses des Deutschen Bundestages"
            />,
            <StaticImage
              src="../images/vm-bw-foerderung-logo.png"
              alt="Ministerium für Verkehr Baden-Württemberg"
            />,
          ].map((img) => (
            <li key={img.props.src} className="m-auto mb-10 w-3/5 sm:w-full">
              {img}
            </li>
          ))}
        </ul>
      </Section>
    </Layout>
  )
}

export default IndexPage
