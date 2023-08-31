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
          <Disclosure.Panel
            as="dd"
            className={classNames(
              'mt-3 lg:pr-12',
              'text-gray-500',
              'prose-strong:text-gray-500',
              'max-w-full',
              'prose-div:max-w-full',
              'text-sm md:text-[16px]',
              'prose-h1:text-base md:prose-h1:text-lg', // h1 size
              'prose-h2:text-sm md:prose-h2:text-[16px]', // h2 size
              'prose-h3:text-sm md:prose-h3:text-[16px]', // h3 size
              'leading-normal md:leading-normal prose-p:leading-normal md:prose-p:leading-normal prose-li:leading-relaxed md:prose-li:leading-relaxed',
              'prose-ul:list-disc prose-ul:my-6 prose-li:text-gray-500 prose-ul:ml-4',
            )}
          >
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
