import React, { ReactNode } from 'react'
import classNames from 'classnames'

type Props = {
  children: ReactNode
  className?: string
}

export const P: React.FC<Props> = ({ className, children }) => {
  return <p className={classNames('my-3', className)}>{children}</p>
}
