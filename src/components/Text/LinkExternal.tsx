import React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
  blank?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkExternal: React.FC<Props> = ({
  className,
  children,
  blank = true,
  ...props
}) => {
  return (
    <a
      className={classNames(
        'text-rs8-pink underline hover:text-rs8-blue',
        className
      )}
      rel="noopener noreferrer"
      {...{ target: blank ? '_blank' : undefined }}
      {...props}
    >
      {children}
    </a>
  )
}
