import { PageProps } from 'gatsby'
import React from 'react'
import { AnchorLink } from '~/components/AnchorLink'
import { LayoutArticle } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageFaqFaqs, PageFaqIntro } from '~/components/PageFaq'
import { PageFaqOutro } from '~/components/PageFaq/PageFaqOutro'
import { HeadingContentPage } from '~/components/Text'

export const Head = () => <MetaTags title="Fragen und Antworten" />

const Faq: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <AnchorLink path="/faq" />
      <HeadingContentPage>Fragen und Antworten</HeadingContentPage>
      <PageFaqIntro />
      <PageFaqFaqs />
      <PageFaqOutro />
    </LayoutArticle>
  )
}

export default Faq
