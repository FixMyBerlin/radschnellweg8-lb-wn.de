import React from 'react'
import { FAQ, FAQItem } from '../FAQ'
import { categoizedFaqs } from '../PageFaq/categoizedFaqs.const'

export const PageRouteItems: React.FC = () => {
  return (
    <div className="mb-10 grid md:mb-32 md:-ml-10 md:-mr-10 md:grid-cols-2 md:gap-4 lg:-ml-48 lg:-mr-48">
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
