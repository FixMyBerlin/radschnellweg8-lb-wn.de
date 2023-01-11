import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { ImageWithCaption } from '../ImageWIthCaption'
import { TSectionDetails } from './types'

export const section4Details: TSectionDetails[] = [
  {
    id: 'fahrradbruecke',
    title: 'Fahrradbrücke parallel zur Bahnlinie',
    body: (
      <>
        <p>
          Eines der wichtigsten Merkmale eines Radschnellweg ist die
          kreuzungsarme Führung. Daher ist für den Radschnellweg zur Überquerung
          der Schmidener Straße mit einer{' '}
          <strong>Fahrradbrücke parallel zur Bahnlinie</strong> eine neue
          Überführung vorgesehen. Dadurch können Radfahrende an dieser Stelle
          zügig und sicher vorankommen.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS4Detailpkt1-sbp-TRUMPF_Bruecke_Ditzingen.jpg"
              alt=""
            />
          }
        >
          Beispiel für ein mögliches Brückenbauwerk über eine Straße, hier der
          Fußgängersteg bei Trumpf in Ditzingen. © sbp/Andreas Schnubel
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'Ausbau-bestehender-wirtschaftsweg',
    title: 'Ausbau bestehender Wirtschaftsweg',
    body: (
      <p>
        Ab der Überführung der Schmidener Straße soll der Radschnellweg westlich
        und parallel der Bahnlinie (entlang der Kleingärten) bis zum Knotenpunkt
        Dammstraße/Fronackerstraße/Westtangente verlaufen. Hierfür würde der{' '}
        <strong>bestehende Wirtschaftsweg auf eine Breite von 4 m</strong>{' '}
        ausgebaut.
      </p>
    ),
  },
  {
    id: 'abstimmungen-mit-der-deutschen-bahn',
    title: 'Abstimmungen mit der Deutschen Bahn',
    body: (
      <>
        <p>
          Am Knotenpunkt Dammstraße/Fronackerstraße/Westtangente wechselt der
          Radschnellweg nach aktuellem Planungsstand unter dem bestehenden
          Brückenbauwerk auf die östliche Bahnseite. Hierfür sind ggf.
          gesonderte <strong>Abstimmungen mit der Deutschen Bahn</strong> und
          zugehörige Genehmigungsprozesse erforderlich, um den bestehenden
          Radweg im Bereich der Bahnbrücke aufweiten zu können.
        </p>
        <ImageWithCaption
          image={
            <StaticImage
              src="../assets/TS4Detailpkt3-Bahnunterfuehrung_Dammstr_STADT-WAIBLINGEN.png"
              alt=""
            />
          }
        >
          So sieht die Stelle aktuell aus. © Stadt Waiblingen
        </ImageWithCaption>
      </>
    ),
  },
  {
    id: 'ausbau-zum-radschnellweg',
    title: 'Ausbau zum Radschnellweg',
    body: (
      <p>
        Im letzten Abschnitt bis zum Bahnhof Waiblingen müsste die
        Radinfrastruktur des genannten Knotenpunktes angepasst und der östlich
        der Bahnlinie verlaufende Radweg auf der Dammstraße auf eine Breite von
        4 m erweitert und damit <strong>zum Radschnellweg ausgebaut</strong>{' '}
        werden.
      </p>
    ),
  },
]
