import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export const LogoBar: React.FC = () => {
  return (
    <div className="z-[1] w-full py-4 px-2 shadow-sm sm:p-8">
      <span className="sr-only">Projektpartner:</span>
      <div className="flex gap-x-6 sm:gap-x-8">
        <StaticImage
          height={40}
          loading="eager"
          src="./assets/rems-murr-kreis-logo.jpg"
          alt="Rems-Ruhr-Kreis"
        />
        <img
          className="h-[40px] w-auto"
          src="/layout-logo-bar/landkreis-ludwigsburg-logo.svg"
          alt="Landkreis Ludwigsburg"
        />
        <img
          className="h-[40px] w-auto"
          src="/layout-logo-bar/ludwigsburg-logo.svg"
          alt="Ludwigsburg"
        />
        <img
          className="h-[40px] w-auto"
          src="/layout-logo-bar/stadt-waiblingen-logo.svg"
          alt="Stadt Waiblingen"
        />
        <img
          className="h-[40px] w-auto"
          src="/layout-logo-bar/remseck-logo.svg"
          alt="Remseck"
        />
      </div>
    </div>
  )
}
