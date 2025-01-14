import { LINKCLASSES } from '@config/styles'
import { clsx } from 'clsx'

type Props = {
  className?: string
  /** @desc Default: `true` */
  blank?: boolean
  /** @desc Style Link as Button */
  button?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkExternal = ({ className, children, button, blank = true, ...props }: Props) => {
  return (
    <a
      className={clsx(button ? LINKCLASSES.button : LINKCLASSES.link, className)}
      rel="noopener noreferrer"
      {...{ target: blank ? '_blank' : undefined }}
      {...props}
    >
      {children}
    </a>
  )
}
