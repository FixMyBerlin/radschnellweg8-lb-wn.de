import { PageProps } from 'gatsby'
import React from 'react'
import { LayoutArticle } from '~/components/Layout'
import { MetaTags } from '~/components/MetaTags/MetaTags'
import { PageRouteIntro } from '~/components/PageRoute'
import { HeadingContentPage, Link } from '~/components/Text'
import { StaticImage } from 'gatsby-plugin-image'
import {
  section1Header,
  section1Details,
  section2Header,
  section2Details,
} from '~/components/PageRoute/data.const'
import { Section } from '~/components/PageRoute/Section'

export const Head = () => <MetaTags noindex title="Route TODO" />

const Route: React.FC<PageProps> = ({ location }) => {
  const menu = [section1Header, section2Header]

  return (
    <LayoutArticle location={location}>
      <HeadingContentPage>Route</HeadingContentPage>
      <PageRouteIntro />
      <div className="my-10 md:-ml-10 md:-mr-10 md:grid-cols-2 md:gap-4 lg:-ml-48 lg:-mr-48">
        <StaticImage
          src="./../components/PageRoute/assets/demonstrations-teilstueck.jpg"
          alt="Bestehendes Radroutennetz der Stadt Ludwigsburg. © Stadt Ludwigsburg"
        />
      </div>
      <ul className="">
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

      {/* <PageRouteItems /> */}
    </LayoutArticle>
  )
}

export default Route
