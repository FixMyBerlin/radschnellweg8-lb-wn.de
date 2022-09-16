import React, { ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  className?: string
}

export const Button: React.FC<Props> = ({ className, children }) => {
  return (
    <button
      type="button"
      className={classNames(
        'rounded-full border border-rs8-pink px-6 py-3',
        className
      )}
    >
      {children}
    </button>
  )
}
