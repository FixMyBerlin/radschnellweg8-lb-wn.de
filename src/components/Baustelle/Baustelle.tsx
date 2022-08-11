import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export const Baustelle = () => {
  return (
    <div className="flex min-h-full flex-col bg-white lg:relative">
      <div className="flex flex-grow flex-col">
        <main className="flex bg-white">
          <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 pt-10 sm:pt-16">
              <StaticImage
                src="../images/remseck-logo.jpg"
                alt=""
                className="h-20 w-auto object-contain"
              />
              <StaticImage
                src="../images/stadt-waiblingen-logo.png"
                alt=""
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="flex">
              <StaticImage
                src="../images/rsv8-logo.png"
                alt="Logo des Radschnellweg 8"
                className="my-auto h-20 w-20 flex-grow py-16 sm:py-32"
              />
              <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                <p className="text-sm font-semibold uppercase tracking-wide text-rsv-pink">
                  Baustelle
                </p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Diese Website ist derzeit im Aufbau.
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Bald stehen Ihnen hier Informationen über den neuen
                  Radschnellweg 8 von Ludwigsburg nach Waiblingen zur Verfügung.
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="hover:text-blau text-base font-semibold text-rsv-blau"
                  >
                    Zurück zur Startseite<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <StaticImage
            src="../images/symbolbild.jpg"
            alt="Beispielbild eines Radschnellweges, auf dem ein Rennradfahrer fährt"
            className="inset-0  object-cover"
          />
        </main>
        <footer className="flex-shrink-0 bg-gray-50">
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <nav className="flex space-x-4">
              <a
                href="/impressum"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Impressum
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}
