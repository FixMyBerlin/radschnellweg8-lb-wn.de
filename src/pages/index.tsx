import { PageProps } from 'gatsby'
import React from 'react'
import { Layout } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
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
import { H1 } from '~/components/Text'

export const Head = () => <MetaTags />

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <H1>Radschnellverbindung zwischen Waiblingen und Ludwigsburg</H1>
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
