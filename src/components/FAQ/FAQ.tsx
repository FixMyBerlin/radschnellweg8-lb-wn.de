import React from 'react'

type Props = {
  children: React.ReactNode
}

export const FAQ: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
