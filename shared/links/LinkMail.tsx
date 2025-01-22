import { LINKCLASSES } from '@config/styles'
import { clsx } from 'clsx'

type Props = {
  className?: string
  mailto?: string
  subject?: string
  blank?: boolean
  /** @desc Style Link as Button */
  button?: boolean
  children: React.ReactNode
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const LinkMail = ({ className, mailto, subject, button, children, ...props }: Props) => {
  const url = new URL(`mailto:${mailto || children}`)
  if (subject) {
    url.searchParams.append('subject', subject)
  }

  return (
    <a
      href={url.toString()}
      className={clsx(button ? LINKCLASSES.button : LINKCLASSES.link, className)}
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}
