import { PageProps } from 'gatsby'
import React from 'react'
import { LayoutArticle, Section } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { HeadingContentPage } from '~/components/Text'
import { LinkExternal, LinkMail } from '~/components/Link'

export const Head = () => <MetaTags noindex title="Impressum & Kontakt" />

const Impressum: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <Section>
        <HeadingContentPage>Impressum & Kontakt</HeadingContentPage>
        <h2>Im Auftrag folgender Städte und Landkreise</h2>
        <p>
          <strong>Stadtverwaltung Ludwigsburg</strong>
          <br />
          Fachbereich Nachhaltige Mobilität
          <br />
          Wilhelmstraße 5 <br />
          71638 Ludwigsburg <br />
          <LinkMail>mobilität@ludwigsburg.de</LinkMail>
        </p>
        <p>
          <strong>Landratsamt Kreis Ludwigsburg</strong> <br />
          Fachbereich Straßen <br />
          Hindenburgstraße 40 <br />
          70638 Ludwigsburg <br />
          <LinkMail>radverkehr@landkreis-ludwigsburg.de</LinkMail>
        </p>
        <p>
          <strong>Stadtverwaltung Remseck</strong> <br />
          Fachbereich Städtische Infrastruktur
          <br />
          Marktplatz 1 <br />
          71686 Remseck am Neckar <br />
          <LinkMail>a.abel@remseck.de</LinkMail>
        </p>
        <p>
          <strong>Landratsamt Rems-Murr-Kreis</strong> <br />
          Stabstelle Radwege <br />
          Stuttgarter Straße 110 <br />
          71332 Waiblingen <br />
          <LinkMail>radwege@rems-murr-kreis.de</LinkMail>
        </p>
        <p>
          <strong>Stadtverwaltung Waiblingen</strong> <br />
          Abteilung Verkehrsmanagement und nachhaltige Mobilität <br />
          Kurze Straße 24 <br />
          71332 Waiblingen <br />
          <LinkMail>mobilitaet@waiblingen.de</LinkMail>
        </p>
        <h2>Verantwortlich für technische Umsetzung</h2>
        <p>
          <strong>FixMyCity GmbH</strong> <br />
          Karlsgartenstraße 12 <br />
          12049 Berlin <br />
          <LinkMail>hello@fixmycity.de</LinkMail> <br />
          Telefon: 030 / 549 08 665
        </p>
        <p>
          Du findest uns auch auf{' '}
          <LinkExternal href="https://twitter.com/fixmyberlin">
            Twitter
          </LinkExternal>{' '}
          und{' '}
          <LinkExternal href="https://www.linkedin.com/company/fixmycity">
            LinkedIn
          </LinkExternal>
        </p>
        <h2>Feedback</h2>
        <p>
          Fragen zum RS 8 können Sie gerne an{' '}
          <LinkMail>info@radschnellweg8-lb-wn.de</LinkMail> senden. Wenn Sie
          sich als Bürger:innen gerne beteiligen wollen, können Sie dies unter
          diesem Link tun (in Arbeit).
        </p>
        <p>
          Wir freuen uns über Kommentare, Anregungen und Unterstützung zur
          Website an <LinkMail>feedback@fixmycity.de</LinkMail>.
        </p>
        <p>
          Sofern Sie Bugs oder Verbesserungsvorschläge haben, geben Sie uns
          gerne{' '}
          <LinkExternal href="https://github.com/FixMyBerlin/radschnellweg8-lb-wn.de">
            Feedback auf GitHub
          </LinkExternal>
          .
        </p>
        <h2>Urheberrechte Fotos</h2>
        Wenn nicht anders angegeben, stehen die auf dieser Website verwendeten
        Fotos unter{' '}
        <LinkExternal href="https://creativecommons.org/licenses/by-nc/4.0">
          Creative Commons-Lizenz BY-NC 4.0
        </LinkExternal>
        .
      </Section>
    </LayoutArticle>
  )
}

export default Impressum
