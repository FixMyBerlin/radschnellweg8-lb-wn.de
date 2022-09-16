import React, { ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  className?: string
}

export const UL: React.FC<Props> = ({ className, children }) => {
  return <ul className={classNames('list-disc pl-5', className)}>{children}</ul>
}

export const LI: React.FC<Props> = ({ className, children }) => {
  return <li className={classNames('', className)}>{children}</li>
}
