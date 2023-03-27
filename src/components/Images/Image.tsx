import React from 'react'

type Props = {
  image: React.ReactNode
}

export const Image: React.FC<Props> = ({ image }) => {
  return <figure>{image}</figure>
}
