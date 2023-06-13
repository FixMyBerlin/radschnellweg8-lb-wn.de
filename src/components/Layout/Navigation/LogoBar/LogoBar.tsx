import React from 'react'
import { LinkExternal } from '~/components/Link'

type Props = { lazyLoad?: boolean }

export const LogoBar: React.FC<Props> = ({ lazyLoad }: Props) => {
  return (
    <div className="z-[1] w-full px-2 py-4 sm:p-8">
      <span className="sr-only">Projektpartner:</span>
      <div className="overflow-scoll flex flex-wrap gap-x-4 sm:justify-center sm:gap-x-8">
        <LinkExternal href="https://www.rems-murr-kreis.de/">
          <img
            className="h-[35px] w-auto lg:h-[40px]"
            src="/layout-logo-bar/rems-murr-kreis-logo.png"
            alt="Rems-Ruhr-Kreis"
            loading={lazyLoad ? 'lazy' : 'eager'}
          />
        </LinkExternal>
        <LinkExternal href="https://www.landkreis-ludwigsburg.de/">
          <img
            className="h-[35px] w-auto lg:h-[40px]"
            src="/layout-logo-bar/landkreis-ludwigsburg-logo.svg"
            alt="Landkreis Ludwigsburg"
            loading={lazyLoad ? 'lazy' : 'eager'}
          />
        </LinkExternal>
        <LinkExternal href="https://www.ludwigsburg.de/">
          <img
            className="h-[35px] w-auto lg:h-[40px]"
            src="/layout-logo-bar/ludwigsburg-logo.svg"
            alt="Ludwigsburg"
            loading={lazyLoad ? 'lazy' : 'eager'}
          />
        </LinkExternal>
        <LinkExternal href="https://www.stadt-remseck.de/">
          <img
            className="h-[35px] w-auto lg:h-[40px]"
            src="/layout-logo-bar/remseck-logo.svg"
            alt="Remseck"
            loading={lazyLoad ? 'lazy' : 'eager'}
          />
        </LinkExternal>
        <LinkExternal href="https://www.waiblingen.de/">
          <img
            className="h-[35px] w-auto lg:h-[40px]"
            src="/layout-logo-bar/stadt-waiblingen-logo.svg"
            alt="Stadt Waiblingen"
            loading={lazyLoad ? 'lazy' : 'eager'}
          />
        </LinkExternal>
      </div>
    </div>
  )
}
