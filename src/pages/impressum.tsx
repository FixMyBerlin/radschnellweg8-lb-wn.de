import { PageProps } from 'gatsby'
import React from 'react'
import { HelmetSeo } from '~/components/HelmetSeo/HelmetSeo'
import { LayoutArticle, Section } from '~/components/Layout'

import { LinkExternal, LinkMail } from '~/components/Text'

const Impressum: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <HelmetSeo noindex title="404 | Seite nicht gefunden." />

      <Section>
        <h1>Impressum</h1>
        <h2>Im Auftrag folgender Städte und Landkreise</h2>
        <p>
          Stadtverwaltung Ludwigsburg Fachbereich Nachhaltige Mobilität
          <br />
          Wilhelmstraße 5 <br />
          71638 Ludwigsburg <br />
          <LinkMail>mobilität@ludwigsburg.de</LinkMail>
        </p>
        <p>
          Landratsamt Kreis Ludwigsburg Fachbereich Straßen <br />
          Hindenburgstraße 40 <br />
          70638 Ludwigsburg <br />
          <LinkMail>radverkehr@landkreis-ludwigsburg.de</LinkMail>
        </p>
        <p>
          Stadtverwaltung Remseck Fachbereich Städtische Infrastruktur
          <br />
          Marktplatz 1 <br />
          71686 Remseck am Neckar <br />
          <LinkMail>a.abel@remseck.de</LinkMail>
        </p>
        <p>
          Landratsamt Rems-Murr-Kreis Stabstelle Radwege <br />
          Stuttgarter Straße 110 <br />
          71332 Waiblingen <br />
          <LinkMail>radwege@rems-murr-kreis.de</LinkMail>
        </p>
        <p>
          Stadtverwaltung Waiblingen Fachbereich Stadtplanung <br />
          Kurze Straße 24 <br />
          71332 Waiblingen <br />
          <LinkMail>susanne.keil@waiblingen.de</LinkMail>
        </p>
        <h2>Verantwortlich für technische Umsetzung</h2>
        <p>
          FixMyCity GmbH <br />
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
          und
          <LinkExternal href="https://www.linkedin.com/company/fixmycity">
            LinkedIn
          </LinkExternal>
        </p>
        <h2>Feedback & Impressum</h2>
        <p>
          Fragen zum RS8 können Sie gerne an{' '}
          <LinkMail>Radverkehr@landkreis-ludwigsburg.de</LinkMail>
          senden. Wenn Sie sich als Bürger:innen gerne beteiligen wollen, können
          Sie dies unter diesem Link tun (in Arbeit).
        </p>
        <p>
          Wir freuen uns über Kommentare Anregungen und Unterstützung zur
          Website an <LinkMail>feedback@fixmycity.de</LinkMail>
        </p>
        <p>
          Sofern du Bugs oder Verbesserungsvorschläge hast, gib uns gerne{' '}
          <LinkExternal href="https://github.com/FixMyBerlin/fixmy.rsv/issues/new/choose">
            auf GitHub Feedback
          </LinkExternal>
          .
        </p>
        <h2>Urheberrechte Fotos</h2>
        Wenn nicht anders angegeben, stehen die auf dieser Website verwendeten
        Fotos unter{' '}
        <LinkExternal href="https://creativecommons.org/licenses/by-nc/4.0/deed.de">
          Creative Commons-Lizenz BY-NC 4.0
        </LinkExternal>
        .
      </Section>
    </LayoutArticle>
  )
}

export default Impressum
