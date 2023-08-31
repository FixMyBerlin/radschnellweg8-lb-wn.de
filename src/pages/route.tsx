import { PageProps } from 'gatsby'
import React from 'react'
import { Layout, Section } from '~/components/Layout'
import { Link } from '~/components/Link'
import { RouteMap } from '~/components/Maps/RouteMap/RouteMap'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageRouteIntro } from '~/components/PageRoute'
import { PageRouteSection } from '~/components/PageRoute/Section/PageRouteSection'
import {
  section1Details,
  section1Header,
  section2Details,
  section2Header,
  section3Details,
  section3Header,
  section4Details,
  section4Header,
} from '~/components/PageRoute/data.const'
import { HeadingContentPage } from '~/components/Text'

export const Head = () => <MetaTags />

const Route: React.FC<PageProps> = ({ location }) => {
  const menu = [section1Header, section2Header, section3Header, section4Header]

  return (
    <Layout location={location}>
      <HeadingContentPage>Route</HeadingContentPage>

      <PageRouteIntro />
      <Section>
        <div className="my-10">
          <RouteMap sectionNumbers />
        </div>

        <ul className="marker:text-rs8-pink">
          {menu.map(({ id, title }) => {
            return (
              <li>
                <Link to={`#${id}`}>{title}</Link>
              </li>
            )
          })}
        </ul>
      </Section>
      <PageRouteSection header={section1Header} details={section1Details} />
      <PageRouteSection header={section2Header} details={section2Details} />
      <PageRouteSection header={section3Header} details={section3Details} />
      <PageRouteSection header={section4Header} details={section4Details} />
    </Layout>
  )
}

export default Route
