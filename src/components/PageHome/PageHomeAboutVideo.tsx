import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Section } from '../Layout'
import { H2 } from '../Text'
import { YouTubePreview } from '../YouTubePreview'

export const PageHomeAboutVideo: React.FC = () => {
  return (
    <Section>
      <H2>Was ist eine Radschnellverbindung?</H2>
      <YouTubePreview
        link="https://www.youtube.com/watch?v=t9GxxxYse_8"
        image={
          <StaticImage
            src="./assets/youtube-preview-radschnellwege.jpeg"
            alt="Vorschau YouTube Video 'Radschnellwege in Baden-Württemberg: direkt – schnell – sicher'"
          />
        }
      />
    </Section>
  )
}
