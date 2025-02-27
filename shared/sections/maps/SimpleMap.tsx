import { COLORSCLASSES } from '@config/styles'
import { Section } from '@shared/layouts/Section'
import clsx from 'clsx'
import type { FeatureCollection } from 'geojson'
import routesegmentFeatures from 'src/content/routeGeoData/uploadSegements.json'
import { BaseMap } from './BaseMap'
import { linePaintSimpleMap } from './statusDefinition'
type Props = {
  label: string
}
export const SimpleMap = ({ label }: Props) => {
  return (
    <Section className="mb-20">
      <div className="relative h-[500px] w-full">
        <BaseMap
          linePaint={linePaintSimpleMap}
          geometries={routesegmentFeatures as FeatureCollection}
        />
        <div className="flex w-full items-center gap-4 bg-gray-200 p-2 pl-6">
          <div className={clsx('h-1 w-7', COLORSCLASSES.legendSimpleMap)} />
          {label}
        </div>
      </div>
    </Section>
  )
}
