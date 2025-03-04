import { along, length, lineString } from '@turf/turf'
import type { CollectionEntry } from 'astro:content'
import clsx from 'clsx'
import type { FeatureCollection } from 'geojson'
import { useState } from 'react'
import { Marker } from 'react-map-gl/maplibre'
import routesegmentFeatures from 'src/content/routeGeoData/uploadSegements.json'
import { BaseMap } from './BaseMap'
import { TipMarker } from './TipMarker'
import { getLinePaintRouteMap, routeSegmentStatus } from './statusDefinition'

type Props = {
  routesegments: CollectionEntry<'routesegments'>[]
  focusSegemntId?: string
  routesegmentDetailMarkers?: React.ReactNode[]
}

export const RouteMap = ({ routesegments, focusSegemntId, routesegmentDetailMarkers }: Props) => {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null)

  const markers = routesegmentFeatures.features.map((segment) => {
    const midLine = lineString(segment.geometry.coordinates)
    const midLengthHalf = length(midLine) / 2
    const midPoint = along(midLine, midLengthHalf)
    const matchingSegment = routesegments.find(
      (s) => s.data.tsSlug === segment.properties.subsectionSlug,
    )
    const markerContent = (
      <div className="flex gap-2 p-1">
        {segment.properties.status && (
          <div
            className={clsx(
              'flex h-6 w-6 items-center justify-center rounded-full',
              (focusSegemntId && focusSegemntId === segment.properties.subsectionSlug) ||
                !focusSegemntId
                ? routeSegmentStatus[segment.properties.status].colorClass
                : 'bg-gray-400',
            )}
          >
            <img
              src={routeSegmentStatus[segment.properties.status].icon.src}
              alt=""
              className="h-5 w-5"
            />
          </div>
        )}
        {segment.properties.subsectionSlug === selectedSegment && (
          <div className="text-xs">
            <p>{matchingSegment?.data.title}</p>
            {segment.properties.estimatedCompletionDateString && (
              <p className="font-light">
                Fertig: {segment.properties.estimatedCompletionDateString.split('-')[1]}
              </p>
            )}
            <p className="font-light">TS Slug {segment.properties.subsectionSlug}</p>
          </div>
        )}
      </div>
    )

    return (
      <Marker
        key={segment.properties.subsectionSlug}
        longitude={midPoint.geometry.coordinates[0] as number}
        latitude={midPoint.geometry.coordinates[1] as number}
        anchor="center"
        style={{ zIndex: segment.properties.subsectionSlug === selectedSegment ? 3 : 'unset' }}
      >
        <TipMarker
          anchor={matchingSegment?.data.markerPositionBottom ? 'bottom' : 'top'}
          onMouseEnter={() => setSelectedSegment(segment.properties.subsectionSlug)}
          onMouseLeave={() => setSelectedSegment(null)}
        >
          {focusSegemntId && focusSegemntId === segment.properties.subsectionSlug ? (
            markerContent
          ) : (
            <a href={`/route/${matchingSegment?.slug}`}>{markerContent}</a>
          )}
        </TipMarker>
      </Marker>
    )
  })

  const handleRouteClick = (id: string) => {
    const matchingSegment = routesegments.find((s) => s.data.tsSlug === id)
    // in case a segment is focused (Routesegmentmap) the focused segment should not be clickable
    if ((window && !focusSegemntId) || focusSegemntId !== id)
      window.location.href = `/route/${matchingSegment?.slug}`
  }

  return (
    <div className="relative mt-12 mb-24 h-[500px] w-full">
      <BaseMap
        setSelected={setSelectedSegment}
        markers={routesegmentDetailMarkers ? [...markers, ...routesegmentDetailMarkers] : markers}
        geometries={routesegmentFeatures as FeatureCollection}
        focusSegment={focusSegemntId}
        handleRouteClick={handleRouteClick}
        linePaint={getLinePaintRouteMap(focusSegemntId)}
      />
      <div className="grid w-full grid-cols-3 gap-3 bg-gray-200 p-2 sm:grid-cols-4 md:grid-cols-5">
        {Object.entries(routeSegmentStatus).map(([status, { colorClass, icon, label }]) => (
          <div key={status} className="flex items-center gap-2 pl-4">
            <div
              className={clsx('flex h-6 w-6 items-center justify-center rounded-full', colorClass)}
            >
              <img src={icon.src} alt="" className="h-5 w-5" />
            </div>
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
