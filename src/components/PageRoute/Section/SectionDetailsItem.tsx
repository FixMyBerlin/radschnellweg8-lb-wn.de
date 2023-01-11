import React from 'react'
import classNames from 'classnames'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { TSectionDetails } from '../data.const/types'

type Props = {
  detail: TSectionDetails
  mapNumber: number
}

export const SectionDetailsItem: React.FC<Props> = ({ detail, mapNumber }) => {
  return (
    <Disclosure as="article" key={detail.id} id={detail.id} className="pt-6">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-start gap-4 text-left text-lg text-gray-400">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-rs8-pink pt-1 text-white shadow-lg">
              {mapNumber}
            </span>
            <span className="flex w-full items-center justify-between">
              <h4 className="m-0 p-0 text-base font-medium leading-tight text-gray-900">
                {detail.title}
              </h4>
              <span className="ml-6 flex h-7 items-center">
                <ChevronDownIcon
                  className={classNames(
                    open ? '-rotate-180' : 'rotate-0',
                    'h-6 w-6 transform'
                  )}
                  aria-hidden="true"
                />
              </span>
            </span>
          </Disclosure.Button>
          <Disclosure.Panel as="div" className="mt-2 md:ml-14 lg:pr-12">
            <p className="text-[16px] leading-[24px] text-gray-500">
              {detail.body}
            </p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
