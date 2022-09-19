import React from 'react'

export const Section: React.VFC<{
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => {
  return (
    <section className={className}>
      <div className="m-auto max-w-[90%] lg:max-w-[964px] ">{children}</div>
    </section>
  )
}
