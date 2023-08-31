import React from 'react'

import { DisclosureList } from '../Disclosure/DisclosureList'
import { DisclosureListItem } from '../Disclosure/DisclosureListItem'
import { H2 } from '../Text'
import { categoizedFaqs } from './categoizedFaqs.const'
import { Section } from '../Layout'

export const PageFaqFaqs: React.FC = () => {
  return (
    <Section>
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
    </Section>
  )
}
