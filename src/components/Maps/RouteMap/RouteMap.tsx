import classnames from 'classnames'
import React from 'react'
import { MapProvider } from 'react-map-gl'
import { MapView } from '../Map/MapView'

type Props = {
  highlightedSection?: 'section1' | 'section2' | 'section3' | 'section4'
  classNames?: string
}

const BOUNDS_RS8 = [
  { lng: 9.186006331491996, lat: 48.89261079776588 },
  { lng: 9.301575114730184, lat: 48.82680138712914 },
]

const highlightedLayerIds = [
  'RS8--section1',
  'RS8--section2',
  'RS8--section2-luecke',
  'RS8--section3',
  'RS8--section4',
]

const sectionBoundsArray = {
  section1: [
    { lng: 9.186006331491996, lat: 48.89261079776588 },
    { lng: 9.214265823211292, lat: 48.891391659741885 },
  ],
  section2: [
    { lng: 9.214265823211292, lat: 48.891391659741885 },
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
  highlightedSection,
  classNames,
}) => {
  const configBounds = highlightedSection
    ? sectionBoundsArray[highlightedSection]
    : BOUNDS_RS8

  let hiddenLayerSearchterms: string[]
  // filter layer ids of highlighting section layers to get an array of layer ids which should be hidden
  if (highlightedSection) {
    hiddenLayerSearchterms = highlightedLayerIds.filter(
      (section) => !section.includes(highlightedSection)
    )
  } else {
    // add ids of pink dot layers to the array of hidden layers in case no section is highlighted
    hiddenLayerSearchterms = [
      'RS8--streckeninfosRS8',
      'RS8--streckeninfosRS8-txt',
    ].concat(highlightedLayerIds)
  }

  return (
    <div
      className={classnames(
        classNames,
        'relative h-[350px] w-full sm:h-[680px] '
      )}
    >
      <MapProvider>
        <MapView
          config={{
            bounds: configBounds,
          }}
          hiddenLayerSearchterms={hiddenLayerSearchterms}
          boundsPadding={80}
        />
      </MapProvider>
    </div>
  )
}
