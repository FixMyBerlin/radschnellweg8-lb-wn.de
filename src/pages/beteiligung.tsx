import { PageProps } from 'gatsby'
import React from 'react'
import { FundingFooter } from '~/components/Funding'
import { Layout } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageBeteiligungFaq } from '~/components/PageBeteiligung'
import { PageBeteiligungIntro } from '~/components/PageBeteiligung/PageBeteiligungIntro'
import { H1 } from '~/components/Text'

export const Head = () => <MetaTags />

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <H1>Ihre Meinung ist gefragt</H1>
      <PageBeteiligungIntro />
      <PageBeteiligungFaq />
      <FundingFooter />
    </Layout>
  )
}

export default IndexPage
