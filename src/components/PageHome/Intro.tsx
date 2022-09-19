import React from 'react'
import { Container, Logo } from '../Layout'
import { P } from '../Text'

export const Intro: React.FC = () => {
  return (
    <>
      <Logo className="absolute" />

      <Container className="mt-5 pl-[40px] sm:mt-12 sm:pl-[140px] lg:pl-[180px] xl:pl-0">
        <h1 className="font-serif mb-10 text-xl font-extrabold lg:text-[60px] lg:leading-[66px]">
          Radschnellverbindung zwischen Waiblingen und Ludwigsburg
        </h1>
      </Container>

      <Container>
        <P>
          Direkt – schnell – sicher: Lange zusammenhängende Strecken zwischen
          wichtigen Pendlerzielen, möglichst wenig Kreuzungen, die zum Bremsen
          oder gar Absteigen zwingen, mit gutem Belag und breit genug, dass man
          sicher überholen kann – so sollen sie aussehen, diese attraktiven
          Radrouten, die insbesondere Pendlerinnen und Pendler zum
          klimafreundlichen und gesunden Umstieg aufs Rad animieren sollen.
        </P>

        <P>
          Der Radschnellweg RS 8 verbindet die Städte Ludwigsburg, Remseck und
          Waiblingen. Auf diesen Seiten erhalten Sie Informationen zu
          Anforderungen, Planungsstand und Beteiligungsmöglichkeiten dieses
          Gemeinschaftsprojekts des Rems-Murr-Kreises mit dem Landkreis
          Ludwigsburg, der Stadt Ludwigsburg, der Stadt Waiblingen und der Stadt
          Remseck am Neckar.
        </P>
      </Container>
    </>
  )
}
