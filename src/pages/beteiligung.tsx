import { PageProps } from 'gatsby'
import React from 'react'

import { FundingFooter } from '~/components/Funding'
import { ImageSlide } from '~/components/Images'
import { Layout, Section } from '~/components/Layout'
import { Link, LinkMail, LinkExternal, buttonStyles } from '~/components/Link'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { BarChart } from '~/components/PageHome/BarChart'
import { surveyResultDataCharts } from '~/components/PageHome/data/survey-result-data'
import { H2, HeadingContentPage, P } from '~/components/Text'

export const Head = () => (
  <MetaTags title="RS 8: Auswertung der Bürgerbeteiligung" />
)

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HeadingContentPage>Auswertung der Bürgerbeteiligung</HeadingContentPage>
      <Section>
        <P>Die Beteiligung zum RS 8 fand vom 20.06. bis 20.08.2023 statt</P>
        <H2>
          Was wurde in der Beteiligung gemeldet und wie ist der aktuelle Stand?
        </H2>
        <P>
          Vom 20.06. bis 20.08.2023 konnten Bürgerinnen und Bürger in einer
          Online-Beteiligung Meinungen, Hinweise und Anregungen zur Planung des
          Radschnellweges von Ludwigsburg nach Waiblingen geben. Dabei wurden
          482 Teilnahmen an der Umfrage und in vielen Beiträgen konkrete Fragen,
          Hinweise und Wünsche gesammelt. Die Hinweise betreffen unter anderem
          die Linienführung, den Betrieb (z. B. Grünschnitt, Winterdienst,
          Beleuchtung etc.) sowie die Bereiche Landwirtschaft und Umwelt. Bei
          den allgemeineren Hinweisen ging es vor allem um die künftige Nutzung
          des Radschnellweges sowie favorisierte Führungsarten, aber auch um die
          weitere Ausstattung, z. B. ob Reparatursäulen oder Rastplätze
          gewünscht werden.
          <br />
          Die Rückmeldungen aus der Bürgerbeteiligung wurden den jeweiligen
          Baulastträgern zugeordnet und gemeinsam mit den Planungsbüros geprüft.
          Es sind einige Hinweise zu den verschiedenen Streckenvarianten
          eingegangen. Die unterschiedlichen Varianten wurden bereits im Voraus
          geprüft. Ob eine Variante weiter ausgeplant werden kann, ist von
          vielen Faktoren abhängig. So spielen zum Beispiel Naturschutzgebiete,
          Konflikte mit anderen Interessensträgern aber auch das Thema von
          möglichem Grunderwerb eine erhebliche Rolle. Auch wenn manchmal eine
          Variante auf den ersten Blick die logischere zu sein scheint, kann
          sich die Umsetzung am Ende doch als schwieriger gestalten.
          <br />
          Die weiteren Hinweise und Anregungen zu den allgemeineren Themen
          wurden in den <Link to="/faq">FAQs</Link> aufbereitet und beantwortet.
          Schauen Sie gerne mal rein. <br />
          Das Stimmungsbild aus der Umfrage wurde ebenfalls ausgewertet und
          aufbereitet und steht nachfolgend zur Verfügung. <br />
          Sollten Sie noch weitere Anmerkungen haben oder Informationen
          benötigen, melden Sie sich gerne unter{' '}
          <LinkMail>info@radschnellweg8-lb-wn.de</LinkMail>. Derzeit befinden
          sich alle Bauabschnitte noch in der Planungsphase. Ansonsten werden
          wir auch weiterhin auf dieser Website über den aktuellen
          Umsetzungsstand der Radschnellverbindung 8 zwischen Ludwigsburg und
          Waiblingen berichten.
        </P>
        <ImageSlide />
      </Section>

      <Section>
        <H2>Ergebnisse der Umfrage (482 Teilnahmen)</H2>
        <div className="space-y-4">
          {surveyResultDataCharts.map((r) => (
            <div key={r.questionLabel} className="border rounded pt-2 pb-3.5">
              <P className="border-b pb-2 px-3.5 font-bold">
                {r.questionLabel}
              </P>
              <div className="h-[350px] px-3.5">
                <BarChart data={r.data} />
              </div>
            </div>
          ))}
        </div>
        <H2>Rohdaten der Beteiligung herunterladen</H2>
        <P>
          Daten stehen als Open Data unter der{' '}
          <LinkExternal href="https://opendatacommons.org/licenses/odbl/">
            ODbL
          </LinkExternal>{' '}
          Lizenz zur weiteren Auswertung zur Verfügung.
        </P>
        <a
          href="/survey-results.xlsx"
          download={`Export-RS8-Beteiligungsergebnisse-${new Date().toLocaleDateString(
            'de-DE',
          )}.xlsx`}
          className={buttonStyles}
        >
          XLSX herunterladen
        </a>
      </Section>

      <Section className="mb-40">
        <H2>Beantwortung der Hinweise</H2>
        <P>
          In der Onlinebeteiligung, sowie bei den Ortsbegehungen wurden in Summe
          über 500 inhaltliche Hinweise aufgenommen. Alle diese Hinweise sind
          derzeit in Bearbeitung. Die Antworten dazu werden bis spätestens Ende
          des Jahres hier veröffentlicht.
        </P>
      </Section>
      <FundingFooter />
    </Layout>
  )
}

export default IndexPage