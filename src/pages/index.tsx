import { PageProps } from 'gatsby'
import React from 'react'
import { Logo, Layout } from '~/components/Layout'
import { HelmetSeo } from '~/components/HelmetSeo'
import { QuotesSlider } from '~/components/QuotesSlider'
import MapImage from '~/images/rsv8-map.png'
import { ZoomableImage } from '~/components/ZoomableImage'
import { Facts } from '~/components/Facts'
import { FAQ, FAQItem } from '~/components/FAQ'
import { MileStones } from '~/components/MileStones'
import BaukostenImage from '~/images/baukosten-radverkehrsanlagen.jpg'
import RadkulturLogo from '~/images/bw-radschnellweg-logo.jpg'
import BMDVLogo from '~/images/bmdv-foerderung-logo.png'
import VMBWLogo from '~/images/vm-bw-foerderung-logo.png'

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location} navigation={false}>
      <HelmetSeo title="Radschnellweg 8 | Der neue Radschnellweg von Waiblingen nach Ludwigsburg" />

      <div className="flex w-full items-center">
        <Logo />
        <h1>Radschnellverbindung zwischen Waiblingen und Ludwigsburg</h1>
      </div>

      <p>
        Direkt – schnell – sicher: Lange zusammenhängende Strecken zwischen
        wichtigen Pendlerzielen, möglichst wenig Kreuzungen, die zum Bremsen
        oder gar Absteigen zwingen, mit gutem Belag und breit genug, dass man
        sicher überholen kann – so sollen sie aussehen, diese attraktiven
        Radrouten, die insbesondere Pendlerinnen und Pendler zum
        klimafreundlichen und gesunden Umstieg aufs Rad animieren sollen.
      </p>

      <p>
        Der Radschnellweg RS 8 verbindet die Städte Ludwigsburg, Remseck und
        Waiblingen. Auf diesen Seiten erhalten Sie Informationen zu
        Anforderungen, Planungsstand und Beteiligungsmöglichkeiten dieses
        Gemeinschaftsprojekts des Rems-Murr-Kreises mit dem Landkreis
        Ludwigsburg, der Stadt Ludwigsburg, der Stadt Waiblingen und der Stadt
        Remseck am Neckar.
      </p>

      <QuotesSlider
        items={[
          {
            quote: `Radschnellverbindungen ebnen den Weg für nachhaltige
    Mobilität und können gerade beim RS8 die Hauptverkehrsachsen zwischen
    unseren beiden Landkreisen entlasten`,
            person: 'Dr. Richard Sigel',
            position: 'Landrat Rems-Murr-Kreis',
          },
          {
            quote: `Wir freuen uns, dass wir gemeinsam an der Realisierung einer der
  ersten Radschnellwege im Land beteiligt sind.`,
            person: 'Dietmar Allgaier',
            position: 'Landrat Kreis Ludwigsburg',
          },
          {
            quote: `Die Verbindung der Wirtschaftsräume Ludwigsburg/Waiblingen ist
    wichtig und ein zentrales Anliegen nicht nur der Unternehmen, sondern auch
    der Menschen, wie das Projekt des Radschnellwegs zeigt.`,
            person: 'Andreas Hesky',
            position: 'Oberbürgermeister a.D. Waiblingen',
          },
          {
            quote: `Es freut mich sehr, dass der Rems-Murr-Kreis, der Kreis Ludwigsburg
    und alle beteiligten Kommunen eine leistungsstarke und schnelle
    Radverbindung für Pendlerinnen und Pendler zwischen Waiblingen und
    Ludwigsburg realisieren möchten.`,
            person: 'Winfried Hermann',
            position: 'Minister für Verkehr des Landes Baden-Württemberg',
          },
          {
            quote: `Der Ausbau des Radschnellwegs ist ein hervorragendes Beispiel für
    nachhaltige Mobilität über Stadt- und Kreisgrenzen hinweg.`,
            person: 'Dr. Matthias Knecht',
            position: 'Oberbürgermeister Ludwigsburg',
          },
          {
            quote: `Wir freuen uns sehr, dass mit dem Radschnellweg eine Ergänzung zu
    dem eher touristisch orientierten Rems-Radweg, der den Schleifen der Rems
    folgt, nun eine direkte Radverbindung erstellt wird, die insbesondere von
    den Pendlern und Rennradfahren genutzt werden kann.`,
            person: 'Dirk Schönberger',
            position: 'Oberbürgermeister Remseck am Neckar',
          },
        ]}
      />

      <h2>Wo soll der Radschnellweg entlang führen?</h2>

      <ZoomableImage src={MapImage} alt="Radschnellweg 8 Übersichtskarte" />

      <p>
        So sieht die aktuell angedachte Linienführung der Vorplanung aus: Auf
        einer Strecke von 15 km soll die Radschnellverbindung die beiden
        Mittelzentren Ludwigsburg und Waiblingen verbinden. Vom Ludwigsburger
        Zentrum aus führt die Strecke über Oßweil entlang der Landesstraße 1140
        nach Remseck am Neckar, führt dort durch Neckargröningen und Neckarrems
        und dann über Hegnach nach Waiblingen. (Diese Streckenführung ist noch
        nicht final beschlossen.)
      </p>

      <p>
        Grundlage für diese Linienführung sind umfangreiche Voruntersuchungen im
        Rahmen einer Machbarkeitsstudie, die anschließend von
        Verkehrsplanerinnen und -planern der beteiligten Kreisen und Städten vor
        Ort in der sogenannten Vorplanung konkretisiert wurden. In die
        Entscheidungen eingeflossen sind verkehrliche Kriterien (Potenziale,
        Zeitverluste und Einbindung im Gesamtnetz), Belange des Umweltschutzes
        und die Kosten.
      </p>

      <p>
        Parallel wurden auch schon erste Interessengruppen eingebunden, so z.B.
        die ansässigen landwirtschaftlichen Betriebe, die teilweise Flächen für
        den Radschnellweg bereitstellen und später die Wege mit Radfahrenden
        teilen werden, sowie die “Alltagsexperten” des ADFC Kreisverband
        Ludwigsburg, die gut abschätzen können, wo WEge lang führen und wie sie
        beschaffen sein müssen, damit sie von Radfahrenden gut angenommen
        werden.
      </p>

      <h2>Herzliche Einladung zur Beteiligung!</h2>

      <p>
        Und im nächsten Schritt sind nun Sie, die Bürgerinnen und Bürger
        gefragt: Welche Anmerkungen haben Sie zur vorgeschlagenen Route, wo
        sehen Sie Potenziale, wo eventuell noch Nacharbeitungsbedarf?
      </p>

      <p>
        Sobald die Bürgerbeteiligung startet, finden Sie hier auf dieser Seite
        eine digitale Karte. Dort können Sie die aktuelle Streckenführung im
        Detail ansehen und finden zu jedem Abschnitt erklärende Hinweise. Der
        Start der Bürgerbeteiligung ist Mitte November geplant. Tragen Sie sich
        gerne in unsere Kontaktliste ein, dann informieren wir Sie per E-Mail,
        sobald es losgeht. Wir freuen uns auf Ihr Mitwirken!
      </p>

      <h2>Wie geht es danach weiter?</h2>

      <p>
        Die Anregungen aus der Bürgerbeteiligung fließen in die dann
        anschließende Entwurfsplanung ein. Hier finden zudem weitere
        Untersuchungen statt, wie etwa zum Baugrund oder zur Statik. Und auch
        die Ökologischen Untersuchungen folgen jetzt. Zwar ist die Förderung des
        Radverkehrs letztlich auch eine Maßnahme, die Umwelt und Klima schützen
        soll - dennoch greift auch der Bau eines Radweges zunächst in die Natur
        ein. Dafür werden Ausgleichsmaßnahmen erforderlich.
        <br />
        Wenn die fertige Entwurfsplanung anschließend die politischen Gremien
        passiert hat, kann der Bau endlich starten.
      </p>

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

      <h2>Die Meilensteine</h2>

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

      <h2>Was ist eine Radschnellverbindung?</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/t9GxxxYse_8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <h2>Häufig gestellte Fragen</h2>

      <FAQ>
        <FAQItem title="Was ist ein Radschnellweg?">
          <p>
            Radschnellwege sind extrabreite, direkte und möglichst
            kreuzungsfreie Wege, auf denen Radfahrerinnen und Radfahrer jeden
            Alters im eigenen Tempo direkt und sicher zum Ziel kommen. Eine
            klare Kennzeichnung und gute Beleuchtung der Fahrspuren erhöhen die
            Sicherheit und durch die Breite der Wege ist es möglich, problemlos
            nebeneinander zu fahren oder zu überholen. Obwohl man nicht
            unbedingt schneller fährt als auf herkömmlichen Radwegen, verkürzt
            sich die Fahrtzeit aufgrund der wenigen Stopps erheblich. Dadurch
            wird das Radfahren auch auf längeren Strecken attraktiv.
          </p>
        </FAQItem>
        <FAQItem title="Was zeichnet einen Radschnellweg aus?">
          <ul>
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
          <p>
            In den
            <a href="https://www.aktivmobil-bw.de/radverkehr/radschnellverbindungen/qualitaetsstandards-und-musterloesungen/">
              Qualitätsstandards für Radschnellverbindungen in Baden-Württemberg
            </a>
            werden für unterschiedliche Führungsformen verbindliche Standards
            festgelegt.
          </p>
        </FAQItem>
        <FAQItem title="Was kosten Radschnellwege?">
          <p>
            Die Kosten für einen Radschnellweg sind abhängig von seiner Länge,
            den verschiedenen Umbaumaßnahmen im Straßenkörper sowie der Menge an
            neuen Bauwerken bzw. deren Ausbau.
          </p>
          <p>
            Die prognostizierten Baukosten für die Radschnellverbindung
            Ludwigsburg&lt;&gt;Waiblingen (RS8) liegen bei: 31 Mio. Euro. Bei
            einer Strecke von ca. 15 Kilometern sind dies etwa 2,1 Mio.
            Euro/Kilometer.
          </p>
          <p>
            Zusätzlich müssen nach Fertigstellung, wie bei anderen Straßen auch,
            Kosten für den Unterhalt und anfallende Sanierungen eingeplant
            werden. Diese liegen aber deutlich unter den Erhaltungskosten von
            Straßen und Autobahnen, weil diese viel höheren Belastungen
            ausgesetzt sind.
          </p>
          <p>
            In der Gegenüberstellung der unterschiedlichen Infrastrukturarten
            zeigt sich, dass auch die Baukosten für Radschnellwege
            vergleichsweise gering sind:
            <img
              src={BaukostenImage}
              alt="Für ca. 10 Mio. Euro können 0,5 km Autobahn, 2,5 km Hauptverkehrsstraße und 11,1 km Radschnellweg gebaut werden."
            />
          </p>
        </FAQItem>
        <FAQItem title="Wie viele Radfahrende fahren denn da später?">
          <p>
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
            <a href="https://www.landkreis-ludwigsburg.de/fileadmin/user_upload/seiteninhalte/verkehr-sicherheit/Radverkehr/Visualisierung-RSV-Potenzial-2.000-Radelnde_Kurzversion.mp4">
              Video: Radschnellweg mit 2.000 Radfahrenden pro Tag
            </a>
            <br />
            (Simulation eines Radschnellwegs mit einem Potenzial von 2.000
            Radfahrenden/Tag. © Visualisierung durch Schlothauer & Wauer im
            Auftrag des Landratsamts Ludwigsburg)
          </p>
        </FAQItem>
      </FAQ>

      <h2>Links</h2>

      <ul>
        <li>
          <a href="https://www.rems-murr-kreis.de/fileadmin/Dateien/Bilder/3.39002_Stabsstelle_Radwege/191029_Abschlussbericht_MBS_RSV_Ludwigsburg_Waiblingen.pdf">
            Machbarkeitsstudie Hauptdokument
          </a>
        </li>
        <li>
          <a href="https://www.rems-murr-kreis.de/fileadmin/Dateien/Bilder/3.39002_Stabsstelle_Radwege/191029_Anlage_1_und_2_MBS_RSV_Ludwigsburg_Waiblingen.pdf">
            Machbarkeitsstudie Anlagen 1+2
          </a>
        </li>
        <li>
          <a href="https://www.rems-murr-kreis.de/fileadmin/Dateien/Bilder/3.39002_Stabsstelle_Radwege/191029_Anlage_3_und_4_MBS_RSV_Ludwigsburg_Waiblingen.pdf">
            Machbarkeitsstudie Anlagen 3+4
          </a>
        </li>
      </ul>

      <h2>Pressemitteilungen</h2>

      <ul>
        <li>
          <span>7.5.2019</span>
          <a href="https://www.rems-murr-kreis.de/bauen-umwelt-und-verkehr/aktuelles/?tx_hwnews_hwnews%5BnewsartikelId%5D=1043&tx_hwnews_hwnews%5BcurrentPage%5D=2&tx_hwnews_hwnews%5Baction%5D=show&tx_hwnews_hwnews%5Bcontroller%5D=Newsartikel&cHash=2eb7bb05a868847505a7b59090e3f7dc">
            Grünes Licht für Radschnellverbindung im Rems-Murr-Kreis:
            Rems-Murr-Kreis
          </a>
        </li>
        <li>
          <span>25.05.2020</span>
          <a href="https://www.landkreis-ludwigsburg.de/de/landratsamt-landkreis/aktuelles/pressemitteilungen/detail/nachhaltige-mobilitaet-zwischen-den-landkreisen/">
            Nachhaltige Mobilität zwischen den Landkreisen - Landratsamt
            Ludwigsburg
          </a>
        </li>
      </ul>

      <h2>Informiert bleiben</h2>
      <p>
        Tragen Sie sich gerne in unseren kostenlosen Newsletter ein und wir
        informieren Sie rechtzeitig, sobald es Neuigkeiten gibt und die
        Online-Beteiligung zur Radschnellverbindung startet. Sie können den
        Newsletter jederzeit ganz einfach kündigen.
      </p>

      <button type="button">Newsletter abonnieren</button>

      <h2>Gefördert durch:</h2>

      <ul>
        <li>
          <img
            src={RadkulturLogo}
            alt="RadKULTUR Baden-Württemberg; RadSCHNELLWEG"
          />
        </li>
        <li>
          <img
            src={BMDVLogo}
            alt="Bundesministerium für Digitales und Verkehr; aufgrund eines Beschlusses des Deutschen Bundestages"
          />
        </li>
        <li>
          <img src={VMBWLogo} alt="Ministerium für Verkehr Baden-Württemberg" />
        </li>
      </ul>
    </Layout>
  )
}

export default IndexPage
