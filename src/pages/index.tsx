import { PageProps } from 'gatsby'
import React from 'react'
import { HelmetSeo } from '~/components/HelmetSeo'
import { Layout } from '~/components/Layout'

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <HelmetSeo title="Radschnellweg 8 | Der neue Radschnellweg non Ludwigsburg nach Waiblingen" />
    </Layout>
  )
}

export default IndexPage
