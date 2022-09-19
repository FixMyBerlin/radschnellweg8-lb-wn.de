import classNames from 'classnames'
import React from 'react'
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
      <Navigation location={location} />
      <main className={classNames(className, 'z-0 flex-grow bg-white')}>
        <LogoAndHeadline />
        {children}
      </main>
      <Footer />
    </div>
  )
}
