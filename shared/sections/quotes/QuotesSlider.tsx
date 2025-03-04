import { USE_MATOMO } from '@config/config'
import { COLORSCLASSES } from '@config/styles'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { IconQuote } from '@shared/icons/IconQuote'
import { clsx } from 'clsx'
import type React from 'react'
import { useEffect, useState } from 'react'

type Props = {
  quote1?: React.ReactNode
  quote2?: React.ReactNode
  quote3?: React.ReactNode
  quote4?: React.ReactNode
  quote5?: React.ReactNode
  quote6?: React.ReactNode
  quote7?: React.ReactNode
  increaseContainerHeight: boolean
}

export const QuotesSlider = ({
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
  quote6,
  quote7,
  increaseContainerHeight,
}: Props) => {
  const initialQuotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7]
    // 1. We have 7 slots of quotes and pass the Quote as Astro component
    // We have to filter the empty quotes…
    .filter((q) =>
      // @ts-expect-error we look at internal astro structure
      q.props.value.includes('figure'),
    )
    // 2. We want a different order of quotes on each page load
    .sort(() => Math.random() - 0.5)
  const [quotes] = useState<React.ReactNode[]>(initialQuotes)
  const [active, setActive] = useState<number>(0)
  const [manualMode, setManualMode] = useState<boolean>(false)

  const containerHeightClass = increaseContainerHeight ? 'lg:h-[32em]' : 'lg:h-[25em]'

  useEffect(() => {
    const imageInterval = setInterval(() => {
      if (!manualMode) {
        setActive((active + 1) % quotes.length)
      }
    }, 9000)

    return () => clearInterval(imageInterval)
  }, [active])

  const matomoTrack = () => {
    if (USE_MATOMO === false) return false

    window._paq = window._paq || []
    // Docs: category, action, name, value
    window._paq.push(['trackEvent', 'QuoteSlider', 'Prev/Next'])
  }

  const handleClick = ({
    event,
    activeQuoteIndex,
  }: {
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    activeQuoteIndex: number
  }) => {
    event.preventDefault()
    setManualMode(true)
    setActive(activeQuoteIndex)
    matomoTrack()
  }

  return (
    <div className={clsx(containerHeightClass, 'relative mt-20 lg:px-[70px]')}>
      <IconQuote className="absolute top-[8.25rem] left-2 w-10 stroke-[6px] object-cover text-slate-400 lg:-top-10 lg:left-[24.5rem] lg:w-40 lg:stroke-2" />

      <div className="grid grid-cols-1 grid-rows-1">
        {quotes.map((quote, index) => (
          <div
            key={index}
            className={clsx(
              'col-start-1 row-start-1',
              'transition-opacity duration-500 ease-in-out',
              index === active ? 'opacity-100' : 'opacity-0',
            )}
          >
            {quote}
          </div>
        ))}
      </div>

      {active !== 0 && (
        <button
          type="button"
          onClick={(event) => {
            handleClick({
              event,
              activeQuoteIndex: Math.min(quotes.length - 1, Math.max(0, active - 1)),
            })
          }}
          className={clsx(
            COLORSCLASSES.quotesButton,
            'absolute top-0 block h-14 w-14 text-gray-400 lg:top-[138px]',
            'right-[60px] lg:left-0',
          )}
        >
          <ArrowLeftCircleIcon aria-hidden={true} />
          <span className="sr-only">Vorheriges Zitat</span>
        </button>
      )}
      {active !== quotes.length - 1 && (
        <button
          type="button"
          onClick={(event) => {
            handleClick({
              event,
              activeQuoteIndex: Math.min(quotes.length - 1, Math.max(0, active + 1)),
            })
          }}
          className={clsx(
            COLORSCLASSES.quotesButton,
            'absolute top-0 block h-14 w-14 text-gray-400 lg:top-[138px]',
            'right-0',
          )}
        >
          <ArrowRightCircleIcon aria-hidden={true} />
          <span className="sr-only">Nächstes Zitat</span>
        </button>
      )}
    </div>
  )
}
