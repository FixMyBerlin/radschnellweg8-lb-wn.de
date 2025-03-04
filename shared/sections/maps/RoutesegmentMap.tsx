import routesegmentDetailsGeoData from '@src/content/routeGeoData/uploadDetails.json'
import type { CollectionEntry } from 'astro:content'
import { Marker } from 'react-map-gl/maplibre'
import { RouteMap } from './RouteMap'

type Props = {
  routesegments: CollectionEntry<'routesegments'>[]
  segmentFocusSlug?: string
  routesegmentDetails: CollectionEntry<'routesegmentdetails'>[]
}
export const RoutesegmentMap = ({
  routesegments,
  segmentFocusSlug,
  routesegmentDetails,
}: Props) => {
  const routesegmentDetailMarkers = routesegmentDetails
    .map((detail) => {
      const matchingDetailGeo = routesegmentDetailsGeoData.features.find(
        (d) => d.properties.detailId === detail.data.detailId,
      )
      if (!matchingDetailGeo) return null
      return (
        <Marker
          key={matchingDetailGeo.properties.detailId}
          longitude={matchingDetailGeo.geometry.coordinates[0] as number}
          latitude={matchingDetailGeo.geometry.coordinates[1] as number}
          className="flex h-9 w-9 items-center justify-center rounded-full border bg-white shadow-lg"
        >
          <div className="text-base font-extrabold">{detail?.data.position}</div>
        </Marker>
      )
    })
    .filter(Boolean)

  const focusSegemntId = routesegments.find((s) => s.slug === segmentFocusSlug)?.data.tsSlug

  return (
    <RouteMap
      routesegments={routesegments}
      focusSegemntId={focusSegemntId}
      routesegmentDetailMarkers={routesegmentDetailMarkers}
    />
  )
}
