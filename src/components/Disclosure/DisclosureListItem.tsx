import classNames from 'classnames'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
  no?: number
}

export const DisclosureListItem: React.FC<Props> = ({
  title,
  children,
  no,
}) => {
  return (
    <Disclosure as="div" key={title} className="pt-6">
      {({ open }) => (
        <>
          <dt className="text-lg">
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400 gap-2">
              <div className="flex gap-6 items-center">
                {no && (
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-rs8-pink pt-1 text-white shadow-lg">
                    {no}
                  </span>
                )}
                <span className="font-medium text-gray-900">{title}</span>
              </div>
              <span className="flex h-7 items-center">
                <ChevronDownIcon
                  className={classNames(
                    open ? '-rotate-180' : 'rotate-0',
                    'h-6 w-6 transform',
                  )}
                  aria-hidden="true"
                />
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-2 lg:pr-12">
            <p className="text-[16px] leading-[24px] text-gray-500">
              {children}
            </p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
