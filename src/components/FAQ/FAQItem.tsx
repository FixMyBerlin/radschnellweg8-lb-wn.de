import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

export const FAQItem: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      <div>{title}</div>
      {children}
    </div>
  )
}
