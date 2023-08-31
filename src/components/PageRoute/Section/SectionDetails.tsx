import React from 'react'

import { DisclosureList } from '~/components/Disclosure/DisclosureList'
import { DisclosureListItem } from '~/components/Disclosure/DisclosureListItem'
import { H3, P } from '~/components/Text'
import { TSectionDetails } from '../data.const/types'

type Props = {
  details: TSectionDetails[]
}

export const SectionDetails: React.FC<Props> = ({ details }) => {
  return (
    <div>
      <H3>Detailinfos</H3>
      <DisclosureList>
        {details.map((detail) => {
          return (
            <DisclosureListItem
              key={detail.no}
              no={detail.no}
              title={detail.title}
            >
              <P>{detail.body}</P>
            </DisclosureListItem>
          )
        })}
      </DisclosureList>
    </div>
  )
}
