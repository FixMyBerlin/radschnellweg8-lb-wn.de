import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { ImageWithCaption } from '../ImageWIthCaption'
import { TSectionDetails } from './types'

export const section3Details: TSectionDetails[] = [
  {
    id: 'fuehrung-durch-hegnach',
    title: 'Führung durch Hegnach',
    body: (
      <>
        <p>
          Im Bereich des Waiblinger Teilortes Hegnach hat die Stadtverwaltung
          Waiblingen zusammen mit dem Landratsamt Rems-Murr-Kreis und dem
          planenden Ingenieurbüro BIT aus Öhringen im Vorfeld zahlreiche
          Varianten (Bild 1) untersucht, bewertet und gegeneinander abgewogen.
        </p>
        <p>
          <strong>
            Gemeinsam mit dem Ortschaftsrat von Hegnach und dem Gemeinderat der
            Stadt Waiblingen
          </strong>{' '}
          hat man sich auf eine Vorzugstrasse (Bild 2) über den südwestlichen
          Teil von Hegnach geeinigt.
        </p>
        <p>
          Eine Führung durch das nördliche Wohngebiet von Hegnach hätte eine
          hohe Anzahl an Kreuzungspunkten, eine anspruchsvolle Topografie sowie
          eine indirekte und umwegige Führung bedeutet, die sowohl
          Problemstellen für Radfahrende als auch eine Einschränkung für
          Gewerbetreibende (z. B. eingeschränkte Möglichkeit fürs Rangieren,
          Verluste von Kfz-Parkplätzen) zur Folge hätte. Gegen die direkte
          Führung der Radschnellverbindung über die Neckarstraße (L 1142)
          spricht, dass dort aufgrund der historisch engen Ortsdurchfahrt nicht
          überall die geforderten Mindeststandards für einen Radschnellweg
          untergebracht werden können.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS3Detailpkt1.1-Hegnach-Varianten_LRA-RMK.PNG"
              alt=""
            />
          }
        >
          Aus den Vorplanungs-Unterlagen: Varianten Ortsdurchfahrt Hegnach. ©
          BIT-Ingenieure / Landratsamt Rems-Murr-Kreis
        </ImageWithCaption>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS3Detailpkt1.2-Hegnach-Vorzugstrasse_LRA-RMK.PNG"
              alt=""
            />
          }
        >
          Aus den Vorplanungs-Unterlagen: Vorzugstrasse durch Hegnach nach
          Variantenprüfung. © BIT-Ingenieure / Landratsamt Rems-Murr-Kreis
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'kreuzungsfreie-fuehrung',
    title: 'Kreuzungsfreie und vom Kfz-Verkehr getrennte Führung',
    body: (
      <>
        <p>
          Im ersten Abschnitt sieht der aktuelle Stand der Vorplanung eine
          Führung des Radschnellwegs östlich der Landesstraße L 1142 im
          Außerortsbereich vor. Durch den Ausbau des straßenparallelen Weges
          soll die Neuversiegelung von Flächen begrenzt werden.
        </p>
        <p>
          Für die Weiterführung durch den südwestlichen Ortsteil von Hegnach
          wird die L 1142 auf Höhe der östlich beginnenden Bebauung von Hegnach
          durch ein neues Ingenieurbauwerk unterquert. Dadurch soll eine{' '}
          <strong>kreuzungsfreie und vom Kfz-Verkehr getrennte Führung</strong>{' '}
          gewährleistet werden.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS3Detailpkt2-Radwegeunterfuehrung_Leutkirch_VM-BW.jpg"
              alt=""
            />
          }
        >
          Beispiel für eine Radwegunterführung, diese hier ist in
          Leutkirch-Haselburg © Verkehrsministerium Baden-Württemberg
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'neubau-am-suedlichen-ortsrand',
    title: 'Neubau am südlichen Ortsrand von Hegnach',
    body: (
      <>
        <p>
          Im Anschluss verläuft die Streckenführung entlang des Lärmschutzwalls
          auf einem größtenteils bestehenden Weg, welcher aufgrund der geringen
          Flächenverfügbarkeit nur auf 4 Meter ausgebaut werden kann. Eine
          getrennte Führung des Fuß- und Radverkehrs ist hierbei nicht möglich.
          Wer entspannt spazieren gehen möchte, findet aber alternative Wege.
        </p>
        <p>
          Nach der Querung der Oeffinger Straße soll der Radschnellweg über
          einen <strong>Neubau am südlichen Ortsrand von Hegnach</strong>{' '}
          geführt werden. Der anschließende Anschluss an die L 1142 wird nach
          aktuellem Planungsstand über einen 4 Meter breiten Abschnitt
          sichergestellt, den die Radfahrenden dann ganz für sich hätten, hier
          soll kein Fußverkehr entlangführen.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS3Detailpkt3-Vorhandener-Weg-Waiblingen_LRA-RMK.png"
              alt=""
            />
          }
        >
          Bestandsweg am Lärmschutzwall der Landesstraße L 1142 © Landratsamt
          Rems-Murr-Kreis
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'planfreie-querungsmöglichkeit',
    title: 'Planfreie Querungsmöglichkeit',
    body: (
      <>
        <p>
          Der dritte Bauabschnitt verläuft östlich der L 1142 in Richtung
          Waiblingen. Er soll auf Bestandswegen über die Kleingärtenanlagen
          führen, die ausgebaut werden – so lässt sich vermeiden, dass allzu
          viel neue Flächen versiegelt werden müssen. Für die Querung der
          Landesstraße ist aktuell eine kurz- bis mittelfristige Lösung über die
          bestehende Querungshilfe eingeplant. Langfristig ist eine sogenannte{' '}
          <strong>planfreie Querungsmöglichkeit</strong> geplant, also eine
          Über- oder Unterquerung, auf der Radfahrende, ohne anzuhalten, bequem
          und konfliktfrei auf die andere Seite gelangen. Dort müsste der
          parallel zur Bahnstraße verlaufende Bestandsweg ausgebaut werden (4 m
          Radweg + 2 m Gehweg). Dieser Weg verläuft dann bis zum Übergabepunkt
          an die Stadt Waiblingen an der Schmidener Straße.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS3Detailpkt4-sbp-TRUMPF_Bruecke_Ditzingen.jpg"
              alt=""
            />
          }
        >
          Beispiel für ein mögliches Brückenbauwerk über eine Straße, hier der
          Fußgängersteg bei TRUMPF in Ditzingen. © sbp/Andreas Schnubel
        </ImageWithCaption>
      </>
    ),
  },
]
