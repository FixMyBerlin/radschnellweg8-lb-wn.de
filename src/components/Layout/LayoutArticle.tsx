import React from 'react'
import { Layout } from '~/components/Layout'

type Props = {
  location?: any // TODO: define type
  children: React.ReactNode
}

export const LayoutArticle: React.FC<Props> = ({ location, children }) => {
  return (
    <Layout location={location}>
      <article className="prose mx-auto max-w-[960px] px-3 pt-10">
        {children}
      </article>
    </Layout>
  )
}
