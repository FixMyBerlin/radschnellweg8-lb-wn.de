import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from '~/components/Link'
import Pin from './assets/pin.svg'
import PinkBanner from './assets/pink-banner.svg'

type Props = {
  ctaSection?: boolean
}

const Dot = () => <span className="my-1 ml-5 h-2 w-2 rounded-full bg-white" />
export const Hero: React.FC<Props> = ({ ctaSection }) => {
  return (
    <div className="relative h-[600px] w-full">
      <StaticImage
        className="h-full w-full object-cover"
        src="../../../../images/hero.jpg"
        alt="Vorschau YouTube Video 'Radschnellwege in Baden-Württemberg: direkt – schnell – sicher'"
      />
      <div className="absolute inset-0 z-20 -ml-1 hidden md:block">
        <PinkBanner height={600} />
      </div>
      <div className="absolute inset-0 flex w-full flex-col justify-evenly bg-rs8-blue/50 font-bold text-white">
        <div className="flex flex-col gap-2">
          <span className="mx-auto bg-rs8-pink p-4 text-center text-[28px] md:text-[42px]">
            Der RS8.
          </span>
          <span className="mx-auto bg-rs8-pink p-4 text-center text-[20px] md:text-[32px] ">
            Eine neue Radschnellverbinung
          </span>
        </div>
        <div className="mx-auto flex flex-col items-start">
          <div className="flex flex-row items-center gap-6">
            <Pin width={50} />
            <p className="text-[20px] md:text-[32px]">Waiblingen</p>
          </div>
          <Dot />
          <Dot />
          <Dot />
          <div className="flex flex-row items-center gap-6">
            <Pin width={50} />
            <p className="text-[20px] md:text-[32px]">Ludwigsburg</p>
          </div>
        </div>

        {ctaSection && (
          <div className="flex flex-col items-center gap-2">
            <div className="mx-autop-4 text-center text-[20px] md:text-[32px] md:leading-10">
              Ihre Meinung ist gefragt: <br /> Bürgerbeteiligung bis 23.05.2023
            </div>
            <Link
              button
              className="z-20 rounded-lg bg-rs8-pink text-sm font-normal text-white"
              to="https://trassenscout.de/rs-8/beteiligung"
            >
              Jetzt mitmachen
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
