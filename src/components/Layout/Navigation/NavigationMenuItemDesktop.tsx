import classNames from 'classnames'

type Props = { currentPage: string; name: string; to: string }

export const NavigationMenuItemDesktop: React.FC<Props> = ({
  currentPage,
  name,
  to,
}) => {
  const active = currentPage === to

  return (
    <a
      href={to}
      className={classNames(
        { 'text-rsv-blau font-bold': active },
        { 'font-medium text-slate-500 hover:text-slate-700 ': !active },
        'relative inline-flex items-center px-1 pt-1 leading-5',
        'before:absolute before:bottom-0 before:left-0 before:block before:h-1 before:w-full before:origin-top-left before:scale-x-0 before:bg-rs8-pink before:transition-transform before:duration-300 before:ease-out before:content-[""] before:hover:scale-x-100'
      )}
    >
      {name}
    </a>
  )
}
