import { StaticImage } from 'gatsby-plugin-image'
import BaukostenImage from '~/images/baukosten-radverkehrsanlagen.jpg'
import { PageHomeMilestones } from '../PageHome'
import { LinkExternal } from '../Text'
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
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rps/abt4/ref44/seiten/radschnellweg/">
              Heilbronn&ndash;Bad Wimpfen
            </LinkExternal>
          </li>
          <li>
            <strong>RS 4</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rps/abt4/ref44/radschnellweg-esslingen-reichenbach/">
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
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rpk/abt4/ref44/radschnellverbindung-karlsruhe-ettlingen/">
              Karlsruhe&ndash;Ettlingen
            </LinkExternal>
          </li>
          <li>
            <strong>RS 11</strong>{' '}
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rpt/abt4/radwegeplanung/rs-l-tuebingen-rottenburg/">
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
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rpk/abt4/seiten/strassenplanungen/rs16-radschnellweg-heidelberg-schwetzingen/">
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
            <LinkExternal href="https://rp.baden-wuerttemberg.de/rpt/abt4/radwegeplanung/rs-l-tuebingen-reutlingen/">
              T&uuml;bingen &ndash; Reutlingen
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
    'Was kostet ein Radschnellweg?': (
      <>
        <p>
          Die Kosten für einen Radschnellweg sind abhängig von seiner Länge, den
          verschiedenen Umbaumaßnahmen im Straßenkörper sowie der Menge an neuen
          Bauwerken bzw. deren Ausbau.
        </p>

        <p>
          Die prognostizierten Baukosten für die Radschnellverbindung
          Ludwigsburg–Waiblingen (RS8) liegen bei: 31 Mio. Euro. Bei einer
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
          gering sind:{' '}
          <StaticImage
            src={BaukostenImage}
            alt="Für ca. 10 Mio. Euro können 0,5 km Autobahn, 2,5 km Hauptverkehrsstraße und 11,1 km Radschnellweg gebaut werden."
          />
        </p>
      </>
    ),
    'Wann sind die Planungen abgeschlossen, wann wird der Radschnellweg gebaut?':
      (
        <>
          <p>
            Der RS 8 befindet sich aktuell in der <strong>Vorplanung</strong>,
            das bedeutet: Die umfangreichen Voruntersuchungen im Rahmen der
            Machbarkeitsstudie werden von den Verkehrsplanerinnen und -planern
            der beteiligten Kreise und Städte vor Ort konkretisiert. Dabei
            werden bereits erste Interessengruppen einbezogen. Vorrangig geht es
            hier um die Linienbestimmung.{' '}
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
          <PageHomeMilestones />
        </>
      ),
    'Wer wird in die Planungen mit eingebunden?': (
      <>
        <p>
          Einige Akteure, die sogenannten TÖB (Träger öffentlicher Belange)
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
          Auch Verbände, wie z.B. Naturschutzverbände oder Bauernverbände sowie
          betroffene Grundstückseigentümer/-innen sollten angehört werden.
        </p>

        <p>
          Darüber hinaus können Bürgerinitiativen, Aktivenverbände wie z.B. der
          ADFC oder auch die breite Bürgerschaft miteingebunden werden. Eine
          solche Bürgerbeteiligung besteht aus Informationen und der Möglichkeit
          zur Kommentierung der vorgestellten Pläne.
        </p>
      </>
    ),
    'Wie sieht es mit dem Naturschutz aus?': (
      <p>
        Gut ausgebaute Radwege tragen dazu bei, dass mehr Menschen auf
        Autofahrten verzichten – und sind insofern gut für Umwelt und Klima.
        Dennoch gilt: Wie bei jedem anderen Bauvorhaben auch sollen die
        Auswirkungen auf Natur, Tiere und Umwelt so gering wie möglich gehalten
        werden. Dazu finden im Rahmen der Planungen einige Untersuchungen statt
        und – wo eine Beeinträchtigung unabdingbar ist – werden Eingriffe in die
        Natur durch Ausgleichsmaßnahmen kompensiert. Das bedeutet, dass an
        anderer Stelle Verbesserungen vorgenommen werden, z. B. Entsiegelung,
        Baumneupflanzung oder die Anlage von Blühstreifen.
      </p>
    ),
  },
  Nutzung: {
    'Wieviele Radfahrende fahren denn da später?': (
      <>
        <p>
          Wie kann man sich so einen Radschnellweg eigentlich vorstellen? Wie
          viele Leute fahren denn da, kommt man da zu Fuß überhaupt noch drüber?
          Damit man sich davon ein besseres Bild machen kann, haben wir die
          Radschnellverbindung Ludwigsburg–Waiblingen visualisieren lassen. Die
          Machbarkeitsstudie prognostiziert 2.100 Radfahrende pro Tag, wir
          zeigen der Einfachheit halber das Potenzial von 2.000 Radfahrenden.
          Dargestellt ist die sogenannte „Spitzenstunde“. Diese ist definiert
          als ein Zehntel der täglichen Verkehrsmenge (DTV). Die Simulationen
          wurden erstellt von Schlothauer & Wauer im Auftrag des Landratsamts
          Ludwigsburg.
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
          Im Zuge der durchgeführten Machbarkeitsstudie wurden das jeweils
          mögliche Radverkehrsaufkommen prognostiziert,
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
      </>
    ),
    'Wie komme ich überhaupt auf den Radschnellweg?': (
      <>
        <p>
          Damit Radschnellwege auch wirklich genutzt werden und viele Menschen
          aufs Rad umsteigen, müssen die Radschnellwege an möglichst viele Wohn-
          und Gewerbegebiete und auch andere Radrouten angeschlossen werden.
        </p>

        <p>
          Es sind daher verschiedene Zubringer zur Anbindung der Kommunen an den
          Radschnellweg nötig. Da aber die Planungen beim RS8 erst in der
          Anfangsphase sind, und daher auch die exakte Routenführung noch nicht
          feststeht, gibt es für die Zubringer bisher nur erste Überlegungen.
          Diese können dann im weiteren Planungsverlauf konkretisiert werden.
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
            Radschnellwege sind längere durchgehende Routen, die wichtige Ziele
            und Zentren miteinander verbinden. Sie sind in der Region Stuttgart
            auch mit anderen Routen vernetzt, sodass sich auch vom Start- bzw.
            Endpunkt unserer Radschnellwege weitere Ziele erreichen lassen.
            Teilweise sind das anschließende Radschnellwege oder andere
            hochwertige Radinfrastruktur.
          </p>

          <p>
            Der RS 8 wird über Waiblingen hinaus nach Backnang sowie Schorndorf
            und Fellbach (RS 5) weitergeführt. Von Remseck aus soll es später
            eine Direktverbindung nach Stuttgart geben.
          </p>
          <p>
            Von Ludwigsburg wird man auf einem Radschnellweg nach
            Bietigheim-Bissingen sowie in Richtung Kornwestheim weiterradeln
            können.
          </p>
          <LinkExternal href="https://www.aktivmobil-bw.de/fileadmin/user_upload_fahrradlandbw/1_Radverkehr_in_BW/i_Radschnellverbindungen/BaWue_Ausbaustand_der_Radschnellwege_Stand_Mai_2022.pdf">
            <StaticImage
              src="./assets/BaWue_Ausbaustand_der_Radschnellwege_Stand_Mai_2022.jpg"
              alt="Karte der Radschnellwege"
            />{' '}
            (PDF)
          </LinkExternal>
        </>
      ),
  },
  'Andere Verkehrsteilnehmende': {
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
    'Und was ist mit den Fußgänger*innen?': (
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
