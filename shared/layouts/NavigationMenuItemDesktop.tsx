import { COLORSCLASSES } from '@config/styles'
import { clsx } from 'clsx'

type Props = { active: boolean; name: string; href: string }

export const NavigationMenuItemDesktop = ({ active, name, href }: Props) => {
  return (
    <a
      href={href}
      className={clsx(
        active ? clsx(COLORSCLASSES.navigatorText, '') : 'text-slate-500 hover:text-slate-700',
        'text-md relative inline-flex items-center pt-1 font-medium leading-5',
        // Underline:
        'before:absolute before:bottom-0 before:left-0 before:block before:h-1 before:w-full before:origin-top-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out before:content-[""] before:hover:scale-x-100',
        COLORSCLASSES.navigationUnderline,
      )}
      aria-current={active}
    >
      {name}
    </a>
  )
}
