import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { Fragment, useState } from 'react'

type Props = {
  image: React.ReactNode
  children?: string | React.ReactNode
}

export const Lightbox: React.FC<Props> = ({ image, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="group relative text-gray-500">
        <button type="button" onClick={openModal} className="">
          {image}
          <span className="absolute top-3 left-3 rounded-lg bg-white px-4 pb-2 pt-3 opacity-0 focus:outline-none group-hover:opacity-80">
            Vergrößern
          </span>

          {/* <MagnifyingGlassIcon width={50} /> */}
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          open={isOpen}
          // eslint-disable-next-line react/jsx-no-bind
          onClose={closeModal}
          as="div"
          className="relative z-10  text-gray-500"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div className="fixed inset-0 z-50 bg-black/40" aria-hidden="true" />
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="z-50 flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-400"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-400"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="z-50 w-[90%] max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {image}
                  <div className="mt-2 flex justify-between space-x-4 leading-5">
                    <p className="text-[0.85rem] italic">{children}</p>
                    <button type="button" className="" onClick={closeModal}>
                      <XMarkIcon className="w-8" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
