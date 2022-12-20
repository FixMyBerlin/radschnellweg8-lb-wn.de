import React from 'react'
import { TSectionDetails } from '../data.const/types'
import { SectionDetailsItem } from './SectionDetailsItem'

type Props = {
  details: TSectionDetails[]
}

export const SectionDetails: React.FC<Props> = ({ details }) => {
  return (
    <div className="m-auto mb-20 space-y-6 divide-y divide-white border-y bg-gray-200 px-6 pb-6 md:-mx-10 md:px-10">
      <h3 className="mt-14 mb-8 text-center text-[32px] font-bold text-sky-700">
        Detailinfos
      </h3>
      {details.map((detail, index) => {
        return <SectionDetailsItem detail={detail} mapNumber={index + 1} />
      })}
    </div>
  )
}
