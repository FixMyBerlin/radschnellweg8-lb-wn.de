import { PageProps } from 'gatsby'
import React from 'react'
import { Layout } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageFaqFaqs, PageFaqIntro } from '~/components/PageFaq'
import { PageFaqOutro } from '~/components/PageFaq/PageFaqOutro'
import { HeadingContentPage } from '~/components/Text'

export const Head = () => <MetaTags title="Fragen und Antworten" />

const Faq: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HeadingContentPage>Fragen und Antworten</HeadingContentPage>
      <PageFaqIntro />
      <PageFaqFaqs />
      <PageFaqOutro />
    </Layout>
  )
}

export default Faq
