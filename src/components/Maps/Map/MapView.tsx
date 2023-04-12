import maplibregl, { LngLatLike } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import React, { useEffect, useState } from 'react'
import {
  FullscreenControl,
  Map as ReactMapGl,
  NavigationControl,
  PaddingOptions,
  ViewState,
} from 'react-map-gl'

export type MapViewProps = {
  config: Partial<Pick<ViewState, 'longitude' | 'latitude' | 'zoom'>> & {
    bounds?: LngLatLike[]
    zoomDiff?: number
  }
  additionalLayerSearchterms?: string[]
  boundsPadding?: number | PaddingOptions
  minZoom?: number
  maxZoom?: number
  fullscreenOption?: boolean
}

const MAPLIBRE_MAP_STYLE =
  'https://api.maptiler.com/maps/b09268b1-91d0-42e2-9518-321a1a94738f/style.json?key=ECOoUBmpqklzSCASXxcu'

export const MapView: React.FC<MapViewProps> = ({
  config,
  additionalLayerSearchterms,
  boundsPadding,
  minZoom,
  maxZoom,
  fullscreenOption = true,
}) => {
  const [isMediumScreen, setIsMediumScreen] = useState(false)
  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 768px)')
    function onMediaQueryChange({ matches }) {
      setIsMediumScreen(matches)
    }
    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)
    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])
  const handleLoad = (event: any) => {
    if (additionalLayerSearchterms) {
      const map = event.target
      const mapLayers = map.getStyle().layers
      mapLayers
        .filter((l) => additionalLayerSearchterms.includes(l.id))
        .map((l) => map.setLayoutProperty(l.id, 'visibility', 'visible'))
    }
  }

  return (
    <ReactMapGl
      id="mainMap"
      mapLib={maplibregl}
      mapStyle={MAPLIBRE_MAP_STYLE}
      initialViewState={{
        zoom: config.zoom,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        bounds: config.bounds,
        fitBoundsOptions: {
          padding: boundsPadding,
        },
      }}
      // maxBounds={bboxView as BBox2d} // TODO remove?
      onLoad={handleLoad}
      scrollZoom={false}
      {...({ minZoom } || {})}
      {...({ maxZoom } || {})}
    >
      {isMediumScreen && (
        <NavigationControl position="bottom-right" showCompass={false} />
      )}
      {fullscreenOption && isMediumScreen && <FullscreenControl />}
    </ReactMapGl>
  )
}
