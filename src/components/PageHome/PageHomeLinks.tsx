import React from 'react'
import { Section } from '../Layout'
import { H2, LinkExternal } from '../Text'

export const PageHomeLinks: React.FC = () => {
  return (
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
  )
}
