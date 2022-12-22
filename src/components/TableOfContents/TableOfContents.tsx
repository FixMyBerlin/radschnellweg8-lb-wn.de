import { Link } from 'gatsby'
import React from 'react'
import { TocHashLink } from './types'

/*
  We could make this more fancy…
  Here are few good articles.
  - https://blog.openreplay.com/creating-a-table-of-content-widget-in-react
    (and the full code https://codesandbox.io/s/infallible-borg-mqh9df?file=/src/App.tsx:877-963)
    This does not represent highrarcy well, it just intend the second level a bit more.
    Which is OK, since ATM we only have one level.
    Gotcha: The getId method does not work. And a renderToString from react-dom/server does not work with Intl well.
    However, we can just set the ids manually, I guess.
  - https://www.emgoto.com/react-table-of-contents/
    Handles the highrarchy better.
  - https://blog.eyas.sh/2022/03/react-toc/#user-content-fn-1
    Looks OK as well.
  - And then there is the version that is used in fixmy-frontend.
    Which derives the TOC by iterating over children AFAIK. Which IMO is more complexity than we need;
    all the solutions above just use a querySelector.
    */

type Props = { items: TocHashLink }

export const TableOfContents: React.FC<Props> = ({ items }) => {
  return (
    <nav className="marker:text-rs8-pink">
      <ul>
        {items.map(([itemHash, itemlink]) => (
          <li key={itemHash}>
            <Link to={itemHash} className="text-rs8-pink">
              {itemlink}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
