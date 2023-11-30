import React from 'react'

type Props = {
  children: React.ReactNode
}

export const DisclosureList: React.FC<Props> = ({ children }) => {
  return (
    <dl className="space-y-6 divide-y divide-gray-200 border-y pb-6 ">
      {children}
    </dl>
  )
}
