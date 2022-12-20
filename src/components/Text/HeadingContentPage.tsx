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
    <Section className="mt-5 w-full sm:mt-32 lg:pl-0">
      <p className="mt-0 mb-4 text-neutral-400">
        Radschnellverbindung zwischen Waiblingen und Ludwigsburg
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
