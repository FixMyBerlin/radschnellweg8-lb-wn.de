import classnames from 'classnames'
import React from 'react'
import { MapProvider } from 'react-map-gl/maplibre'
import { MapView } from '../Map/MapView'

type Props = {
  sectionNumbers?: boolean
  highlightedSection?: 'section1' | 'section2' | 'section3' | 'section4'
  classNames?: string
}

const BOUNDS_RS8 = [
  { lng: 9.186006331491996, lat: 48.89261079776588 },
  { lng: 9.301575114730184, lat: 48.82680138712914 },
]

const highlightedLayerIds = [
  'RS8--section1',
  'RS8--section1-luecke',
  'RS8--section2',
  'RS8--section3',
  'RS8--section4',
]
const sectionNumbersLayerIds = [
  'RS8--teilstreckenNR',
  'RS8--TeilstreckenNR-txt',
]
// Gesamtstrecke (gelb) plus Lücke
const rs8TotalRouteIds = ['RS8--allsections-luecke-copy', 'RS8--allsections']

// pink dot layers
const infoDotLayerNames = ['RS8--streckeninfosRS8', 'RS8--streckeninfosRS8-txt']

const sectionBoundsArray = {
  section1: [
    { lng: 9.186006331491996, lat: 48.89261079776588 },
    { lng: 9.237561916956338, lat: 48.88941931435252 },
  ],
  section2: [
    { lng: 9.237561916956338, lat: 48.88941931435252 },
    { lng: 9.28576686072293, lat: 48.86324942609738 },
  ],
  section3: [
    { lng: 9.28576686072293, lat: 48.86324942609738 },
    { lng: 9.304886871888897, lat: 48.835607490396626 },
  ],
  section4: [
    { lng: 9.304886871888897, lat: 48.835607490396626 },
    { lng: 9.301575114730184, lat: 48.82680138712914 },
  ],
}

export const RouteMap: React.FC<Props> = ({
  sectionNumbers = false,
  highlightedSection,
  classNames,
}) => {
  const configBounds = highlightedSection
    ? sectionBoundsArray[highlightedSection]
    : BOUNDS_RS8

  // default: rs8 Gesamtstrecke layers
  let additionalLayerSearchterms = rs8TotalRouteIds
  // filter layer ids of highlighting section layers to get an array of layer ids which should be hidden
  if (highlightedSection) {
    additionalLayerSearchterms = additionalLayerSearchterms
      .concat(
        highlightedLayerIds.filter((section) =>
          section.includes(highlightedSection),
        ),
      )
      // concat pink dot layers
      .concat(infoDotLayerNames)
  }
  if (sectionNumbers) {
    // concat section / "Teilstrecken" dots and names
    additionalLayerSearchterms = additionalLayerSearchterms.concat(
      sectionNumbersLayerIds,
    )
  }

  return (
    <div
      className={classnames(
        classNames,
        'relative h-[350px] w-full sm:h-[680px] ',
      )}
    >
      <MapProvider>
        <MapView
          config={{
            bounds: configBounds,
          }}
          additionalLayerSearchterms={additionalLayerSearchterms}
          boundsPadding={80}
        />
      </MapProvider>
    </div>
  )
}
