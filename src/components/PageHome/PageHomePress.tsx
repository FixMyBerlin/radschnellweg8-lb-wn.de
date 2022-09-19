import React from 'react'
import { Section } from '../Layout'
import { H2, LinkExternal } from '../Text'

export const PageHomePress: React.FC = () => {
  return (
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
  )
}
