import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { Section } from '../Layout'

type Props = {
  children: ReactNode
  className?: string
}

// Designed to be positioned right next to the <LogoHomeLink>
export const H1: React.FC<Props & { showTopline?: boolean }> = ({
  className,
  showTopline = false,
  children,
}) => {
  return (
    <Section className="mt-16 w-full">
      {showTopline && (
        <p className="mb-4 mt-0 text-neutral-400">
          Radschnellweg zwischen Ludwigsburg und Waiblingen
        </p>
      )}
      <h1
        className={classNames(
          'font-serif mb-10 text-xl font-extrabold lg:text-[60px] lg:leading-[66px]',
          className
        )}
      >
        {children}
      </h1>
    </Section>
  )
}

export const H2: React.FC<Props> = ({ className, children }) => {
  return (
    <h2
      className={classNames(
        'font-serif text-dark-gray lg:leading-40 mb-10 mt-16 text-lg font-extrabold  lg:text-[36px]',
        className
      )}
    >
      {children}
    </h2>
  )
}
