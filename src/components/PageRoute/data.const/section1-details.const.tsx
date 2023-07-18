import { StaticImage } from 'gatsby-plugin-image'
import { ImageWithCaption } from '../../Images'
import { Lightbox } from '../Lightbox'
import { TSectionDetails } from './types'

export const section1Details: TSectionDetails[] = [
  {
    id: 'durchgehende-fahrradstraße',
    no: 1,
    title: 'Durchgehende Fahrradstraße',
    body: (
      <>
        <p>
          Von der Myliusstraße bis zur B27 wird die Alleenstraße qualitativ als
          durchgehende Fahrradstraße ausgebaut. Bereits heute ist der Abschnitt
          zwischen Solitude- und Seestraße als Fahrradstraße ohne Kfz-Verkehr
          ausgewiesen. Die Fußwege werden verbreitert. Zwischen Myliusstraße und
          Solitudestraße sowie zwischen Seestraße und B 27 wird der Kfz-Verkehr
          weiterhin als Einbahnstraße mit geringen Verkehrsmengen geführt. Hier
          wurde durch Provisorien bereits Vorarbeit geleistet.
        </p>
        <p>
          Der Abschnitt gehört mit mehr als 4.000 Fahrrädern pro Tag zu den am
          stärksten befahrenen Abschnitten in Ludwigsburg. Die Vorplanung wurde
          hier bereits in Teilabschnitten politisch beschlossen und eng mit
          Verbänden abgestimmt.
        </p>

        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS1Detailpkt1-AGFK_Fuehrungsformen_Radverkehr_05_MarcusGloger.jpg"
              alt="Nach aktueller Planung soll die Alleenstraße zur Fahrradstraße werden. Hier ein Beispielbild aus Stuttgart
          ©AGFK-BW, Marcus Gloger"
            />
          }
        >
          Nach aktueller Planung soll die Alleenstraße zur Fahrradstraße werden.
          Hier ein Beispielbild aus Stuttgart ©AGFK-BW, Marcus Gloger
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'anschluss-nord-sued-hauptroute',
    no: 2,
    title: 'Anschluss an die Nord-Süd-Hauptradroute',
    body: (
      <>
        <p>
          Am Veranstaltungsort Forum am Schlosspark wird der Radverkehr
          richtungsgetrennt geführt und der{' '}
          <strong>Anschluss an die Nord-Süd-Hauptradroute</strong> verbessert.
          Durch die vielen Nutzeransprüche mit großen Parkplatzanlagen an der
          Bärenwiese und großen Fußverkehrsmengen bei Festen und Veranstaltungen
          im Forum ist die Planung nicht einfach.
        </p>
        <p>
          Der Abschnitt vor dem Forum hat die höchste Priorität und soll so
          rasch wie möglich gebaut werden. Es gibt hier bereits einen
          Vorentwurf, der im Gemeinderat beschlossen wurde. Vorab hat die
          Verwaltung sich mit der Radinitiative und dem ADFC Ludwigsburg
          abgestimmt. Momentan wird an der Entwurfsplanung gearbeitet. Aus
          diesem Grund können Kommentare zu diesem Abschnitt nur eingeschränkt
          berücksichtigt werden.
        </p>
        <div className="hidden lg:block">
          <Lightbox
            image={
              <StaticImage
                src="../assets/TS1Detailpkt2-Radroutennetz-LB.PNG"
                alt="Bestehendes Radroutennetz der Stadt Ludwigsburg. © Stadt Ludwigsburg"
              />
            }
          >
            Bestehendes Radroutennetz der Stadt Ludwigsburg. © Stadt
            Ludwigsburg
          </Lightbox>
        </div>
        <div className="lg:hidden">
          <ImageWithCaption
            image={
              <StaticImage
                src="../assets/TS1Detailpkt2-Radroutennetz-LB.PNG"
                alt="Bestehendes Radroutennetz der Stadt Ludwigsburg. © Stadt Ludwigsburg"
              />
            }
          >
            Bestehendes Radroutennetz der Stadt Ludwigsburg. © Stadt
            Ludwigsburg
          </ImageWithCaption>
        </div>
      </>
    ),
  },
  {
    id: 'neues-gruenquartier',
    no: 3,
    title: 'Neues Grünquartier',
    body: (
      <>
        <p>
          In der Oststadt wird die Friedrich-Ebert-Straße ab der Fasanenstraße
          bis zur Oststraße qualitativ zugunsten des Radverkehrs ausgebaut. Der
          bestehende, provisorisch umgestaltete Straßenraum wird in den
          Zielzustand umgebaut.
        </p>
        <p>
          Fußwege werden verbreitert. Neue Grünquartiere für die Verschattung
          der Wege sollen die bestehenden Grünstrukturen ergänzen.
        </p>
        <p>
          Der Kfz-Verkehr wird weiter im Einrichtungsverkehr geführt. Die
          Verkehrsführung soll so gestaltet sein, dass Durchgangsverkehr noch
          weiter reduziert wird.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS1Detailpkt3-Fahrrad_Gruenstreifen_Gruen_in_Stadt_STADT-LUDWIGSBURG.jpg"
              alt="Grünquartiere entlang der Wege erhöhen nicht nur die Aufenthaltsqualität, sie sind auch wichtig fürs Stadtklima.
          © Stadt Ludwigsburg"
            />
          }
        >
          Grünquartiere entlang der Wege erhöhen nicht nur die
          Aufenthaltsqualität, sie sind auch wichtig fürs Stadtklima. © Stadt
          Ludwigsburg
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'anbindung-fuchshof',
    title: 'Anbindung der Sportvereine & Fuchshof',
    no: 4,
    body: (
      <>
        <p>
          Im Sportpark Ost soll der Radschnellweg die heute bereits stark
          befahrene Hauptradroute in seiner Qualität steigern. Die Fußwege
          sollen ausgebaut und der Radweg verbreitert werden. In der Oststraße
          und im Grünen Ring zwischen Sportpark und Oßweil werden wichtige
          Hauptradrouten und Hauptwegeverbindungen angebunden.
        </p>
        <p>
          Die Herausforderung ist der Schutz der geschützten alten Baumbestände
          im Gebiet. Ziel ist eine möglichst{' '}
          <strong>
            attraktive Anbindung der Sportvereine und des neuen Wohngebiets
            Fuchshof
          </strong>{' '}
          an den RS 8.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS1Detailpkt4-AGFK_Sportplatz_05_MarcusGloger.jpg"
              alt="Die Anbindung beliebter Ziele – wie zum Beispiel Sportstätten – ist ein wichtiges Ziel eines Radschnellwegs.
          © AGFK-BW, Marcus Gloger"
            />
          }
        >
          Die Anbindung beliebter Ziele – wie zum Beispiel Sportstätten – ist
          ein wichtiges Ziel eines Radschnellwegs. © AGFK-BW, Marcus Gloger
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'anbindung-gewerbegebiet',
    no: 5,
    title: 'Anbindung von Wohn- und Gewerbegebieten',
    body: (
      <>
        <p>
          Zwischen Grünem Ring und Ostfriedhof wird noch eine
          Variantendiskussion geführt. Die{' '}
          <strong>genaue Linienführung ist nicht geklärt</strong>. Die Planung
          muss heute gut besuchte Fußwege stärken und zugleich die Kapazität für
          den Radverkehr ausbauen. Die heutigen sowie zukünftigen Wohn- und
          Gewerbegebiete sollen attraktiv angebunden werden.
        </p>
        <p>
          Am Ortsausgang bei der Schmidener/Neckargröninger Straße schließt der
          Ludwigsburger Abschnitt an den Folgeabschnitt an.
        </p>
      </>
    ),
  },
]
