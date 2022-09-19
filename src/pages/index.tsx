import { PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { HelmetSeo } from '~/components/HelmetSeo'
import { Layout, Section } from '~/components/Layout'
import {
  PageHomeAboutVideo,
  PageHomeFacts,
  PageHomeFaqs,
  PageHomeIntro,
  PageHomeLinks,
  PageHomeLocation,
  PageHomeMilestones,
  PageHomeNewsletter,
  PageHomePress,
  PageHomeQuotes,
} from '~/components/PageHome'
import { H2 } from '~/components/Text'

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
      <PageHomeLinks />
      <PageHomePress />
      <PageHomeNewsletter />

      <Section className="pb-12">
        <H2 className="mt-[150px] text-center !text-base !font-normal text-[#959595]">
          Gefördert durch:
        </H2>

        <ul className="gap-24 sm:columns-3">
          {[
            <StaticImage
              src="../images/bw-radschnellweg-logo.jpg"
              alt="RadKULTUR Baden-Württemberg; RadSCHNELLWEG"
            />,
            <StaticImage
              src="../images/bmdv-foerderung-logo.png"
              alt="Bundesministerium für Digitales und Verkehr; aufgrund eines Beschlusses des Deutschen Bundestages"
            />,
            <StaticImage
              src="../images/vm-bw-foerderung-logo.png"
              alt="Ministerium für Verkehr Baden-Württemberg"
            />,
          ].map((img) => (
            <li key={img.props.src} className="m-auto mb-10 w-3/5 sm:w-full">
              {img}
            </li>
          ))}
        </ul>
      </Section>
    </Layout>
  )
}

export default IndexPage
