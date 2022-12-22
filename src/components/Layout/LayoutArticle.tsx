import React from 'react'
import { Layout } from '~/components/Layout'
import { ScrollTopLink } from './ScrollTopLink'

type Props = {
  location?: any // TODO: define type
  children: React.ReactNode
}

export const LayoutArticle: React.FC<Props> = ({ location, children }) => {
  return (
    <Layout location={location}>
      <ScrollTopLink />
      <article className="prose mx-auto max-w-[950px] px-3 pt-10">
        {children}
      </article>
    </Layout>
  )
}
