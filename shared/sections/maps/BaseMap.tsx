import { MAPTILER_STYLE, MAXZOOM, MINZOOM } from '@config/map.ts'
import * as turf from '@turf/turf'
import type { FeatureCollection } from 'geojson'
import 'maplibre-gl/dist/maplibre-gl.css'
import React, { useState } from 'react'
import type { LngLatBoundsLike, MapLayerMouseEvent } from 'react-map-gl/maplibre'
import {
  AttributionControl,
  Layer,
  Map,
  MapProvider,
  NavigationControl,
  Source,
} from 'react-map-gl/maplibre'
import { useScreenHorizontal } from './useScreenHorizontal'

type Props = {
  geometries: FeatureCollection
  markers?: React.ReactNode[]
  setSelected?: any
  focusSegment?: string
  handleRouteClick?: any
  linePaint: any
}

export const BaseMap = ({
  geometries,
  markers,
  setSelected,
  focusSegment,
  handleRouteClick,
  linePaint,
}: Props) => {
  const [isScreenHorizontal] = useScreenHorizontal()
  const [cursorStyle, setCursorStyle] = useState('grab')

  const bbox = turf.bbox(
    focusSegment && geometries.features.find((f) => f.properties?.subsectionSlug === focusSegment)
      ? turf.featureCollection([
          // @ts-expect-error we check for focusSegment above
          geometries.features.find((f) => f.properties.subsectionSlug === focusSegment),
        ])
      : geometries,
  )
  const initialMapViewCustom: { bounds: LngLatBoundsLike } = {
    bounds: [
      [bbox[0], bbox[1]],
      [bbox[2], bbox[3]],
    ],
  }

  const selectableLineFeaturesSource = (
    <Source id="layer_selectable_features" type="geojson" data={geometries}>
      <Layer
        id="layer_selectable_features--lines"
        type="line"
        paint={linePaint}
        filter={['==', '$type', 'LineString']}
      />
    </Source>
  )

  const handleMouseMove = (e: MapLayerMouseEvent) => {
    const id = e.features?.at(0)?.properties['subsectionSlug']
    if (id) setSelected(id)
  }

  const handleMapClick = (e: MapLayerMouseEvent) => {
    const id = e.features?.at(0)?.properties['subsectionSlug']
    if (id && handleRouteClick) handleRouteClick(id)
  }

  return (
    <MapProvider>
      <Map
        id="mainMap"
        initialViewState={{
          ...initialMapViewCustom,
          fitBoundsOptions: {
            padding: { right: 100, left: 100, top: 100, bottom: 100 },
          },
        }}
        // maxBounds={MAX_BOUNDS}
        minZoom={MINZOOM}
        maxZoom={MAXZOOM}
        mapStyle={MAPTILER_STYLE}
        style={{ width: '100%', height: '100%' }}
        onMouseMove={handleMouseMove}
        onClick={handleMapClick}
        // Cursor
        cursor={cursorStyle}
        onMouseEnter={() => {
          // Only change cursor if we have a route click handler (not for the SimpleMap)
          if (handleRouteClick) setCursorStyle('pointer')
        }}
        onMouseLeave={() => setCursorStyle('grab')}
        // Some defaults
        attributionControl={false}
        dragRotate={false}
        scrollZoom={isScreenHorizontal}
        // @ts-expect-error: See https://github.com/visgl/react-map-gl/issues/2310
        RTLTextPlugin={null}
        interactiveLayerIds={['layer_selectable_features--lines']}
      >
        {selectableLineFeaturesSource}
        {markers && markers}
        <AttributionControl compact={true} position="bottom-left" />
        <NavigationControl
          showCompass={false}
          position={isScreenHorizontal ? 'top-left' : 'top-right'}
        />
      </Map>
    </MapProvider>
  )
}
