import React from 'react'
import classNames from 'classnames'
import { Link as GatsbyLink } from 'gatsby'

type Props = {
  to: string
  className?: string
  /** @desc Default: `false` */
  blank?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Link: React.FC<Props> = ({
  to,
  className,
  children,
  blank = false,
  ...props
}) => {
  return (
    <GatsbyLink
      to={to}
      className={classNames(
        'text-rs8-pink underline hover:text-rs8-blue',
        className
      )}
      {...{ target: blank ? '_blank' : undefined }}
      {...props}
    >
      {children}
    </GatsbyLink>
  )
}
