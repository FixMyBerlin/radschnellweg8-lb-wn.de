import React, { ReactNode } from 'react'
import classNames from 'classnames'
import { Section } from '../Layout'

type Props = {
  className?: string
  children: ReactNode
}

// Designed to be positioned right next to the <LogoHomeLink>
export const HeadingContentPage: React.FC<Props> = ({
  className,
  children,
}) => {
  return (
    <Section className="mt-8 pt-4 w-full md:mt-5">
      <p className="mb-4 mt-0 text-neutral-400">
        Radschnellweg zwischen Ludwigsburg und Waiblingen
      </p>
      <h1
        className={classNames(
          'mb-10 text-4xl font-extrabold md:text-6xl md:leading-snug leading-snug',
          className,
        )}
      >
        {children}
      </h1>
    </Section>
  )
}
