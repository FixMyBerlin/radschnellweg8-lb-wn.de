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
  PageHomePress,
  PageHomeQuotes,
} from '~/components/PageHome'
import { Button, H2, P } from '~/components/Text'

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

      <Section>
        <H2>Informiert bleiben</H2>
        <P>
          Tragen Sie sich gerne in unseren kostenlosen Newsletter ein und wir
          informieren Sie rechtzeitig, sobald es Neuigkeiten gibt und die
          Online-Beteiligung zur Radschnellverbindung startet. Sie können den
          Newsletter jederzeit ganz einfach kündigen.
        </P>

        <Button className="mt-4">Newsletter abonnieren</Button>
      </Section>
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
