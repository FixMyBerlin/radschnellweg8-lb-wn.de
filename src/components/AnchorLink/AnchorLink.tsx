import { ArrowUpIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { Link } from '../Text'

type Props = {
  path?: string
}

export const AnchorLink: React.FC<Props> = ({ path = '' }) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.onscroll = () => {
        setOffset(window.pageYOffset)
      }
    }
  }, [])

  return (
    <div>
      {Boolean(offset) && offset >= 100 && (
        <Link to={`${path}/#top`} className="mt-10 flex no-underline">
          <ArrowUpIcon className="fixed top-[50%] right-8 z-20 w-10 rounded-full border-[3px] border-pink-500 bg-white p-1" />
        </Link>
      )}
    </div>
  )
}
