import classNames from 'classnames'
import React from 'react'

export const ZoomableImage: React.FC<{
  className?: string
  src: string
  alt: string
}> = ({ className, src, alt }) => {
  return (
    <img
      className={classNames('h-12 w-auto sm:h-16', className)}
      src={src}
      alt={alt}
    />
  )
}
