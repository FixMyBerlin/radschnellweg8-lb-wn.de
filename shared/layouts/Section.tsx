type Props = {
  className?: string
  children?: React.ReactNode
}

export const Section = ({ className, children }: Props) => {
  return (
    <section className={className}>
      <div className="m-auto max-w-[90%] lg:max-w-[796px]">{children}</div>
    </section>
  )
}
