import { PageProps } from 'gatsby'
import React from 'react'
import { LayoutArticle } from '~/components/Layout'
import { Link } from '~/components/Link'
import { RouteMap } from '~/components/Maps/RouteMap/RouteMap'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageRouteIntro } from '~/components/PageRoute'
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
import { Section } from '~/components/PageRoute/Section'
import { HeadingContentPage } from '~/components/Text'

export const Head = () => <MetaTags />

const Route: React.FC<PageProps> = ({ location }) => {
  const menu = [section1Header, section2Header, section3Header, section4Header]

  return (
    <LayoutArticle location={location}>
      <HeadingContentPage>Route</HeadingContentPage>

      <PageRouteIntro />

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
      <Section header={section1Header} details={section1Details} />
      <Section header={section2Header} details={section2Details} />
      <Section header={section3Header} details={section3Details} />
      <Section header={section4Header} details={section4Details} />
    </LayoutArticle>
  )
}

export default Route
