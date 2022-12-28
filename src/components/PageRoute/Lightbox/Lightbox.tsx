import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'

type Props = {
  image: React.ReactNode
  //   children: string | React.ReactNode
}

export const Lightbox: React.FC<Props> = ({ image }) => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="group relative">
        {image}
        <button
          type="button"
          onClick={openModal}
          className="absolute top-3 left-3 max-w-[50%] rounded-lg border px-4 py-2 text-white opacity-50 focus:outline-none group-hover:opacity-100"
        >
          Vergrößern
        </button>
      </div>
      <Dialog
        open={isOpen}
        // eslint-disable-next-line react/jsx-no-bind
        onClose={closeModal}
        as="div"
        className="relative z-10"
      >
        <Dialog.Panel className="fixed top-2 left-2 w-[90%] overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <div className="">{image}</div>
          <div className="mt-2 text-right">
            <button type="button" className="" onClick={closeModal}>
              <XMarkIcon className="w-8 text-gray-900" />
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
