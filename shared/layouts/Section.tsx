type Props = {
  classes?: string
  children?: React.ReactNode
}

export const Section = ({ classes, children }: Props) => {
  return (
    <section className={classes}>
      <div className="m-auto max-w-[90%] lg:max-w-[964px]">{children}</div>
    </section>
  )
}
