import { Disclosure } from '@headlessui/react'
import classNames from 'classnames'

type Props = { currentPage: string; name: string; to: string }

export const NavigationMenuItemMobile: React.FC<Props> = ({
  currentPage,
  name,
  to,
}) => {
  const active = currentPage === to

  return (
    <Disclosure.Button
      as="a"
      href={to}
      className={classNames(
        { 'border-rsv-blau bg-rsv-blau-light text-rsv-blau': active },
        {
          'border-transparent text-slate-500 hover:border-gray-300 hover:bg-gray-50 hover:text-slate-700':
            !active,
        },
        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
      )}
    >
      {name}
    </Disclosure.Button>
  )
}
