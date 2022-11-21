import classNames from 'classnames'
import React from 'react'
import { Footer } from './Footer'
import { LogoAndHeadline } from './LogoAndHeadline'
import { LogoBar } from './LogoBar'
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
      <LogoBar />
      <Navigation location={location} />
      <main className={classNames(className, 'z-0 flex-grow bg-white')}>
        <LogoAndHeadline isHome={isHome} />
        {children}
      </main>
      <Footer />
    </div>
  )
}
