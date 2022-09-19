import { Link, PageProps } from 'gatsby'
import React from 'react'
import { HelmetSeo } from '~/components/HelmetSeo'
import { LayoutArticle } from '~/components/Layout'

const NotFound: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <HelmetSeo noindex title="404 | Seite nicht gefunden." />

      <div className="sm:flex">
        <p className="text-4xl sm:text-5xl font-extrabold text-orange-400">
          404
        </p>
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
            <Link className="btn btn-brand" to="/">
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </LayoutArticle>
  )
}

export default NotFound
