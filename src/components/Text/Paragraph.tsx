import classNames from 'classnames'

type Props = {
  className?: string
  children: React.ReactNode
}

export const P: React.FC<Props> = ({ className, children }) => {
  return <p className={classNames('my-3', className)}>{children}</p>
}
