import classNames from 'classnames'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { LogoAndHeadline } from './LogoAndHeadline'
import { Footer } from './Footer'
// import { Footer } from './Footer'
import { Navigation } from './Navigation'

type Props = {
  className?: string
  location?: any // TODO: define type
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({
  className = '',
  location = '',
  children,
}) => {
  return (
    <div className="flex h-full flex-col text-[#1e293b]">
      <div className="z-[1] w-full py-4 px-2 shadow-sm sm:p-8">
        <span className="sr-only">Projektpartner:</span>
        <div className="flex gap-x-6 sm:gap-x-8">
          {[
            <StaticImage
              height={40}
              loading="eager"
              src="../../images/rems-murr-kreis-logo.jpg"
              alt="Rems-Ruhr-Kreis"
            />,
            <StaticImage
              height={40}
              loading="eager"
              src="../../images/landkreis-ludwigsburg-logo.jpg"
              alt="Landkreis Ludwigsburg"
            />,
            <StaticImage
              height={40}
              loading="eager"
              src="../../images/ludwigsburg-logo.png"
              alt="Ludwigsburg"
            />,
            <StaticImage
              height={40}
              loading="eager"
              src="../../images/stadt-waiblingen-logo.png"
              alt="Stadt Waiblingen"
            />,
            <StaticImage
              height={40}
              loading="eager"
              src="../../images/remseck-logo.jpg"
              alt="Remseck"
            />,
          ]}
        </div>
      </div>
      <Navigation location={location} />
      <main className={classNames(className, 'z-0 flex-grow bg-white')}>
        <LogoAndHeadline />
        {children}
      </main>
      <Footer />
    </div>
  )
}
