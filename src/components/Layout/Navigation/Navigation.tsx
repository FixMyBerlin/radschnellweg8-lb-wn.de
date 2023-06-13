import { Disclosure } from '@headlessui/react'
import {
  NavigationMenuItemDesktop,
  NavigationMenuItemMobile,
  NavigationMobileMenuButton,
} from '.'
import { LogoBar } from './LogoBar'
import { navigationLinks } from './navigationLinks.const'
import { Logo } from '../Logo'

export const Navigation = ({ location }) => {
  return (
    // https://tailwindui.com/components/application-ui/navigation/navbars
    <Disclosure as="nav" className="z-20 bg-white shadow-md shadow-gray-400/5">
      {({ open }) => (
        <>
          <div className="flex h-24 justify-between py-2">
            <Logo className="mx-6 my-3 h-16 lg:hidden" />
            <nav className="flex w-full items-center justify-between">
              <div className="hidden pr-8 lg:flex lg:space-x-10">
                <Logo className="ml-6 h-16" />
                {navigationLinks.map((link) => (
                  <NavigationMenuItemDesktop
                    name={link.name}
                    to={link.to}
                    currentPage={location?.pathname}
                    key={link.to}
                  />
                ))}
              </div>
              <div className="ml-6 hidden flex-shrink-0 items-center lg:flex">
                <LogoBar />
              </div>
            </nav>

            <NavigationMobileMenuButton open={open} />
          </div>

          <Disclosure.Panel className="lg:hidden">
            <nav className="space-y-1 pb-3 pt-2">
              {navigationLinks.map((link) => (
                <NavigationMenuItemMobile
                  name={link.name}
                  to={link.to}
                  currentPage={location?.pathname}
                  key={link.to}
                />
              ))}
              <LogoBar lazyLoad />
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
