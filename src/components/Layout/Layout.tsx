import classNames from 'classnames'
import React from 'react'
import { ScrollTopLink } from './ScrollTopLink'
import { Footer } from './Footer'
import { LogoHomeLink } from './LogoHomeLink'
import { Navigation } from './Navigation'
import { Hero } from './Navigation/Hero/Hero'

type Props = {
  className?: string
  location?: any // TODO: define type
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ className, location, children }) => {
  const isHome = location.pathname === '/'
  const isBeteiligung = location.pathname === '/route/'
  // TODO Update pathname /beteiligung/

  return (
    <div className="flex h-full flex-col text-[#1e293b]">
      <Navigation location={location} />
      <ScrollTopLink />
      <main className={classNames(className, 'z-0 flex-grow bg-white')}>
        {isBeteiligung && <Hero ctaSection={isBeteiligung} />}
        {isHome && <Hero />}
        <LogoHomeLink isHome={isHome} />
        {children}
      </main>
      <Footer />
    </div>
  )
}
