import { PageProps } from 'gatsby'
import React from 'react'
import { FundingFooter } from '~/components/Funding'
import { Layout } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import {
  PageHomeFacts,
  PageHomeFaqs,
  PageHomeIntro,
  PageHomeLocation,
  PageHomeMilestones,
  PageHomePress,
  PageHomeQuotes,
} from '~/components/PageHome'
import { H1 } from '~/components/Text'

export const Head = () => <MetaTags />

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <H1>Radschnellweg zwischen Ludwigsburg und Waiblingen</H1>
      <PageHomeIntro />
      <PageHomeQuotes />
      <PageHomeLocation />
      <PageHomeFacts />
      <PageHomeMilestones />
      <PageHomeFaqs />
      <PageHomePress />
      <FundingFooter />
    </Layout>
  )
}

export default IndexPage
