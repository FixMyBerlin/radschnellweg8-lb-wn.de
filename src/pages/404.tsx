import React from 'react'
import { PageProps } from 'gatsby'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { LayoutArticle } from '~/components/Layout'
import { Link } from '~/components/Link'

export const Head = () => (
  <MetaTags noindex title="404 | Seite nicht gefunden." />
)

const NotFound: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <div className="sm:flex">
        <p className="text-4xl sm:text-5xl font-extrabold text-rs8-pink">404</p>
        <div className="sm:ml-6">
          <div className="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Diese Seite gibt es nicht
            </h1>
            <p className="mt-1 text-base text-slate-500">
              Vielleicht ist ein Fehler in der URL?
            </p>
          </div>
          <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <Link
              className="rounded-full border border-rs8-pink px-6 pt-3 pb-2.5 no-underline hover:bg-gray-100"
              to="/"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </LayoutArticle>
  )
}

export default NotFound
