import React from 'react'

import { DisclosureList } from '../Disclosure/DisclosureList'
import { DisclosureListItem } from '../Disclosure/DisclosureListItem'
import { H2 } from '../Text'
import { categoizedFaqs } from './categoizedFaqs.const'

export const PageFaqFaqs: React.FC = () => {
  return (
    <div className="mb-10 md:mb-36">
      {Object.entries(categoizedFaqs).map(([categoryTitle, categoryFaqs]) => {
        return (
          <section className="m-auto mb-24">
            <H2>{categoryTitle}</H2>
            <DisclosureList>
              {Object.entries(categoryFaqs).map(([faqTitle, faqBody]) => {
                return (
                  <DisclosureListItem title={faqTitle}>
                    {faqBody}
                  </DisclosureListItem>
                )
              })}
            </DisclosureList>
          </section>
        )
      })}
    </div>
  )
}
