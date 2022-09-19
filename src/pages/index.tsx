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
  PageHomeLocation,
  PageHomeMilestones,
  PageHomeQuotes,
} from '~/components/PageHome'
import { Button, H2, LinkExternal, P } from '~/components/Text'

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

      <Section>
        <H2>Links</H2>

        <ul>
          <li>
            <LinkExternal href="https://www.rems-murr-kreis.de/fileadmin/Dateien/Bilder/3.39002_Stabsstelle_Radwege/191029_Abschlussbericht_MBS_RSV_Ludwigsburg_Waiblingen.pdf">
              Machbarkeitsstudie Hauptdokument
            </LinkExternal>
          </li>
          <li>
            <LinkExternal href="https://www.rems-murr-kreis.de/fileadmin/Dateien/Bilder/3.39002_Stabsstelle_Radwege/191029_Anlage_1_und_2_MBS_RSV_Ludwigsburg_Waiblingen.pdf">
              Machbarkeitsstudie Anlagen 1+2
            </LinkExternal>
          </li>
          <li>
            <LinkExternal href="https://www.rems-murr-kreis.de/fileadmin/Dateien/Bilder/3.39002_Stabsstelle_Radwege/191029_Anlage_3_und_4_MBS_RSV_Ludwigsburg_Waiblingen.pdf">
              Machbarkeitsstudie Anlagen 3+4
            </LinkExternal>
          </li>
        </ul>
      </Section>
      <Section>
        <H2>Pressemitteilungen</H2>

        <ul>
          <li>
            <strong>7.5.2019 | </strong>
            <LinkExternal href="https://www.rems-murr-kreis.de/bauen-umwelt-und-verkehr/aktuelles/?tx_hwnews_hwnews%5BnewsartikelId%5D=1043&tx_hwnews_hwnews%5BcurrentPage%5D=2&tx_hwnews_hwnews%5Baction%5D=show&tx_hwnews_hwnews%5Bcontroller%5D=Newsartikel&cHash=2eb7bb05a868847505a7b59090e3f7dc">
              Grünes Licht für Radschnellverbindung im Rems-Murr-Kreis:
              Rems-Murr-Kreis
            </LinkExternal>
          </li>
          <li>
            <strong>25.05.2020 | </strong>
            <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/landratsamt-landkreis/aktuelles/pressemitteilungen/detail/nachhaltige-mobilitaet-zwischen-den-landkreisen/">
              Nachhaltige Mobilität zwischen den Landkreisen - Landratsamt
              Ludwigsburg
            </LinkExternal>
          </li>
        </ul>
      </Section>

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
