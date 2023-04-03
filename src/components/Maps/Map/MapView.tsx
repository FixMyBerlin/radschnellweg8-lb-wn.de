import maplibregl, { LngLatLike } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import React from 'react'
import {
  FullscreenControl,
  Map as ReactMapGl,
  NavigationControl,
  PaddingOptions,
  useMap,
  ViewState,
} from 'react-map-gl'

export type MapViewProps = {
  config: Partial<Pick<ViewState, 'longitude' | 'latitude' | 'zoom'>> & {
    bounds?: LngLatLike[]
    zoomDiff?: number
  }
  hiddenLayerSearchterms?: string[]
  boundsPadding?: number | PaddingOptions
  minZoom?: number
  maxZoom?: number
  fullscreenOption?: boolean
}

const MAPLIBRE_MAP_STYLE =
  'https://api.maptiler.com/maps/b09268b1-91d0-42e2-9518-321a1a94738f/style.json?key=ECOoUBmpqklzSCASXxcu'

export const MapView: React.FC<MapViewProps> = ({
  config,
  hiddenLayerSearchterms,
  boundsPadding,
  minZoom,
  maxZoom,
  fullscreenOption = true,
}) => {
  const { mainMap } = useMap()

  const handleLoad = (event: any) => {
    if (hiddenLayerSearchterms) {
      const map = event.target
      const mapLayers = mainMap.getStyle().layers
      mapLayers
        .filter((l) => hiddenLayerSearchterms.includes(l.id))
        .map((l) => map.setLayoutProperty(l.id, 'visibility', 'none'))
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
      <NavigationControl position="bottom-right" showCompass={false} />
      {fullscreenOption && <FullscreenControl />}
    </ReactMapGl>
  )
}
