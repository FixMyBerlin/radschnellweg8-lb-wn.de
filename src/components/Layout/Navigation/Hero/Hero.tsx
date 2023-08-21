import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Link } from '~/components/Link'
import Pin from './assets/pin.svg'

type Props = {
  participation?: boolean
}

const Dot = () => (
  <span className="my-0.5 ml-[21px] h-2 w-2 rounded-full bg-white" />
)
export const Hero: React.FC<Props> = ({ participation }) => {
  return (
    <div className="relative h-[400px] w-full md:h-[500px]">
      <StaticImage
        className="h-full w-full object-cover"
        src="../../../../images/hero.jpg"
        alt="Vorschau YouTube Video 'Radschnellwege in Baden-Württemberg: direkt – schnell – sicher'"
      />
      <div className="absolute inset-0 flex w-full flex-col justify-center gap-3 bg-rs8-blue/50 font-bold text-white md:gap-6">
        <div className="flex flex-col gap-2">
          <span className="mx-auto bg-rs8-pink p-3 text-center text-[28px] md:text-[42px]">
            Der RS 8
          </span>
          <span className="mx-auto bg-rs8-pink p-2 text-center text-[20px] md:text-[32px] ">
            Ein neuer Radschnellweg
          </span>
        </div>

        {participation ? (
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 text-center text-[20px] md:text-[32px] md:leading-10">
              Bürgerbeteiligung abgeschlossen
            </div>
            <Link
              button
              className="z-20 rounded-lg bg-rs8-pink text-sm font-normal text-white"
              to="/beteiligung"
            >
              Zu den Ergebnissen
            </Link>
          </div>
        ) : (
          <div className="mx-auto flex flex-col items-start">
            <div className="flex flex-row items-center gap-6">
              <Pin width={50} />
              <p className="text-[20px] md:text-[32px]">Ludwigsburg</p>
            </div>
            <Dot />
            <Dot />
            <Dot />
            <div className="flex flex-row items-center gap-6">
              <Pin width={50} />
              <p className="text-[20px] md:text-[32px]">Waiblingen</p>
            </div>
          </div>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-1 px-2">
        <p className="text-[0.85rem] italic leading-5 text-white/60">
          Beispieldarstellung eines Radschnellwegs © Ministerium für Verkehr
          Baden-Württemberg
        </p>
      </div>
    </div>
  )
}
