import { LINKCLASSES } from '@config/styles'
import { clsx } from 'clsx'
import React from 'react'

type Props = {
  href: string
  classes?: string
  /** @default `false` */
  blank?: boolean
  /** @desc Style Link as Button */
  button?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({ href, classes, children, blank = false, button, ...props }: Props) => {
  return (
    <a
      href={href}
      {...props}
      className={clsx(button ? LINKCLASSES.button : LINKCLASSES.link, classes)}
      {...{ target: blank ? '_blank' : undefined }}
    >
      {children}
    </a>
  )
}
