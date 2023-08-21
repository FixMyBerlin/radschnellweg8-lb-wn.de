import { PageProps } from 'gatsby'
import React from 'react'

import { FundingFooter } from '~/components/Funding'
import { ImageSlide } from '~/components/Images'
import { Layout, Section } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageBeteiligungFacts } from '~/components/PageBeteiligung/PageBeteiligungFacts'
import { BarChart } from '~/components/PageHome/BarChart'
import { surveyResultData } from '~/components/PageHome/data/survey-result-data'
import { H1, H2, P } from '~/components/Text'

export const Head = () => (
  <MetaTags title="RS 8: Auswertung der Bürgerbeteiligung" />
)

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <H1>Auswertung der Bürgerbeteiligung</H1>
      <Section>
        <P>Die Beteiligung zum RS8 fand vom 20.06 bis 20.08.2023 statt</P>
        <H2 className="leading-snug">
          Was wurde in der Beteiligung gemeldet und wie geht es jetzt weiter?
        </H2>
        <P>
          Vom 20.06. bis 20.08.2023 konnten Bürgerinnen und Bürger in einer
          Online-Beteiligung Meinungen, Hinweise und Anregungen zur Planung des
          Radschnellweges von Ludwigsburg nach Waiblingen geben. Dabei wurden
          über 450 Teilnahmen an der Umfrage und in vielen Beiträgen konkrete
          Fragen, Hinweise und Wünsche gesammelt. Die Hinweise betreffen unter
          anderem die Linienführung, den Betrieb (z.B. Grünschnitt,
          Winterdienst, Beleuchtung etc.) sowie die Bereiche Landwirtschaft und
          Umwelt. Bei den allgemeineren Hinweisen ging es vor allem um die
          künftige Nutzung des Radschnellweges sowie favorisierte Führungsarten,
          aber auch um die weitere Ausstattung, z.B. ob Reparatursäulen oder
          Rastplätze gewünscht werden. <br />
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

      <PageBeteiligungFacts />

      <Section>
        <H2>Ergebnisse der Umfrage</H2>
        <div className="space-y-4">
          {surveyResultData.map((r) => (
            <div className="border rounded pt-2 pb-3.5">
              <P className="border-b pb-2 px-3.5 font-bold">
                {r.questionLabel}
              </P>
              <div className="h-[350px] px-3.5">
                <BarChart data={r.data} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="mb-40">
        <H2>Beantwortung der Hinweise</H2>
        <P>
          In der Onlinebeteiligung, sowie bei den Ortsbegehungen wurden in Summe
          über 500 Hinweise aufgenommen. Alle Beiträge sind derzeit in
          Bearbeitung, alle Antworten werden bis spätestens Ende des Jahres hier
          veröffentlicht.
        </P>
      </Section>
      <FundingFooter />
    </Layout>
  )
}

export default IndexPage
