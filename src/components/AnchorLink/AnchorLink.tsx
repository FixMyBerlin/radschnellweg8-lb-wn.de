import { Transition } from '@headlessui/react'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { Link } from '../Text'

type Props = {
  path?: string
}

export const AnchorLink: React.FC<Props> = ({ path = '' }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = (e) => {
      setVisible(e.target.documentElement.scrollTop >= 150)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [visible])

  return (
    <Transition
      show={visible}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Link to={`${path}/#top`} className="mt-10 flex no-underline">
        <ArrowUpCircleIcon className="fixed bottom-16 right-8 z-50 w-14 rounded-full bg-white hover:text-rs8-pink" />
      </Link>
    </Transition>
  )
}
