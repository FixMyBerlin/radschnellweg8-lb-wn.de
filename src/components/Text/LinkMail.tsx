import React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
  mailto?: string
  blank?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkMail: React.FC<Props> = ({
  className,
  mailto,
  children,
  ...props
}) => {
  return (
    <a
      href={`mailto:${mailto || children}`}
      className={classNames(
        'text-rs8-pink underline hover:text-rs8-blue',
        className
      )}
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}
