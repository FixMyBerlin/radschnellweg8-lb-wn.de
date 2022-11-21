import { Link } from 'gatsby'
import React from 'react'
import { Logo } from '.'

type Props = { isHome: boolean }

export const LogoHomeLink: React.FC<Props> = ({ isHome }) => {
  if (isHome) {
    return <Logo className="absolute" />
  }

  return (
    <Link to="/">
      <Logo className="absolute" />
    </Link>
  )
}
