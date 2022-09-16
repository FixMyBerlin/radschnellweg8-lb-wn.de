import React, { ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  href: string
  className?: string
  target?: string
}

export const A: React.FC<Props> = ({ className, href, children, ...props }) => {
  return (
    <a
      href={href}
      className={classNames(
        'text-rs8-pink underline hover:text-rs8-blue',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
