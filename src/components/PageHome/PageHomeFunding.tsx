import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Section } from '../Layout'
import { H2 } from '../Text'
import RadschnellwegeLogo from '../../images/bw-radschnellweg-logo.svg'
import BmdvFoerderungLogo from '../../images/bmdv-foerderung-logo.svg'

export const PageHomeFunding: React.FC = () => {
  return (
    <Section className="pb-12">
      <H2 className="mt-[150px] mb-5 text-center !text-base !font-normal text-[#959595]">
        Gefördert durch:
      </H2>

      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-20">
        <RadschnellwegeLogo
          title="RadKULTUR Baden-Württemberg; RadSCHNELLWEG"
          className="w-32 lg:w-[70%]"
        />
        <BmdvFoerderungLogo
          title="Bundesministerium für Digitales und Verkehr; aufgrund eines Beschlusses des Deutschen Bundestages"
          className="w-40 lg:w-full"
        />
        <StaticImage
          src="../../images/vm-bw-foerderung-logo.png"
          alt="Ministerium für Verkehr Baden-Württemberg"
          className="w-40 lg:w-full"
        />
      </div>
    </Section>
  )
}
