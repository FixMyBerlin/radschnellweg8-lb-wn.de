import React, { ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  className?: string
}

export const H1: React.FC<Props> = ({ className, children }) => {
  return (
    <h1
      className={classNames(
        'font-serif mb-10 text-[60px] font-extrabold leading-[66px]',
        className
      )}
    >
      {children}
    </h1>
  )
}

export const H2: React.FC<Props> = ({ className, children }) => {
  return (
    <h2
      className={classNames(
        'font-serif text-dark-gray leading-40 mt-16 mb-10 text-[36px] font-extrabold',
        className
      )}
    >
      {children}
    </h2>
  )
}
