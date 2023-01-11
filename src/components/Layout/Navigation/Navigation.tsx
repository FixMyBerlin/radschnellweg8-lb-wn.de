import React from 'react'
import { Disclosure } from '@headlessui/react'
import {
  NavigationMenuItemDesktop,
  NavigationMenuItemMobile,
  NavigationMobileMenuButton,
} from '.'
import { LogoBar } from './LogoBar'
import { navigationLinks } from './navigationLinks.const'

export const Navigation = ({ location }) => {
  return (
    // https://tailwindui.com/components/application-ui/navigation/navbars
    <Disclosure as="nav" className="z-20 bg-white shadow-md shadow-gray-400/5">
      {({ open }) => (
        <>
          <div className="flex h-24 justify-between py-2">
            <nav className="flex w-full items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <LogoBar />
              </div>
              <div className="hidden pr-8 md:flex md:space-x-10">
                {navigationLinks.map((link) => (
                  <NavigationMenuItemDesktop
                    name={link.name}
                    to={link.to}
                    currentPage={location?.pathname}
                    key={link.to}
                  />
                ))}
              </div>
            </nav>

            <NavigationMobileMenuButton open={open} />
          </div>

          <Disclosure.Panel className="sm:hidden">
            <nav className="space-y-1 pt-2 pb-3">
              {navigationLinks.map((link) => (
                <NavigationMenuItemMobile
                  name={link.name}
                  to={link.to}
                  currentPage={location?.pathname}
                  key={link.to}
                />
              ))}
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
