import React from 'react'

type Props = {
  children: React.ReactNode
}

export const FAQ: React.FC<Props> = ({ children }) => {
  return (
    <dl className="m-auto w-[75%] space-y-6 divide-y divide-gray-200 border-y pb-6">
      {children}
    </dl>
  )
}
