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
          'mb-10 text-4xl font-extrabold md:text-6xl md:leading-normal leading-normal',
          className,
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
        'text-dark-gray mb-10 mt-16 text-2xl font-extrabold md:leading-normal md:text-3xl leading-normal',
        className,
      )}
    >
      {children}
    </h2>
  )
}
export const H3: React.FC<Props> = ({ className, children }) => {
  return (
    <h3
      className={classNames(
        'text-dark-gray mb-5 mt-8 text-lg font-semibold md:text-xl leading-normal md:leading-normal',
        className,
      )}
    >
      {children}
    </h3>
  )
}
