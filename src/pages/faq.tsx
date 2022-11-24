import { PageProps } from 'gatsby'
import React from 'react'
import { LayoutArticle } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageFaqFaqs, PageFaqIntro } from '~/components/PageFaq'
import { PageFaqOutro } from '~/components/PageFaq/PageFaqOutro'
import { H1 } from '~/components/Text'

export const Head = () => <MetaTags noindex title="Fragen und Antworten" />

const Faq: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <H1 showTopline>Fragen und Antworten</H1>
      <PageFaqIntro />
      <PageFaqFaqs />
      <PageFaqOutro />
    </LayoutArticle>
  )
}

export default Faq
