import { PageProps } from 'gatsby'
import React from 'react'
import { Layout } from '~/components/Layout'

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return <Layout location={location} />
}

export default IndexPage
