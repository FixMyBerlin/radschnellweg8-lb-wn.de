import React from 'react'
import { PageProps } from 'gatsby'
import { LayoutArticle } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageFaqFaqs, PageFaqIntro } from '~/components/PageFaq'
import { PageFaqOutro } from '~/components/PageFaq/PageFaqOutro'
import { HeadingContentPage } from '~/components/Text'

export const Head = () => <MetaTags title="Fragen und Antworten" />

const Faq: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <HeadingContentPage>Fragen und Antworten</HeadingContentPage>
      <PageFaqIntro />
      <PageFaqFaqs />
      <PageFaqOutro />
    </LayoutArticle>
  )
}

export default Faq
