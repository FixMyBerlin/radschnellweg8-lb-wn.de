import React from 'react'
import { Section } from '../Layout'
import { H2 } from '../Text'

export const PageHomeAboutVideo: React.FC = () => {
  return (
    <Section>
      <H2>Was ist eine Radschnellverbindung?</H2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/t9GxxxYse_8"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Section>
  )
}
