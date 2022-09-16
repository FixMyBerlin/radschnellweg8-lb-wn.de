import classNames from 'classnames'
import React from 'react'

export const ZoomableImage: React.FC<{
  className?: string
  image: React.ReactNode
}> = ({ className, image }) => {
  return (
    <div className={classNames('relative', className)}>
      {image}
      <div className="absolute bottom-0 z-10 h-[20px] w-full bg-gradient-to-t from-[rgba(0,0,0,0.1)]" />
    </div>
  )
}
