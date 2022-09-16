import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export default () => {
  return (
    <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Radschnellweg 8</span>
            <StaticImage
              src="../images/rsv8-logo.png"
              alt="Logo des Radschnellweg 8"
              className="h-20 w-20"
            />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-rsv-pink text-sm font-semibold uppercase tracking-wide">
              Baustelle
            </p>
            <h1 className="text-4xl sm:text-5xl mt-2 font-extrabold tracking-tight text-gray-900">
              Diese Website ist derzeit im Aufbau.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Bald stehen Ihnen hier Informationen über den neuen Radschnellweg
              8 von Ludwigsburg nach Waiblingen zur Verfügung.
            </p>
            {/* <div className="mt-6">
              <a
                href="#"
                className="text-base font-medium text-rsv-blau hover:text-rsv-blau"
              >
                Go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </div> */}
          </div>
        </div>
      </main>
      <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <a
            href="/impressum"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Impressum
          </a>
        </nav>
      </footer>
    </div>
  )
}
