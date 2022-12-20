import { PageProps } from 'gatsby'
import React from 'react'
import { LayoutArticle } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageRouteIntro, PageRouteItems } from '~/components/PageRoute'
import { H1 } from '~/components/Text'

export const Head = () => <MetaTags noindex title="Route TODO" />

const Route: React.FC<PageProps> = ({ location }) => {
  return (
    <LayoutArticle location={location}>
      <H1 showTopline>Route TODO</H1>
      <PageRouteIntro />
      <PageRouteItems />
    </LayoutArticle>
  )
}

export default Route
