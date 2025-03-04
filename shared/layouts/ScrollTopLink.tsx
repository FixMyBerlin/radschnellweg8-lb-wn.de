import { COLORSCLASSES } from '@config/styles'
import { Transition } from '@headlessui/react'
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { useEffect, useState } from 'react'

export const ScrollTopLink = () => {
  const [visible, setVisible] = useState(false)

  // @ts-expect-error types unclear but also not important
  const onScroll = (e) => {
    setVisible(e.target.documentElement.scrollTop >= 150)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <ArrowUpCircleIcon
          className={clsx(
            COLORSCLASSES.scrollTopLink,
            'fixed right-8 bottom-16 z-40 w-14 rounded-full bg-white',
          )}
        />
      </button>
    </Transition>
  )
}
