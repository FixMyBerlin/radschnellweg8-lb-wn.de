import { PlayIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import React from 'react'
import { LinkExternal } from '../Link'

type Props = {
  link: string
  image: React.ReactElement
  marginClass?: string
}

export const YouTubePreview: React.FC<Props> = ({
  link,
  image,
  marginClass,
}) => {
  return (
    <LinkExternal
      href={link}
      className={classNames(
        'group relative flex aspect-video w-full items-center justify-center overflow-clip rounded-md',
        { 'my-8': !marginClass },
        marginClass,
      )}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 shadow backdrop-blur-md transition-all duration-300 group-hover:h-24 group-hover:w-24">
        <PlayIcon className="h-14 w-14 transition-all group-hover:h-20 group-hover:w-20" />
      </div>
      <picture className="absolute inset-0 -z-10">{image}</picture>
    </LinkExternal>
  )
}
