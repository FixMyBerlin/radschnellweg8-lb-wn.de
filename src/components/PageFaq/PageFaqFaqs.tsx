import React from 'react'
import { FAQ, FAQItem } from '../FAQ'
import { categoizedFaqs } from './categoizedFaqs.const'

export const PageFaqFaqs: React.FC = () => {
  return (
    <div className="mb-10 grid md:mb-32 md:grid-cols-2 md:gap-4">
      {Object.entries(categoizedFaqs).map(([categoryTitle, categoryFaqs]) => {
        return (
          <section className="mb-10">
            <h2 className="text-sky-700">{categoryTitle}</h2>
            <FAQ>
              {Object.entries(categoryFaqs).map(([faqTitle, faqBody]) => {
                return <FAQItem title={faqTitle}>{faqBody}</FAQItem>
              })}
            </FAQ>
          </section>
        )
      })}
    </div>
  )
}
