import { type NavigatinItem } from '@config/links'
import { Disclosure, DisclosurePanel } from '@headlessui/react'
import { NavigationMenuItemDesktop } from './NavigationMenuItemDesktop'
import { NavigationMenuItemMobile } from './NavigationMenuItemMobile'
import { NavigationMobileMenuButton } from './NavigationMobileMenuButton'

type Props = {
  navigation: NavigatinItem[]
  pathname: string
  slotWebsiteLogo?: React.ReactNode
  slotPartnerLogos?: React.ReactNode
}

export const Navigation = ({
  navigation,
  pathname,
  slotWebsiteLogo,
  slotPartnerLogos: slotLogos,
}: Props) => {
  // https://tailwindui.com/components/application-ui/navigation/navbars
  return (
    <Disclosure as="header" className="z-20 bg-white shadow-md shadow-gray-400/5">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between md:py-2">
            {/* MOBILE */}
            <a
              href="/"
              className="mx-6 flex h-full shrink-0 items-center py-3 md:hidden"
              aria-current={pathname === '/'}
            >
              {slotWebsiteLogo}
            </a>

            {/* DESKTOP */}
            <nav className="hidden w-full items-center justify-between md:flex md:flex-wrap">
              <div className="flex items-center gap-10 pr-6">
                <a href="/" className="h-full shrink-0 py-1 pl-6" aria-current={pathname === '/'}>
                  {slotWebsiteLogo}
                </a>
                {navigation.map((link) => (
                  <NavigationMenuItemDesktop
                    key={link.href}
                    name={link.name}
                    href={link.href}
                    active={pathname.split('/')[1] === link.href.split('/')[1]}
                  />
                ))}
              </div>
              {slotLogos}
            </nav>

            {/* MOBILE */}
            <NavigationMobileMenuButton open={open} />
          </div>

          {/* MOBILE */}
          <DisclosurePanel className="md:hidden">
            <nav className="space-y-1 pt-2 pb-3">
              {navigation.map((link) => (
                <NavigationMenuItemMobile
                  key={link.href}
                  name={link.name}
                  href={link.href}
                  active={pathname.split('/')[1] === link.href.split('/')[1]}
                />
              ))}
              {slotLogos}
            </nav>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
