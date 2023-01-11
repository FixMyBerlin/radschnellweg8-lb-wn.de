import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from '../../Link'
import { ImageWithCaption } from '../ImageWIthCaption'
import { TSectionDetails } from './types'

export const section2Details: TSectionDetails[] = [
  {
    id: 'gespraeche-mit-bauern',
    title: 'Gespräche mit Bauern und ADFC Kreisverband',
    body: (
      <p>
        Um möglichst wenig Flächen neu zu versiegeln, soll der künftige
        Radschnellweg über bereits vorhandene Wege führen. Diese Wege werden
        aber auch von anderen Verkehrsteilnehmenden genutzt, insbesondere von
        der Landwirtschaft. Durch Verbreiterung der gemeinsam genutzten Wege auf
        5 Meter werden Konflikte im Begegnungsverkehr minimiert. Nördlich der
        Landesstraße ist der landwirtschaftliche Verkehr deutlich geringer als
        auf den Wegen südlich davon. Daher wurde, auch nach Rücksprache mit dem
        Bauernverband, diese Variante für die weitere Planung gewählt. Im
        Vorfeld wurden{' '}
        <strong>
          Gespräche mit ansässigen Bauern und dem ADFC Kreisverband
        </strong>{' '}
        geführt.
      </p>
    ),
  },
  {
    id: 'ausgleichsmassnahmen',
    title: 'Ausgleichsmaßnahmen',
    body: (
      <>
        <p>
          Nahezu im gesamten Bereich zwischen der Unterquerung der L 1140 und
          Oßweil ist auf der nördlichen Seite ein etwa 1,50 m breiter Weg
          vorhanden, welcher nach derzeitigem Planungsstand auf die
          erforderlichen Maße von 4,0 m ausgebaut werden soll – diesen Weg
          hätten die Radfahrenden dann ganz für sich, hier wird kein
          landwirtschaftlicher Verkehr oder Fußverkehr entlangführen. Kurz vor
          der Einmündung in die Neckargröninger Straße, von Osten kommend, soll
          die Trasse des Radschnellwegs diesen Weg verlassen und wird die
          Straßenböschung hinunter auf einen bestehenden Wirtschaftsweg geführt
          werden, um auf Höhe des Hundevereins höhengleich an die
          Neckargröninger Straße anzuschließen. Für die Herstellung der
          notwendigen Radschnellwegsbreite müssen einzelne Wege verbreitert
          werden. Diesen Eingriff in die Natur (Neuversiegelung) kompensieren
          wir wie nach Bundesnaturschutzgesetz vorgesehen durch{' '}
          <strong>Ausgleichsmaßnahmen</strong> . Als Ausgleich für den RS 8
          sollen streifenförmige Blühstreifen entlang des Radschnellweges
          und/oder zwischen Ackerflächen angelegt werden.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS2Detailpkt2-Bluehstreifen-PIXABAY-LEVKE-HANNEMANN.jpg"
              alt="Die Blühstreifen werden mit heimischem Saatgut eingesät und stellen wichtige Nahrungs-, Fortpflanzungs- und Rückzugsbiotope für Insekten und andere Kleintiere dar. © Pixabay, Levke Hannemann"
            />
          }
        >
          Die Blühstreifen werden mit heimischem Saatgut eingesät und stellen
          wichtige Nahrungs-, Fortpflanzungs- und Rückzugsbiotope für Insekten
          und andere Kleintiere dar. © Pixabay, Levke Hannemann
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'pruefung-mehrerer-varianten-der-linienfuehrung',
    title: 'Prüfung mehrerer Varianten der Linienführung',
    body: (
      <>
        <p>
          Die Dichte an Wirtschaftswegen zwischen Ludwigsburg und Remseck ist
          hoch. Ausgehend von den Untersuchungen aus der Machbarkeitsstudie
          wurden in der Vorplanung daher noch einmal{' '}
          <strong>mehrere Varianten der Linienführung geprüft</strong>.
          Kriterien, die für die Entscheidung zur jetzt angedachten Führung
          maßgeblich waren:
        </p>
        <ul>
          <li>die Direktheit der Wegeführung</li>
          <li>
            möglichst geringes Aufkommen anderer Verkehre (Landwirtschaft,
            Fußverkehr, Pkw){' '}
          </li>
          <li>
            möglichst breite bereits vorhandene Wege zur Vermeidung von
            Neuversiegelung
          </li>{' '}
          <li>naturschutzrechtliche Belange</li>
        </ul>
      </>
    ),
  },
  {
    id: 'neues-unterfuehrungsbauwerk',
    title: '(Neues) Unterführungsbauwerk',
    body: (
      <>
        <p>
          Ein wichtiges Qualitätsmerkmal von Radschnellwegen ist das schnelle
          Vorankommen. Um Wartezeiten an Kreuzungen zu verringern sind dafür im
          Idealfall sogenannte planfreie Knotenpunkte zu nutzen. Wir planen
          einen solchen zur Unterquerung der Kreisstraße 1666
          („Soldatensträßle“). <strong>Ein neues Unterführungsbauwerk</strong>{' '}
          sorgt dafür, dass Radfahrende hier schnell, bequem und konfliktfrei
          auf die andere Seite der Straße gelangen.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS2Detailpkt4.1-Unterfuehrung_K1666_LRA-LB.PNG"
              alt="Aus den Vorplanungs-Unterlagen: Unterführung K 1666. © KMB / Landratsamt Ludwigsburg"
            />
          }
        >
          Aus den Vorplanungs-Unterlagen: Unterführung K 1666. © KMB /
          Landratsamt Ludwigsburg
        </ImageWithCaption>
        <p>
          Im Verlauf der Strecke wird der neue Radschnellweg auch die
          Landesstraße 1140 queren müssen. Dort gibt es bereits eine
          <strong> Unterführung auf Höhe des Hofes Leutenecker</strong>. Diese
          wird aber auch von landwirtschaftlichen Fahrzeugen genutzt. Momentan
          wird noch untersucht, mit welchen Maßnahmen sich die momentan noch
          etwas unübersichtliche Situation direkt am Bauwerk verbessern ließe.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS2Detailpkt4.2-Unterfuehrung_L1140_LRA-LB.PNG"
              alt="Aus den Vorplanungs-Unterlagen: Unterführung L 1140. © KMB / Landratsamt Ludwigsburg"
            />
          }
        >
          Aus den Vorplanungs-Unterlagen: Unterführung L 1140. © KMB /
          Landratsamt Ludwigsburg
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'neue-mitteremseck',
    title: 'Neue Mitte Remseck',
    body: (
      <>
        <p>
          In Remseck wird der Radschnellweg südlich der L 1140 über bestehende
          Wege bis zum Neckar geführt. Auf die Herstellung einer voll
          ausgebauten Verbindung wird hier verzichtet, da es sich um ein
          Provisorium handelt. Perspektivisch plant die Stadt Remseck hier die{' '}
          <strong>Errichtung eines neuen Stadtquartiers</strong> , der „Neuen
          Mitte“. In diese wird der Radschnellweg dann planerisch integriert.
        </p>
        <p>
          Mehr Informationen gibt’s hier:{' '}
          <Link
            blank
            to="https://www.stadt-remseck.de/de/Die-Stadt/Buergerbeteiligung/Neue-Mitte"
          >
            https://www.stadt-remseck.de/de/Die-Stadt/Buergerbeteiligung/Neue-Mitte
          </Link>
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS2Detailpkt5-Neue-Mitte-Remseck_STADT-REMSECK.jpg"
              alt=""
            />
          }
        >
          Planungsskizze „Neue Mitte“. © Stadt Remseck
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'provisorische-fuehrung',
    title: 'Provisorische Führung',
    body: (
      <>
        <p>
          Auch die Querung des Busbahnhofs in Remseck wird durch die „Neue
          Mitte“ komplett umgestaltet. Hier haben wir im Vorfeld zahlreiche
          Varianten einer möglichen Querung bis zur Realisierung des
          Städtebauprojekts überlegt und gegeneinander abgewogen. Letztendlich
          hat sich aber die kürzeste Version, mit „Variante 1.0“ gekennzeichnet,
          als die beste und kostengünstigste Möglichkeit für die{' '}
          <strong>provisorische Führung</strong> erwiesen. Nach dem Busbahnhof /
          Endhaltestelle entsteht eine planerische Lücke für die Führung des
          Radschnellwegs durch Neckargröningen/Neckarrems. Radfahrer haben die
          Möglichkeit, auf den bisher bekannten Wegführungen über den Neckarsteg
          am Rathaus vorbei die Innenstadt zu durchqueren. Auf der Remstalstraße
          wird dann wieder nach Radschnellwegstandards ausgebaut. Auch hierbei
          handelt es sich um eine vorläufige Lösung, mit dem Bau der „Neuen
          Mitte“ soll der Radschnellweg perspektivisch über die Neckarbrücke
          (derzeit L 1140) geführt werden.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS2Detailpkt6-Remseck-Varianten-Busbahnhof_LRA-RMK.PNG"
              alt=""
            />
          }
        >
          Aus den Vorplanungs-Unterlagen: Varianten Busbahnhof Remseck. © KMB /
          Landratsamt Ludwigsburg
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'tragbauwerke',
    title: 'Tragbauwerke (Auskragung)',
    body: (
      <>
        <p>
          Entlang der L 1142 (Remstalstraße) herrschen aufgrund der Topografie
          schwierige Rahmenbedingungen zur Realisierung eines Radschnellwegs. Es
          ist daher vorgesehen, die vorhandene Zusatz-Busspur zugunsten des
          Radschnellwegs umzuwidmen. Diese würde zur Fahrradspur mit dem Zusatz
          „Linienverkehr frei“. Auf einer 550 Meter langen Strecke würden dann
          Rad und Bus (nur talwärts) zusammengeführt. Diese jetzige Busspur
          verfügt aber noch nicht über die benötigten Breiten von 5 Metern.
          Daher soll die Fahrbahn mit Hilfe von{' '}
          <strong>Tragbauwerken (Auskragung)</strong> verbreitert werden.
          Betonschutzwände zu beiden Seiten sorgen für eine Absturzsicherung
          talwärts und trennen Rad- und Kfz-Verkehr voneinander.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS2Detailpkt7-L1142-Strassenquerschnitt_LRALB.PNG"
              alt=""
            />
          }
        >
          Ausschnitt aus den Vorplanungs-Unterlagen: Straßenquerschnitt L 1142.
          © Landkreis Ludwigsburg
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'fahrradspur-mit-linienverkehr-frei',
    title: 'Fahrradspur mit „Linienverkehr frei”',
    body: (
      <>
        <p>
          Der Linienbus, von Richtung Hegnach kommend, bekommt auf Höhe des
          ehemaligen Kriegerdenkmals einmalig die optionale Möglichkeit, sich
          auf die{' '}
          <strong>Fahrradspur (mit Zusatzschild „Linienverkehr frei“)</strong>{' '}
          einzufädeln, um einen eventuellen Stau auf der L 1142 (talwärts) zu
          umfahren. Auf der Fahrradspur darf der Bus dann nur 50 km/h fahren
          (gegenüber 70 km/h auf der Autospur), das bedeutet, dass er die 550
          Meter lange gemeinsame Strecke dann in unter einer Minute (ca. 40
          Sekunden) absolvieren würde. Nach derzeitigen Fahrplänen ergäbe sich
          diese Situation zudem maximal zweimal in der Stunde.
        </p>
        <p>
          Wenn die „Neue Mitte“ in Remseck realisiert ist, wird diese
          Zusammenführung von Bus und Rad voraussichtlich wieder entfallen.
          Durch Verkehrsumlegung soll die Stausituation am Ortseingang von
          Remseck-Neckarrems so weit entspannt werden, dass eine zusätzliche
          Busspur nicht mehr nötig sein wird. Der Radschnellweg kann dann zur
          Fahrradspur mit geringen Fußgängerverkehr werden.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS2Detailpkt8-L1142-Busschleuse_LRALB.PNG"
              alt=""
            />
          }
        >
          Detail aus den Vorplanungs-Unterlagen: Einfädelmöglichkeit für
          Linienbus am Kriegerdenkmal. © KMB / Landratsamt Ludwigsburg
        </ImageWithCaption>
      </>
    ),
  },
]
