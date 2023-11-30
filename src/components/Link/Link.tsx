import React from 'react'
import classNames from 'classnames'
import { Link as GatsbyLink } from 'gatsby'

const baseStyles = 'text-rs8-pink hover:text-rs8-blue'
export const linkStyles = `${baseStyles} underline`
export const buttonStyles = `${baseStyles} rounded-lg bg-rs8-pink active:ring active:bg-rs8-pink active:ring-[#1E293B] text-white hover:text-white hover:bg-[#1E293B] px-6 pt-4 pb-3 font-normal inline-block`

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
  button,
  ...props
}) => {
  return (
    <GatsbyLink
      to={to}
      className={classNames(button ? buttonStyles : linkStyles, className)}
      {...{ target: blank ? '_blank' : undefined }}
      {...props}
    >
      {children}
    </GatsbyLink>
  )
}
