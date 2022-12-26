import { Section } from '@components/Layout/Section'
import classNames from 'classnames'

type Props = {
  className?: string
  children: React.ReactNode
}

// Designed to be positioned right next to the <LogoHomeLink>
export const H1: React.FC<Props & { showTopline?: boolean }> = ({
  className,
  showTopline = false,
  children,
}) => {
  return (
    <Section className="mt-16 w-full pl-[40px] md:pl-[140px] lg:pl-[180px] xl:pl-0">
      {showTopline && (
        <p className="mt-0 mb-4 text-neutral-400">
          Radschnellverbindung zwischen Waiblingen und Ludwigsburg
        </p>
      )}
      <h1
        className={classNames(
          'font-serif mb-10 text-xl font-extrabold lg:text-[60px] lg:leading-[66px]',
          className
        )}
      >
        {children}
      </h1>
    </Section>
  )
}

export const H2: React.FC<Props> = ({ className, children }) => {
  return (
    <h2
      className={classNames(
        'font-serif text-dark-gray lg:leading-40 mt-16 mb-10 text-lg font-extrabold  lg:text-[36px]',
        className
      )}
    >
      {children}
    </h2>
  )
}
