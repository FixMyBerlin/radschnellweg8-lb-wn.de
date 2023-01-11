import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { PageHomeMilestones } from '../PageHome'
import { LinkExternal } from '../Link'
import { YouTubePreview } from '../YouTubePreview'

export const categoizedFaqs = {
  Allgemein: {
    'Was ist ein Radschnellweg?': (
      <>
        <p>
          Radschnellwege sind extrabreite, direkte und möglichst kreuzungsfreie
          Wege, auf denen Radfahrerinnen und Radfahrer jeden Alters im eigenen
          Tempo direkt und sicher zum Ziel kommen. Eine klare Kennzeichnung und
          gute Beleuchtung der Fahrspuren erhöhen die Sicherheit und durch die
          Breite der Wege ist es möglich, problemlos nebeneinander zu fahren
          oder zu überholen. Obwohl man nicht unbedingt schneller fährt als auf
          herkömmlichen Radwegen, verkürzt sich die Fahrtzeit aufgrund der
          wenigen Stopps erheblich. Dadurch wird das Radfahren auch auf längeren
          Strecken attraktiv.
        </p>
        <YouTubePreview
          link="https://www.youtube.com/watch?v=t9GxxxYse_8"
          image={
            <StaticImage
              src="../../components/PageHome/assets/youtube-preview-radschnellwege.jpeg"
              alt="Vorschau YouTube Video 'Radschnellwege in Baden-Württemberg: direkt – schnell – sicher'"
            />
          }
        />
      </>
    ),
    'Was zeichnet einen Radschnellweg aus?': (
      <>
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
          In den{' '}
          <LinkExternal href="https://www.aktivmobil-bw.de/radverkehr/radschnellverbindungen/qualitaetsstandards-und-musterloesungen/">
            Qualitätsstandards für Radschnellverbindungen in Baden-Württemberg
          </LinkExternal>{' '}
          werden für unterschiedliche Führungsformen verbindliche Standards
          festgelegt.
        </p>
      </>
    ),
    'Welche anderen Radschnellwege werden geplant?': (
      <>
        <p>
          Hier eine &Uuml;bersicht &uuml;ber bereits bewilligte
          Radschnellwegprojekte in Baden-W&uuml;rttemberg. Die Nummern ergeben
          sich aus der Reihenfolge der F&ouml;rderbewilligung durch Bund &amp;
          Land.
        </p>
        <ul>
          <li>
            <strong>RS 1</strong>{' '}
            <LinkExternal href="https://www.lrabb.de/start/Service+_+Verwaltung/radverkehr.html">
              B&ouml;blingen/Sindelfingen&ndash;Stuttgart
            </LinkExternal>
          </li>
          <li>
            <strong>RS 2</strong>{' '}
            <LinkExternal href="https://www.radschnellweg-hd-ma.de/">
              Heidelberg&ndash;Mannheim
            </LinkExternal>
          </li>
          <li>
            <strong>RS 3</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rps/abt4/ref44/rs-3-radschnellverbindung-bad-wimpfen-neckarsulm-heilbronn-1-bauabschnitt/">
              Heilbronn&ndash;Bad Wimpfen
            </LinkExternal>
          </li>
          <li>
            <strong>RS 4</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rps/abt4/ref44/rs-4-radschnellverbindung-neckartal-esslingen-reichenbach/">
              Esslingen&ndash;Reichenbach
            </LinkExternal>
          </li>
          <li>
            <strong>RS 5</strong>{' '}
            <LinkExternal href="https://www.rems-murr-kreis.de/bauen-umwelt-und-verkehr/radwege/radschnellwege">
              Schorndorf&ndash;Fellbach
            </LinkExternal>{' '}
            und{' '}
            <LinkExternal href="https://www.fellbach.de/radschnellweg">
              auf fellbach.de
            </LinkExternal>
          </li>
          <li>
            <strong>RS 6</strong>{' '}
            <LinkExternal href="https://www.breisgau-y.de/">
              Freiburg&ndash;Denzlingen&ndash;Waldkirch/Emmendingen
            </LinkExternal>
          </li>
          <li>
            <strong>RS 7</strong>{' '}
            <LinkExternal href="https://www.radschnellweg-wiesental.de/">
              Schopfheim - L&ouml;rrach (- Basel)
            </LinkExternal>
          </li>
          <li>
            <strong>RS 8</strong>{' '}
            <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/verkehr-sicherheit-ordnung/radverkehr/radschnellwege/">
              Ludwigsburg&ndash;Waiblingen
            </LinkExternal>{' '}
            und{' '}
            <LinkExternal href="https://www.rems-murr-kreis.de/bauen-umwelt-und-verkehr/radwege/radschnellwege">
              auf rems-murr-kreis.de
            </LinkExternal>
          </li>
          <li>
            <strong>RS 9</strong>{' '}
            <LinkExternal href="https://www.rs9.info/">
              Friedrichshafen&ndash;Baindt
            </LinkExternal>
          </li>
          <li>
            <strong>RS 10</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rpk/abt4/ref44/radschnellwege/rs10-karlsruhe-ettlingen">
              Karlsruhe&ndash;Ettlingen
            </LinkExternal>
          </li>
          <li>
            <strong>RS 11</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rpt/abt4/rs11-tuebingen-rottenburg">
              Rottenburg&ndash;T&uuml;bingen
            </LinkExternal>
          </li>
          <li>
            <strong>RS 12</strong>{' '}
            <LinkExternal href="http://www.region-suedlicher-oberrhein.de/de/projekte/radschnellwege/">
              Offenburg&ndash;Gengenbach
            </LinkExternal>
          </li>
          <li>
            <strong>RS 13</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rpk/abt4/seiten/strassenplanungen/radschnellweg-karlsruhe-rastatt/">
              Karlsruhe&ndash;Rastatt
            </LinkExternal>
          </li>
          <li>
            <strong>RS 14</strong>{' '}
            <LinkExternal href="https://www.radschnellweg-filstal.de/">
              Ebersbach&ndash;G&ouml;ppingen&ndash;S&uuml;&szlig;en
              (Radschnellweg Filstal)
            </LinkExternal>
          </li>
          <li>
            <strong>RS 15</strong>{' '}
            <LinkExternal href="https://radschnellweg-ma-vhm-whm.de/">
              Mannheim Innenstadt&ndash;Viernheim&ndash;Weinheim&ndash;Darmstadt
            </LinkExternal>
          </li>
          <li>
            <strong>RS 16</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rpk/abt4/ref44/radschnellwege/rs16-heidelberg-schwetzingen">
              Heidelberg &ndash; Schwetzingen
            </LinkExternal>
          </li>
          <li>
            <strong>RS 17</strong>{' '}
            <LinkExternal href="https://www.lrabb.de/start/Service+_+Verwaltung/radverkehr.html">
              Ditzingen &ndash; Weil der Stadt
            </LinkExternal>{' '}
            und{' '}
            <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/verkehr-sicherheit-ordnung/radverkehr/radschnellwege/">
              auf landkreis-ludwigsburg.de
            </LinkExternal>
          </li>
          <li>
            <strong>RS 19</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rpt/abt4/rs19-tuebingen-reutlingen">
              T&uuml;bingen &ndash; Reutlingen
            </LinkExternal>
          </li>
          <li>
            <strong>RS 21</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rps/presse/artikel/radschnellverbindung-stuttgart-bietigheim-bissingen-foerderzusage-des-bundes/">
              Bietigheim-Bissingen &ndash; Stuttgart
            </LinkExternal>
          </li>
        </ul>
        <h3>&Uuml;bersicht Radschnellwege deutschlandweit</h3>
        <p>
          Eine &Uuml;bersicht &uuml;ber alle Radschnellwegprojekte in
          Deutschland gibt es unter{' '}
          <LinkExternal href="https://radschnellverbindungen.info/">
            radschnellverbindungen.info
          </LinkExternal>
          . Die Macher freuen sich &uuml;brigens &uuml;ber viele
          R&uuml;ckmeldungen, um die Karte noch weiter zu aktualisieren.
        </p>
      </>
    ),
    'Lohnt sich der Bau eines Radschnellwegs überhaupt?': (
      <>
        <p>
          Ein klares <strong>Ja!</strong>
        </p>

        <p>
          Ein Projekt lohnt sich immer dann, wenn der{' '}
          <strong>Nutzen-Kosten-Faktor</strong> (Vergleich der
          Investitionskosten und des zu erwartenden volkswirtschaftlichen
          Nutzens) der Baumaßnahme über 1,0 liegt. Zum volkswirtschaftlichen
          Nutzen gehören zum Beispiel eingesparte Umweltkosten, die Verbesserung
          der Gesundheit, eingesparte Betriebskosten anderer Infrastruktur,
          Reisezeit sowie die Reduzierung der Sterblichkeitsrate. Zu den Kosten
          gehören die Baukosten sowie die Unterhaltungskosten.
        </p>

        <p>
          <strong>
            Der Nutzen-Kosten-Faktor beim RS 8 liegt bei 1,9. Der zu erwartende
            volkswirtschaftliche Nutzen liegt also deutlich über den Kosten.
          </strong>
        </p>
      </>
    ),
  },
  'Bau & Planung': {
    'Wer ist für Planung und Bau von Radschnellwegen zuständig?': (
      <>
        <p>
          Das{' '}
          <LinkExternal href="https://www.landesrecht-bw.de/jportal/?quelle=jlink&query=StrG+BW&psml=bsbawueprod.psml&max=true&aiz=true">
            Straßengesetz Baden-Württemberg
          </LinkExternal>{' '}
          regelt die Einteilung von Straßen, welche nach ihrer Verkehrsbedeutung
          in verschiedene Gruppen eingeteilt werden. Seit Kurzem gilt diese
          Einstufung auch für Radschnellwege. Diese werden, ebenso wie Straßen,
          als Landes-, Kreis- oder Gemeindestraße gewidmet werden.
        </p>

        <p>
          Aus dieser Einstufung ergibt sich auch die{' '}
          <strong>Baulastträgerschaft</strong>.
        </p>

        <p>
          Als Baulastträger bezeichnet man diejenige Verwaltungseinheit, welche
          für die Planung, den Bau und die Erhaltung der Straße (bzw. in unserem
          Fall des Radschnellweges) zuständig ist.
        </p>

        <p>
          Ob ein Radschnellweg als Landes-, Kreis- oder Gemeinderadschnellweg
          eingestuft wird, hängt von seiner Verbindungsfunktion und den
          ermittelten täglichen Potenzialen an Radfahrenden ab. Strecken mit
          überregionaler Verbindungsfunktion und Potenzialen von mehr als 2.500
          Radfahrenden pro Tag werden als <strong>Landesradschnellweg</strong>{' '}
          eingestuft, Strecken mit einer nahräumigen Verbindungsfunktion und
          Potenzialen ab 2.000 Radfahrern pro Tag als{' '}
          <strong>Kreisradschnellweg</strong>. Bei geringeren Potenzialen kann
          ein Radschnellweg auch als <strong>Gemeinderadschnellweg</strong>{' '}
          ausgebaut werden.
        </p>
        <p>
          Die Entscheidung trifft das Regierungspräsidium nach Rücksprache mit
          dem Verkehrsministerium auf Grundlage von Machbarkeitsstudien, die von
          den Land- oder Stadtkreisen in Auftrag gegeben werden.
        </p>
        <p>
          <u>Landesradschnellweg:</u> Baulastträger ist das Land. Bei Gemeinden
          ab 30.000 Einwohner/innen gilt: innerhalb der Gemarkung ist die
          Kommune Baulastträger.
        </p>
        <p>
          <u>Kreisradschnellweg:</u> Baulastträger ist der Landkreis. Bei
          Gemeinden ab 30.000 Einwohner/-innen gilt: innerhalb der
          Ortsdurchfahrten ist die Kommune Baulastträger.
        </p>
        <p>
          <u>Gemeinderadschnellweg:</u> Baulastträger sind die Gemeinden.
        </p>
        <p>
          <strong>
            Der Radschnellweg Ludwigsburg-Waiblingen (RS 8) wurde als
            Kreisradschnellweg eingestuft.
          </strong>
        </p>
      </>
    ),
    'Wer bezahlt die Planung und den Bau von Radschnellwegen?': (
      <>
        <p>
          Die Verantwortung der Finanzierung liegt bei den{' '}
          <strong>Baulastträgern</strong>.
        </p>

        <p>
          Radschnellwege verursachen zunächst einmal hohe Investitionskosten, es
          gibt aber <strong>sehr gute Fördermöglichkeiten</strong>. So stellt
          der Bund den Ländern im Rahmen des Programms{' '}
          <LinkExternal href="https://www.bmvi.de/SharedDocs/DE/Anlage/StV/verwaltungsvereinbarung-radschnellwege.html">
            „Radschnellwege 2017–2030“
          </LinkExternal>{' '}
          Finanzhilfen für die Planung und den Bau zur Verfügung. Die
          Förderquote liegt, in Kombination mit der{' '}
          <strong>Förderung durch das Land</strong>, bei{' '}
          <strong>bis zu 90% Prozent der zuwendungsfähigen Kosten</strong>.
        </p>
      </>
    ),
    'Müssen neue Flächen versiegelt werden?': (
      <>
        <p>
          Wie bei jedem anderen Bauvorhaben, sollen auch beim Bau von
          Radschnellwegen die{' '}
          <strong>
            Auswirkungen auf Natur, Tiere und Umwelt so gering wie möglich{' '}
          </strong>{' '}
          gehalten werden. Dazu finden im Rahmen der Planungen einige
          Untersuchungen statt und – wo eine Beeinträchtigung unabdingbar ist –
          werden Eingriffe in die Natur durch{' '}
          <strong>Ausgleichsmaßnahmen</strong> kompensiert. Das bedeutet, dass
          an anderer Stelle Verbesserungen vorgenommen werden, z. B.
          Entsiegelung, Baumneupflanzung oder die Anlage von Blühstreifen.
        </p>

        <p>
          Um den Eingriff in die Natur möglichst gering zu halten, werden
          Radschnellwege{' '}
          <strong>
            überwiegend auf bestehenden und bereits asphaltierten Wegen
          </strong>{' '}
          geplant. Teilweise müssen diese aber verbreitert werden, um auf die
          geforderten Mindestbreiten von ca. 4–5 Metern zu kommen. Diese
          Versiegelung muss an anderer Stelle mit Ausgleichsmaßnahmen
          kompensiert werden (siehe auch die Frage „Wie sieht es mit dem
          Naturschutz aus?“). Tatsächlich muss man sich aber auch das größere
          Ziel vor Augen halten: Je attraktiver die Radschnellwege werden, umso
          mehr Pendlerinnen und Pendler können zum Umstieg vom Auto aufs Rad
          bewegt werden. Dadurch verringert sich das Aufkommen des motorisierten
          Individualverkehrs – ein <strong>Gewinn für Umwelt und Klima</strong>.
        </p>
      </>
    ),
    'Was kostet ein Radschnellweg?': (
      <>
        <p>
          Die Kosten für einen Radschnellweg sind abhängig von seiner Länge, den
          verschiedenen Umbaumaßnahmen im Straßenkörper sowie der Menge an neuen
          Bauwerken bzw. deren Ausbau.
        </p>

        <p>
          Die prognostizierten Baukosten für die Radschnellverbindung
          Ludwigsburg–Waiblingen (RS 8) liegen bei: 31 Mio. Euro. Bei einer
          Strecke von ca. 15 Kilometern sind dies etwa 2,1 Mio. Euro/Kilometer.
        </p>

        <p>
          Zusätzlich müssen nach Fertigstellung, wie bei anderen Straßen auch,
          Kosten für den Unterhalt und anfallende Sanierungen eingeplant werden.
          Diese liegen aber deutlich unter den Erhaltungskosten von Straßen und
          Autobahnen, weil diese viel höheren Belastungen ausgesetzt sind.
        </p>

        <p>
          In der Gegenüberstellung der unterschiedlichen Infrastrukturarten
          zeigt sich, dass auch die Baukosten für Radschnellwege vergleichsweise
          gering sind:
        </p>
        <StaticImage
          src="../../images/baukosten-radverkehrsanlagen.jpg"
          alt="Für ca. 10 Mio. Euro können 0,5 km Autobahn, 2,5 km Hauptverkehrsstraße und 11,1 km Radschnellweg gebaut werden."
        />
      </>
    ),
    'Wann sind die Planungen abgeschlossen, wann wird der Radschnellweg gebaut?':
      (
        <>
          <p>
            Der RS 8 befindet sich aktuell in der <strong>Vorplanung</strong>,
            das bedeutet: Die umfangreichen Voruntersuchungen im Rahmen der{' '}
            <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/verkehr-sicherheit-ordnung/radverkehr/radschnellwege/machbarkeitsstudie-radschnellverbindung-ludwigsburg-waiblingen/">
              Machbarkeitsstudie
            </LinkExternal>{' '}
            werden von den Verkehrsplanerinnen und -planern der beteiligten
            Kreise und Städte vor Ort konkretisiert. Dabei werden bereits erste
            Interessengruppen einbezogen. Vorrangig geht es hier um die
            Linienbestimmung.{' '}
          </p>

          <p>
            Im nächsten Schritt ist eine <strong>Bürgerbeteiligung</strong>{' '}
            geplant. Wir stellen Ihnen die bisherigen Ergebnisse vor und wollen
            von Ihnen wissen: Welche Anmerkungen haben Sie zur vorgeschlagenen
            Route, wo sehen Sie Potenziale, wo eventuell Nacharbeitungsbedarf?{' '}
          </p>

          <p>
            Die Anregungen der Bürgerinnen und Bürger fließen in die dann
            anschließende <strong>Entwurfsplanung</strong> ein. Hier finden
            zudem weitere Untersuchungen statt, wie etwa zum Baugrund oder zur
            Statik. Und auch die Ökologischen Untersuchungen folgen jetzt. Zwar
            ist die Förderung des Radverkehrs letztlich auch eine Maßnahme, die
            Umwelt und Klima schützen soll – dennoch greift auch der Bau eines
            Radweges zunächst in die Natur ein. Dafür werden Ausgleichsmaßnahmen
            erforderlich. Wenn die fertige Entwurfsplanung anschließend die{' '}
            <strong>politischen Gremien</strong> passiert hat, kann der{' '}
            <strong>Bau</strong> endlich starten.
          </p>
          <p>
            Wann der Bau der Radschnellwege abgeschlossen sein wird, hängt von
            vielen verschiedenen Faktoren ab, z. B. der Fertigstellung der
            finalen Planung, der Verhandlung mit Grundstückseigentümer/innen bei
            möglichem Grunderwerb, der Verfügbarkeit von Baufirmen etc.
            Natürlich streben alle Beteiligten eine{' '}
            <strong>schnelle Umsetzung der Radschnellwege</strong> an.
          </p>
          <PageHomeMilestones />
        </>
      ),
    'Wer wird in die Planungen mit eingebunden?': (
      <>
        <p>
          Einige Akteure, die sogenannten{' '}
          <strong>TÖB (Träger öffentlicher Belange)</strong>
          müssen zwingend in die Planung miteinbezogen werden. Hierzu gehören
          unter anderem:
        </p>

        <ul>
          <li>Gemeinde</li>
          <li>Verkehrsbehörde</li>
          <li>Umweltbehörde</li>
          <li>Landwirtschaftsbehörde</li>
          <li>Forstbehörde</li>
        </ul>

        <p>
          Auch <strong>Verbände</strong>, wie z. B. Naturschutzverbände oder
          Bauernverbände sowie betroffene Grundstückseigentümer/-innen sollten
          angehört werden.
        </p>

        <p>
          Darüber hinaus wird es – im Rahmen einer{' '}
          <strong>digitalen Öffentlichkeitsbeteiligung</strong> – die
          Möglichkeit geben, dass sich Anwohnerinnen und Anwohner,
          Aktivenverbände, Initiativen, Pendelnde, kurzum: alle betroffenen
          Bürgerinnen und Bürger zum aktuellen Planungsstand äußern können.
        </p>
        <p>Hinweise dazu finden Sie auf dieser Website.</p>
      </>
    ),
    'Wie sieht es mit dem Naturschutz aus?': (
      <p>
        Gut ausgebaute Radwege tragen dazu bei, dass mehr Menschen auf
        Autofahrten verzichten – und sind insofern{' '}
        <strong>gut für Umwelt und Klima</strong>. Dennoch gilt: Wie bei jedem
        anderen Bauvorhaben auch sollen die{' '}
        <strong>
          Auswirkungen auf Natur, Tiere und Umwelt so gering wie möglich
        </strong>{' '}
        gehalten werden. Dazu finden im Rahmen der Planungen einige
        Untersuchungen statt und – wo eine Beeinträchtigung unabdingbar ist –
        werden Eingriffe in die Natur durch <strong>Ausgleichsmaßnahmen</strong>{' '}
        kompensiert. Das bedeutet, dass an anderer Stelle Verbesserungen
        vorgenommen werden, z. B. Entsiegelung, Baumneupflanzung oder die Anlage
        von Blühstreifen.
      </p>
    ),
  },
  Nutzung: {
    'Wie wird der hohe Ausbaustandard aufrechterhalten?': (
      <>
        <p>
          Wie auch bei Straßen wird dies vor allem durch eine{' '}
          <strong>regelmäßige Kontrolle und Unterhaltung</strong> gewährleistet.
          Die Kontrollhäufigkeit ist hierbei analog zu den Hauptverkehrsstraßen.
          Hierzu gehört mindestens einmal wöchentlich eine Sichtkontrolle der
          Oberflächen (Ebenheit, Griffigkeit, Schlaglöcher, Risse etc.) zur
          Aufrechterhaltung der Verkehrssicherheit. Zweimal jährlich wird die{' '}
          <strong>Wegweisung kontrolliert</strong>.
        </p>
        <p>
          Zusätzlich soll alle 5 Jahre eine{' '}
          <strong>
            standardisierte Zustandserfassung und -bewertung (ZEB)
          </strong>{' '}
          erfolgen. So wird sichergestellt, dass der Radschnellweg jederzeit gut
          befahren werden kann.
        </p>
      </>
    ),
    'Wie viele Radfahrende fahren denn da später?': (
      <>
        <p>
          Wie kann man sich so einen Radschnellweg eigentlich vorstellen? Wie
          viele Leute fahren denn da, kommt man da zu Fuß überhaupt noch drüber?
          Damit man sich davon ein besseres Bild machen kann, haben wir die
          Radschnellverbindung Ludwigsburg–Waiblingen visualisieren lassen. Die{' '}
          <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/verkehr-sicherheit-ordnung/radverkehr/radschnellwege/machbarkeitsstudie-radschnellverbindung-ludwigsburg-waiblingen/">
            Machbarkeitsstudie
          </LinkExternal>{' '}
          prognostiziert 2.100 Radfahrende pro Tag, wir zeigen der Einfachheit
          halber das Potenzial von 2.000 Radfahrenden. Dargestellt ist die
          sogenannte „Spitzenstunde“. Diese ist definiert als ein Zehntel der
          täglichen Verkehrsmenge (DTV).
        </p>
        <p>
          Die Simulationen wurden erstellt von Schlothauer & Wauer im Auftrag
          des Landratsamts Ludwigsburg.
        </p>
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
      </>
    ),
    'Werden Radschnellwege beleuchtet?': (
      <>
        <p>
          Da unterscheiden die Vorgaben zwischen innerorts und außerorts.{' '}
          <strong>Innerorts soll der Weg beleuchtet</strong> sein – das ist
          meist durch die vorhandene Straßenbeleuchtung schon gegeben.{' '}
          <strong>Außerorts</strong>
          ist Beleuchtung aus naturschutzrechtlichen und wirtschaftlichen
          Gründen <strong>nur an Problem- und Gefahrenstellen</strong>, wie
          Engstellen, bei Hindernissen, an Kreuzungen oder Unterführungen
          vorgesehen. Wenn Beleuchtung erfolgt, soll diese möglichst
          insektenfreundlich gestaltet sein.
        </p>
        <p>
          An allen anderen Stellen sorgt{' '}
          <strong>die kontrastreiche doppelte Randmarkierung</strong> (weiße
          Fahrstreifenbegrenzungslinie + grüne Begleitlinie) dafür, dass man den
          Weg gut erkennt. Auch bauliche Maßnahmen, die etwa die Blendwirkung
          von Kfz verringert, können umgesetzt werden.
        </p>
        <p>
          Sollte Beleuchtung erforderlich sein, ist es wichtig,{' '}
          <strong>naturschutzfachliche Belange</strong> (Stichwort:
          Insektenfreundlichkeit) zu berücksichtigen, dabei bieten sich z. B.
          dynamische, bedarfsgesteuerte Lösungen an.
        </p>
      </>
    ),
    'Welche Geschwindigkeiten herrschen auf Radschnellwegen?': (
      <>
        <p>
          Zunächst: Zwar heißt es RadSCHNELLweg, das bedeutet aber nicht, dass
          hier Schnelligkeit über allem steht.{' '}
          <strong>
            Wichtigstes Ziel ist und bleibt die Verbesserung der Sicherheit für
            den Radverkehr
          </strong>{' '}
          aber auch aller anderen Verkehrsteilnehmer. Dass man auf
          Radschnellwegen „schnell“ vorankommt, liegt auch nicht unbedingt an
          einer erhöhten Fahrgeschwindigkeit, sondern eher daran, dass
          Radschnellwege breit genug angelegt sind, damit dort ein sicheres
          Überholen möglich ist, und dass sie keine Umwege und wenige Kreuzungen
          aufweisen, die zum Bremsen zwingen. Dadurch und auch durch die
          geringen Steigungen und die gute Belagsqualität kann eine{' '}
          <strong>höhere Durchschnittsgeschwindigkeit</strong> erreicht und die
          Fahrtzeit so insgesamt verringert werden.
        </p>

        <p>
          Angelegt werden sollen die Radschnellwege so, dass eine sichere
          Befahrbarkeit auch bei hohen Fahrgeschwindigkeiten (30 km/h bei freier
          Trassierung) möglich ist. Unter Berücksichtigung von Zeitverlusten an
          Knotenpunkten soll eine durchschnittliche Reisegeschwindigkeit von
          mindestens 20 km/h ermöglicht werden.
        </p>
      </>
    ),
    'Wie werden Radschnellwege gereinigt und geräumt?': (
      <p>
        Radschnellwege haben <strong>Priorität im „Winternetz“</strong>, sollen
        also wie Hauptverkehrsstraßen behandelt werden. Dies bedeutet den
        Abschluss der Räumarbeiten vor der morgendlichen Hauptverkehrszeit bzw.
        vor Schulbeginn. Die einwandfreie Befahrbarkeit soll im Winter zwischen
        06.00 und 22.00 Uhr stets gewährleistet sein. Zudem sollen auf
        Radschnellwegen keine Schneemassen abgelagert werden. Hierzu gehört auch
        die <strong>ganzjährige Reinigung</strong>, was beispielsweise im Herbst
        sehr wichtig ist.
      </p>
    ),
  },
  Route: {
    'Liegt die Routenführung schon fest?': (
      <>
        <p>
          Ein klares <strong>Nein</strong>: Bislang befinden sich der RS 8 noch
          in der Vorplanungsphase, in der noch keine Linienführung fixiert ist.
        </p>

        <p>
          Im Zuge der durchgeführten{' '}
          <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/verkehr-sicherheit-ordnung/radverkehr/radschnellwege/machbarkeitsstudie-radschnellverbindung-ludwigsburg-waiblingen/">
            Machbarkeitsstudie
          </LinkExternal>{' '}
          wurden das jeweils mögliche Radverkehrsaufkommen prognostiziert,
          TrassenvariantenBeschluss der politischen Entscheidungsträger
          untersucht und – in enger Abstimmung mit den beteiligten Kommunen –
          eine sogenannte Vorzugsvariante definiert. In die Bewertung der
          Trassenführung flossen unterschiedliche Kriterien ein. Neben
          infrastrukturellen Gesichtspunkten wurden auch ökologische Aspekte
          sowie die Betrachtung des jeweiligen Zusammenspiels zwischen den
          unterschiedlichen Verkehrsteilnehmern berücksichtigt.
        </p>

        <p>
          Wichtig dabei ist, dass die daraus resultierende Vorzugstrasse nur
          eine Empfehlung des Planungsbüros darstellte. Die tatsächliche Route
          wurde im Rahmen der Vorplanung mit allen Beteiligten konkretisiert und
          auch teilweise abgeändert. Die auf dieser Website vorgestellte{' '}
          <strong>Linienführung</strong> des RS 8 ist aus Sicht der beteiligten
          Verkehrsplanerinnen und -planer die bestmögliche, kann aber –
          beispielsweise nach entsprechenden Rückmeldungen der Träger
          öffentlicher Belange oder der Bürgerschaft noch abgeändert werden.
        </p>
        <p>
          Nach Abschluss der Beteiligungs- und Planungsphase wird dann die
          Streckenführung durch{' '}
          <strong>Beschluss der politischen Entscheidungsträger</strong>{' '}
          festgelegt.
        </p>
      </>
    ),
    'Wie erkennt man Radschnellwege?': (
      <>
        <p>
          Radschnellwege werden durch ein eigenes StVO-Zeichen (Zeichen 451)
          gekennzeichnet. Zusätzlich werden in regelmäßigen Abständen Tafeln und
          Stelen angebracht, die Informationen zur Orientierung sowie den
          gesamten Streckenverlauf der Radschnellverbindung geben.
          Bodenpiktogramme und doppelte Randmarkierung (weiße
          Fahrstreifenbegrenzungslinie + grüne Begleitlinie) sorgen für gute
          Erkennbarkeit der Wege.
        </p>
        <StaticImage
          src="./assets/demonstrations-teilstueck.jpg"
          alt="Das bereits fertiggestellte Teilstück des RS4 im Filstal demonstriert, wie Radschnellwege später aussehen werden. Foto: Christian Kuhn"
        />
        <p>
          <i>
            Das bereits fertiggestellte Teilstück des RS 4 im Filstal
            demonstriert, wie Radschnellwege später aussehen werden. Foto:
            Christian Kuhn
          </i>
        </p>
      </>
    ),
    'Wie komme ich überhaupt auf den Radschnellweg?': (
      <>
        <p>
          Damit Radschnellwege auch wirklich genutzt werden und viele Menschen
          aufs Rad umsteigen, müssen die Radschnellwege{' '}
          <strong>
            an möglichst viele Wohn- und Gewerbegebiete und auch andere
            Radrouten
          </strong>{' '}
          angeschlossen werden.
        </p>

        <p>
          Es sind daher <strong>verschiedene Zubringer</strong> zur Anbindung
          der Kommunen an den Radschnellweg nötig. Da aber die Planungen beim RS
          8 erst in der Anfangsphase sind, und daher auch die exakte
          Routenführung noch nicht feststeht, gibt es für die Zubringer bisher
          nur erste Überlegungen. Diese können dann im weiteren Planungsverlauf
          konkretisiert werden.
        </p>

        <p>
          Siehe auch Frage: „Wie wird der Radschnellweg über den Start- und
          Endpunkt hinaus weitergeführt?“
        </p>
      </>
    ),
    'Wie wird der Radschnellweg über den Start- und Endpunkt hinaus weitergeführt?':
      (
        <>
          <p>
            Radschnellwege sind <strong>längere durchgehende Routen</strong>,
            die wichtige Ziele und Zentren miteinander verbinden. Sie sind in
            der Region Stuttgart auch <strong>mit anderen Routen</strong>{' '}
            vernetzt, sodass sich auch vom Start- bzw. Endpunkt unserer
            Radschnellwege weitere Ziele erreichen lassen. Teilweise sind das
            anschließende Radschnellwege oder andere hochwertige
            Radinfrastruktur.
          </p>

          <p>
            Der RS 8 wird über Waiblingen hinaus nach <strong>Backnang</strong>{' '}
            sowie <strong>Schorndorf</strong> und <strong>Fellbach</strong> (RS
            5) weitergeführt. Von Remseck aus soll es später eine
            Direktverbindung nach <strong>Stuttgart</strong> geben.
          </p>
          <p>
            Von Ludwigsburg wird man auf einem Radschnellweg nach{' '}
            <strong>Bietigheim-Bissingen</strong> sowie in Richtung{' '}
            <strong>Kornwestheim</strong> (RS 21) weiterradeln können.
          </p>
          <LinkExternal href="https://www.aktivmobil-bw.de/fileadmin/user_upload_fahrradlandbw/1_Radverkehr_in_BW/i_Radschnellverbindungen/BaWue_Ausbaustand_der_Radschnellwege_Stand_Mai_2022.pdf">
            <StaticImage
              src="./assets/BaWue_Ausbaustand_der_Radschnellwege_Stand_Mai_2022.jpg"
              alt="Karte der Radschnellwege"
            />
          </LinkExternal>
        </>
      ),
  },
  'Andere Verkehrsteilnehmende': {
    'Radfahrer/-innen sollen auf Radschnellwegen „bevorrechtigt“ unterwegs sein – was heißt das?':
      (
        <>
          <p>
            Die konsequente Bevorrechtigung von Radschnellverbindungen hat einen
            wichtigen Grund: Gemeinsam mit der Minimierung von Kreuzungspunkten
            sorgt sie für die hohen Reisegeschwindigkeiten, die den{' '}
            <strong>Umstieg aufs Rad attraktiv</strong> machen und so die
            Radschnellwege zum wichtigen Baustein in der Verkehrswende machen.
            Das bedeutet aber nicht, dass der Radverkehr an jeder Kreuzung freie
            Bahn hat und alle anderen Verkehrsteilnehmer/-innen ständig
            ausgebremst werden.
          </p>
          <p>
            Bevorrechtigung kann auf verschiedene Arten erreicht werden und ist
            immer von der jeweiligen Situation vor Ort abhängig. Neben einer
            durch Beschilderung angeordneten Vorfahrt können z. B. auch{' '}
            <strong>Ampeln radverkehrsfreundlich</strong> Ampeln
            radverkehrsfreundlich geschaltet oder <strong>Mittelinseln</strong>{' '}
            gebaut werden. Eine sehr attraktive aber zugleich auch teurere
            Alternative sind sogenannte planfreie Lösungen, also{' '}
            <strong>Brücken</strong> oder <strong>Unterführungen</strong>. Beim
            RS 8 sind an mehreren Stellen solche Bauwerke geplant.
          </p>
          <p>
            Die konkrete Vorgabe lautet: „Die mittleren Zeitverluste pro
            Kilometer durch Anhalten und Warten sollen nicht größer als 15
            Sekunden (außerorts) und 30 Sekunden (innerorts) sein.“ In den{' '}
            <LinkExternal href="https://www.google.com/url?q=https://www.aktivmobil-bw.de/radverkehr/radschnellverbindungen/qualitaetsstandards-und-musterloesungen/&sa=D&source=docs&ust=1671631626951292&usg=AOvVaw0NUvpyI9FE_whUmsfLDx4W">
              Qualitätsstandards und Musterlösungen für Radschnellverbindungen
              in Baden-Württemberg
            </LinkExternal>{' '}
            werden die Verlustzeiten der unterschiedlichen Lösungen (Ampeln,
            Kreisverkehre, Brücken etc.) berechnet
          </p>
        </>
      ),
    'Werden (Auto-)Parkplätze wegfallen?': (
      <>
        <p>
          Der Wegfall einzelner Parkplätze{' '}
          <strong>kann nicht ausgeschlossen</strong> werden. Schließlich muss
          der Platz, welcher für den Radschnellweg benötigt wird, an anderer
          Stelle eingespart werden. Weniger motorisierter Verkehr ist nicht nur
          ein <strong>Gewinn fürs Klima</strong>, sondern auch für die
          Bürger/-innen, die – gerade in Innenstädten – weniger Lärm und Abgase
          ertragen müssen.
        </p>

        <p>
          <LinkExternal href="https://www.aktivmobil-bw.de/aktuelles/news/radfahrer-gut-fuer-einzelhandel/vom/4/4/2016/">
            Studien belegen
          </LinkExternal>
          , dass der Wegfall von Parkplätzen für den Einzelhandel keineswegs
          Verschlechterungen mit sich bringt, sondern der Umsatz sogar häufig
          steigt, wenn der Radweg durch die Innenstadt führt. Zum einen sind
          auch Radlerinnen und Radler kaufkräftig, zum anderen erhöht weniger
          Autoverkehr die <strong>Aufenthaltsqualität</strong> und lädt somit
          zum Verweilen ein.
        </p>
      </>
    ),
    'Und was ist mit den Fußgänger/-innen?': (
      <>
        <p>
          Grundsätzlich soll der{' '}
          <strong>Radverkehr separat vom Fußverkehr</strong> geführt werden, um
          mögliche Konflikte von vornherein zu verhindern. Beide Wege sollen
          dabei <strong>möglichst breit</strong> angelegt sein und – sofern sie
          nicht ohnehin unabhängig voneinander verlaufen – durch bauliche
          Trennung (Grün- oder Schotterstreifen) oder breite Trennstreifen
          voneinander abgegrenzt werden.
        </p>

        <p>
          Eine gemeinsame Führung von Rad- und Fußverkehr wird nur in
          Ausnahmefällen möglich sein und auch nur dann, wenn nur wenige
          Fußgänger/-innen (max. 25 Personen in der Spitzenstunde für den
          Radverkehr) unterwegs sind. Bei einer gemeinsamen Führung gilt, wie
          überall sonst im Straßenverkehr:{' '}
          <strong>gegenseitige Rücksichtnahme!</strong>
        </p>

        <p>
          Richtig ist aber auch: Selbst, wenn die Bezeichnung an
          Schnellverkehrsstraße erinnert, darf man sich Radschnellwege
          keinesfalls als solche vorstellen, also als für alle anderen
          Verkehrsteilnehmenden unüberwindbaren Schneisen in der Landschaft.
          Querungshilfen oder gar Ampeln für den querenden Fußverkehr wird man
          nicht benötigen. Auch bei hohem Radverkehrsaufkommen bleiben immer
          wieder große Lücken, die Fußgänger/-innen zur sicheren Querung nutzen
          können.{' '}
        </p>

        <p>
          Siehe auch Frage: Welche Geschwindigkeiten herrschen auf
          Radschnellwegen?
        </p>
      </>
    ),
    'Verdrängt ein Radschnellweg auf Feldwegen den landwirtschaftlichen Verkehr?':
      (
        <p>
          Feldwege bieten sich in oft als Grundlage für Radschnellwege an: Sie
          liegen häufig landschaftlich schön, gleichzeitig oft parallel zu den
          großen Straßen und sind bereits befestigt bzw. asphaltiert, so dass{' '}
          <strong>weniger neue Flächen versiegelt</strong> werden müssten.
          Gleichzeitig dienen diese Wege aber dem landwirtschaftlichen Verkehr
          und haben auch für Spaziergängerinnen und Spaziergänger eine wichtige
          Erholungsfunktion. Damit sich die Verkehrsteilnehmer/-innen hier nicht
          in die Quere kommen und alle sicher unterwegs sein können, werden
          Streckenabschnitte, auf denen eine gleichzeitige Nutzung durch Rad-
          und landwirtschaftlichen Verkehr vorgesehen ist, mit einer{' '}
          <strong>großzügigen Trassenbreite</strong> von 5 Metern vorgesehen.
          Sind zudem besonders viele Fußgängerinnen und Fußgänger zu erwarten,
          wird auf 6,50 Meter verbreitert.
        </p>
      ),
  },
}
