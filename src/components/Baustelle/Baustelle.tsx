import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export const Baustelle = () => {
  return (
    <div className="flex min-h-full flex-col bg-white lg:relative">
      <div className="flex flex-grow flex-col">
        <main className="flex flex-grow flex-col bg-white lg:flex-row">
          <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
            <div className="h-36 pt-10 sm:pt-16">
              <StaticImage
                src="../../images/rems-murr-kreis-logo.jpg"
                alt=""
                className="mx-3"
                objectFit="contain"
                height={80}
              />
              <StaticImage
                src="../../images/landkreis-ludwigsburg-logo.jpg"
                alt=""
                className="mx-3"
                objectFit="contain"
                height={80}
              />
              <StaticImage
                src="../../images/ludwigsburg-logo.png"
                alt=""
                className="mx-3"
                objectFit="contain"
                height={80}
              />
              <StaticImage
                src="../../images/stadt-waiblingen-logo.png"
                alt=""
                className="mx-3"
                objectFit="contain"
                height={80}
              />
              <StaticImage
                src="../../images/remseck-logo.jpg"
                alt=""
                objectFit="contain"
                height={80}
                className="mx-3"
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <StaticImage
                src="../../images/rsv8-logo.png"
                alt="Logo des Radschnellweg 8"
                className="m-auto mx-auto h-20 w-20 flex-shrink-0 object-contain py-16 sm:my-10 sm:mx-12 sm:py-32"
                objectFit="contain"
              />
              <div className="my-auto pb-20 sm:py-32">
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
            src="../../images/symbolbild.jpg"
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
