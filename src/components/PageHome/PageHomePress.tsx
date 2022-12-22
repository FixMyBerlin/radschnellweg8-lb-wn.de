import React from 'react'
import { Section } from '../Layout'
import { LinkExternal } from '../Link'
import { H2 } from '../Text'

export const PageHomePress: React.FC = () => {
  return (
    <Section>
      <H2>Pressemitteilungen</H2>

      <ul className="space-y-1">
        <li className="flex">
          <strong className="mr-2 block min-w-[7rem] border-r">
            25.05.2020
          </strong>
          <LinkExternal href="https://www.landkreis-ludwigsburg.de/de/landratsamt-landkreis/aktuelles/pressemitteilungen/detail/nachhaltige-mobilitaet-zwischen-den-landkreisen/">
            Nachhaltige Mobilität zwischen den Landkreisen
          </LinkExternal>
        </li>
        <li className="flex">
          <strong className="mr-2 block min-w-[7rem] border-r">
            20.05.2020
          </strong>
          <LinkExternal href="https://www.rems-murr-kreis.de/landratsamt-und-politik/aktuelles?tx_hwnews_hwnews%5Baction%5D=show&tx_hwnews_hwnews%5Bcontroller%5D=Newsartikel&tx_hwnews_hwnews%5BnewsartikelId%5D=1321">
            Rückenwind für die Planung des Radschnellwegs zwischen Ludwigsburg
            und Waiblingen
          </LinkExternal>
        </li>
        <li className="flex">
          <strong className="mr-2 block min-w-[7rem] border-r">
            07.05.2019
          </strong>
          <LinkExternal href="https://www.rems-murr-kreis.de/bauen-umwelt-und-verkehr/aktuelles/?tx_hwnews_hwnews%5BnewsartikelId%5D=1043&tx_hwnews_hwnews%5BcurrentPage%5D=2&tx_hwnews_hwnews%5Baction%5D=show&tx_hwnews_hwnews%5Bcontroller%5D=Newsartikel">
            Grünes Licht für Radschnellverbindung im Rems-Murr-Kreis
          </LinkExternal>
        </li>
      </ul>
    </Section>
  )
}
