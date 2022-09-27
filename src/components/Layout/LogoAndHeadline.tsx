import { Link } from 'gatsby'
import React from 'react'
import { Logo, Section } from '.'

type Props = { isHome: boolean }

export const LogoAndHeadline: React.FC<Props> = ({ isHome }) => {
  return (
    <>
      {isHome ? (
        <Logo className="absolute" />
      ) : (
        <Link to="/">
          <Logo className="absolute" />
        </Link>
      )}

      <Section className="mt-5 pl-[40px] sm:mt-12 sm:pl-[140px] lg:pl-[180px] xl:pl-0">
        <h1 className="font-serif mb-10 text-xl font-extrabold lg:text-[60px] lg:leading-[66px]">
          Radschnellverbindung zwischen Waiblingen und Ludwigsburg
        </h1>
      </Section>
    </>
  )
}
