import { USE_MATOMO } from '@config/config'
import { COLORSCLASSES } from '@config/styles'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { markdownProseClasses } from '@shared/text/proseClasses'
import { clsx } from 'clsx'

type Props = {
  title: string
  children: React.ReactNode
  showNumber?: number
}

export const FaqItem = ({ title, children, showNumber }: Props) => {
  const matomoTrack = () => {
    if (USE_MATOMO === false) return false

    window._paq = window._paq || []
    // Docs: category, action, name, value
    window._paq.push(['trackEvent', 'FAQ', 'Open', title])
  }

  return (
    <Disclosure as="article" key={title} className="border-b border-gray-200 text-lg">
      {({ open }) => (
        <>
          <header>
            <DisclosureButton
              className="group flex w-full items-center justify-between gap-2 py-4 text-left text-balance text-gray-400"
              onClick={() => !open && matomoTrack()}
            >
              <div className="flex items-center gap-6">
                {showNumber && (
                  <span
                    className={clsx(
                      COLORSCLASSES.faqNumberBg,
                      'flex h-10 w-10 flex-none items-center justify-center rounded-full pt-1 text-white shadow-lg',
                    )}
                  >
                    {showNumber}
                  </span>
                )}
                <h3 className={clsx('text-gray-900', open ? 'font-bold' : 'font-medium')}>
                  {title}
                </h3>
              </div>
              <span className="flex h-7 items-center" aria-hidden="true">
                <ChevronDownIcon
                  className={clsx(
                    open ? '-rotate-180' : 'rotate-0',
                    'h-6 w-6 transform group-hover:text-gray-900',
                  )}
                />
              </span>
            </DisclosureButton>
          </header>
          <DisclosurePanel
            as="div"
            className={clsx(
              '-mt-4 mb-14 sm:pl-12 lg:pr-12',
              markdownProseClasses,
              'prose-div:max-w-full', // Don't know if this is needed, but it was there
              // 'text-sm md:text-[16px]', // We had this, but lets try to stick with the defaults
              // 'prose-h1:text-base md:prose-h1:text-lg', // h1 size
              // 'prose-h2:text-sm md:prose-h2:text-[16px]', // h2 size
              // 'prose-h3:text-sm prose-h3:text-gray-500 md:prose-h3:text-[16px]', // h3 size
              'prose-li:leading-relaxed md:prose-li:leading-relaxed',
              'prose-ul:my-6 prose-ul:ml-4 prose-ul:list-disc',
              'prose-p:text-gray-600 prose-a:text-gray-900 prose-strong:text-gray-900 prose-li:text-gray-600',
            )}
          >
            {children}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
