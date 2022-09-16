import React, { ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

export const A: React.FC<Props> = ({ className, href, children }) => {
  return (
    <a
      href={href}
      className={classNames(
        'text-rs8-pink underline hover:text-rs8-blue',
        className
      )}
    >
      {children}
    </a>
  )
}
