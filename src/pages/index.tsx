import { PageProps } from 'gatsby'
import React from 'react'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { Layout } from '~/components/Layout'
import {
  PageHomeFacts,
  PageHomeFaqs,
  PageHomeFunding,
  PageHomeIntro,
  PageHomeLocation,
  PageHomeMilestones,
  PageHomePress,
  PageHomeQuotes,
} from '~/components/PageHome'

export const Head = () => (
  <MetaTags title="Radschnellweg 8 | Der neue Radschnellweg von Waiblingen nach Ludwigsburg" />
)

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <PageHomeIntro />
      <PageHomeQuotes />
      <PageHomeLocation />
      <PageHomeFacts />
      <PageHomeMilestones />
      <PageHomeFaqs />
      <PageHomePress />
      <PageHomeFunding />
    </Layout>
  )
}

export default IndexPage
