import { DisclosureButton } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type Props = { open: boolean }

export const NavigationMobileMenuButton = ({ open }: Props) => {
  return (
    <div className="mr-2 flex items-center md:hidden">
      <DisclosureButton className="focus:ring-rsv-blau inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-gray-100 hover:text-slate-500 focus:ring-2 focus:outline-hidden focus:ring-inset">
        <span className="sr-only">Hauptmenü öffnen</span>
        {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </DisclosureButton>
    </div>
  )
}
