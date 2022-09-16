import React from 'react'

type Props = {
  children: React.ReactNode
}

export const FAQ: React.FC<Props> = ({ children }) => {
  return (
    <dl className="m-auto space-y-6 divide-y divide-gray-200 border-y pb-6 md:w-[75%]">
      {children}
    </dl>
  )
}
