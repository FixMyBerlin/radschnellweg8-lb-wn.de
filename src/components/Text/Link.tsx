import React from 'react'
import classNames from 'classnames'
import { Link as GatsbyLink } from 'gatsby'

type Props = {
  to: string
  className?: string
  /** @default `false` */
  blank?: boolean
  /** @desc Style Link as Button */
  button?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Link: React.FC<Props> = ({
  to,
  className,
  children,
  blank = false,
  button = false,
  ...props
}) => {
  return (
    <GatsbyLink
      to={to}
      className={classNames(
        'text-rs8-pink hover:text-rs8-blue',
        { 'rounded-full border border-rs8-pink px-6 pt-4 pb-3': button },
        { underline: !button },
        className
      )}
      {...{ target: blank ? '_blank' : undefined }}
      {...props}
    >
      {children}
    </GatsbyLink>
  )
}
