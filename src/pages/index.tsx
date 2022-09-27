import { PageProps } from 'gatsby'
import React from 'react'
import { HelmetSeo } from '~/components/HelmetSeo/HelmetSeo'
import { Layout } from '~/components/Layout'
import {
  PageHomeAboutVideo,
  PageHomeFacts,
  PageHomeFaqs,
  PageHomeFunding,
  PageHomeIntro,
  PageHomeLocation,
  PageHomeMilestones,
  PageHomePress,
  PageHomeQuotes,
} from '~/components/PageHome'

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo title="Radschnellweg 8 | Der neue Radschnellweg von Waiblingen nach Ludwigsburg" />

      <PageHomeIntro />
      <PageHomeQuotes />
      <PageHomeLocation />
      <PageHomeFacts />
      <PageHomeMilestones />
      <PageHomeAboutVideo />
      <PageHomeFaqs />
      <PageHomePress />
      <PageHomeFunding />
    </Layout>
  )
}

export default IndexPage
