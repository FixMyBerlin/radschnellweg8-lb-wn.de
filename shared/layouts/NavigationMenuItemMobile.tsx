import { COLORSCLASSES } from '@config/styles'
import { DisclosureButton } from '@headlessui/react'
import { clsx } from 'clsx'

type Props = { active: boolean; name: string; href: string }

export const NavigationMenuItemMobile = ({ active, name, href }: Props) => {
  return (
    <DisclosureButton
      as="a"
      href={href}
      className={clsx(
        active
          ? COLORSCLASSES.navigatorMobileLink
          : 'border-transparent text-slate-500 hover:border-gray-300 hover:bg-gray-50 hover:text-slate-700',
        'block border-l-4 py-2 pr-4 pl-3 text-base font-medium',
      )}
    >
      {name}
    </DisclosureButton>
  )
}
