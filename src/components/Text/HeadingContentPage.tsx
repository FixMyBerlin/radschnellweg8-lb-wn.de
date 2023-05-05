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
    <Section className="mt-8 w-full md:mt-5">
      <p className="mt-0 mb-4 text-neutral-400">
        Radschnellweg zwischen Ludwigsburg und Waiblingen
      </p>
      <h1
        className={classNames(
          'font-serif mb-10 text-[60px] font-extrabold lg:leading-[66px]',
          className
        )}
      >
        {children}
      </h1>
    </Section>
  )
}
