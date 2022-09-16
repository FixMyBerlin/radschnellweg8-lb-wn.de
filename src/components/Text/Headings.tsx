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
        'font-serif mb-10 text-xl font-extrabold lg:text-[60px] lg:leading-[66px]',
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
        'font-serif text-dark-gray lg:leading-40 mt-16 mb-10 text-lg font-extrabold  lg:text-[36px]',
        className
      )}
    >
      {children}
    </h2>
  )
}
