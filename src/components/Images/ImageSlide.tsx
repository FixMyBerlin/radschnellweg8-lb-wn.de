import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { ImageSlider } from './ImageSlider'

export type CaptionImage = {
  image: React.ReactNode
  caption: string
}

const images: CaptionImage[] = [
  {
    image: (
      <StaticImage
        src="../../images/1_Schulradler.jpg"
        alt="Schulradler"
        className="aspect-[3/2] overflow-hidden"
      />
    ),
    caption: 'Foto: © AGFK, Marcus Gloger',
  },
  {
    image: (
      <StaticImage
        src="../../images/2_Mit_dem_Rad_zur_Arbeit.jpg"
        alt="Mit dem Rad zur Arbeit"
        className="aspect-[3/2] overflow-hidden"
      />
    ),
    caption: 'Foto: © AGFK, Marcus Gloger',
  },
  {
    image: (
      <StaticImage
        src="../../images/3_Radeln_neben_Bundesstrasse.jpg"
        alt="Radeln neben Bundesstraße"
        className="aspect-[3/2] overflow-hidden"
      />
    ),
    caption: 'Foto: © AGFK, Marcus Gloger',
  },
  {
    image: (
      <StaticImage
        src="../../images/4_Wochenendeinkauf.jpg"
        alt="Wochenendeinkauf"
        className="aspect-[3/2] overflow-hidden"
      />
    ),
    caption: 'Foto: © AGFK, Heiko Simayr',
  },
  {
    image: (
      <StaticImage
        src="../../images/5_Sportplatz.jpg"
        alt="Sportplatz"
        className="aspect-[3/2] overflow-hidden"
      />
    ),
    caption: 'Foto: © AGFK, Marcus Gloger',
  },
  {
    image: (
      <StaticImage
        src="../../images/6_Radpendlerinnen.jpg"
        alt="Radpendlerinnen"
        className="aspect-[3/2] overflow-hidden"
      />
    ),
    caption: 'Foto: © AGFK, Heiko Simayr',
  },
]

export const ImageSlide: React.FC = () => {
  return <ImageSlider items={images} />
}
