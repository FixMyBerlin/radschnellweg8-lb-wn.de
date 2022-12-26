import { Section } from '@components/Layout/Section'
import classNames from 'classnames'

type Props = {
  className?: string
  children: React.ReactNode
}

// Designed to be positioned right next to the <LogoHomeLink>
export const HeadingContentPage: React.FC<Props> = ({
  className,
  children,
}) => {
  return (
    <Section className="mt-8 w-full md:mt-5 md:pl-[140px] lg:pl-24 xl:pl-0">
      <p className="mt-0 mb-4 text-neutral-400">
        Radschnellverbindung zwischen Waiblingen und Ludwigsburg
      </p>
      <h1
        className={classNames(
          'font-serif mb-10 text-[60px] font-extrabold lg:leading-[66px]',
          className
        )}
      >
        {children}
      </h1>
    </Section>
  )
}
