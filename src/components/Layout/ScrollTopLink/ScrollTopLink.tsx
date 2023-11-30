import { Transition } from '@headlessui/react'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'

export const ScrollTopLink: React.FC = () => {
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
      <button
        type="button"
        onClick={() => window.scrollTo(0, 0)}
        className="mt-10 flex no-underline"
        aria-label="Zum Seitenanfang springen"
      >
        <ArrowUpCircleIcon className="fixed bottom-16 right-8 z-40 w-14 rounded-full bg-white text-rs8-pink hover:text-rs8-pink" />
      </button>
    </Transition>
  )
}
