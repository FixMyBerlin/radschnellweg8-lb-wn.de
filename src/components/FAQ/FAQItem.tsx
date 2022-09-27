import classNames from 'classnames'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

export const FAQItem: React.FC<Props> = ({ title, children }) => {
  return (
    <Disclosure as="div" key={title} className="pt-6">
      {({ open }) => (
        <>
          <dt className="text-lg">
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
              <span className="font-medium text-gray-900">{title}</span>
              <span className="ml-6 flex h-7 items-center">
                <ChevronDownIcon
                  className={classNames(
                    open ? '-rotate-180' : 'rotate-0',
                    'h-6 w-6 transform'
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
