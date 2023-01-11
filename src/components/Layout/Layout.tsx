import React from 'react'
import classNames from 'classnames'
import { ScrollTopLink } from './ScrollTopLink'
import { Footer } from './Footer'
import { LogoHomeLink } from './LogoHomeLink'
import { Navigation } from './Navigation'

type Props = {
  className?: string
  location?: any // TODO: define type
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ className, location, children }) => {
  const isHome = location.pathname === '/'

  return (
    <div className="flex h-full flex-col text-[#1e293b]">
      <Navigation location={location} />
      <ScrollTopLink />
      <main className={classNames(className, 'z-0 flex-grow bg-white')}>
        <LogoHomeLink isHome={isHome} />
        {children}
      </main>
      <Footer />
    </div>
  )
}
