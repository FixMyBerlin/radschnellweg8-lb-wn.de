import classNames from 'classnames'
import React from 'react'
import RsvLogo from '~/images/rsv8-logo.png'

export const Logo: React.VFC<{
  className?: string
}> = ({ className }) => {
  return (
    <img
      className={classNames('h-12 w-auto', className)}
      src={RsvLogo}
      alt="Radschnellweg 8 Logo"
    />
  )
}
