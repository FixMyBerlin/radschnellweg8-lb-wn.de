import { PageProps } from 'gatsby'
import React from 'react'

import { FundingFooter } from '~/components/Funding'
import { ImageSlide } from '~/components/Images'
import { Layout, Section } from '~/components/Layout'
import { buttonStyles } from '~/components/Link'
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
          Was wurde in der Beteiligung gemeldet und wie geht es jetzt weiter?
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
          gewünscht werden. <br />
          Alle Rückmeldungen werden nun im nächsten Schritt geprüft und
          ausgewertet und, wenn möglich, in die bestehenden Planungen
          eingearbeitet. Es werden zu den einzelnen Themenfeldern häufige Fragen
          abgeleitet und Antworten entworfen, damit die eingegangenen Hinweise
          repräsentativ beantwortet werden können. Auch das Stimmungsbild aus
          der Umfrage wird ausgewertet und aufbereitet zur Verfügung gestellt.
          Die Auswertung und Aufbereitung ist bis Ende des Jahres 2023 geplant.
          Die Ergebnisse werden dann auf dieser Website veröffentlicht.
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
          <a href="https://opendatacommons.org/licenses/odbl/">ODbL</a> Lizenz
          zur weiteren Auswertung zur Verfügung.
        </P>
        <a
          href="/survey-results-2024-04-11.xlsx"
          download="Export-RS8-Beteiligungsergebnisse-2024-04-11.xlsx"
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
