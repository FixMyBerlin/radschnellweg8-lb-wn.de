import classNames from 'classnames'
import React from 'react'

export const Container: React.VFC<{
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => {
  return (
    <div className={classNames('', className)}>
      <div className="m-auto max-w-[90%] lg:max-w-[964px] ">{children}</div>
    </div>
  )
}
