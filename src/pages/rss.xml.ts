import rss from '@astrojs/rss'
import { META } from '@config/config'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  // const navigation = await buildNavigation() // When we add pages to the feed, we need to use the filtered navigation so we don't expose hidden pages.

  return rss({
    title: META.title,
    description: META.description,
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site!,
    // Array of `<item>`s in output xml
    // See https://docs.astro.build/en/guides/rss/#using-content-collections
    items: [],
  })
}
