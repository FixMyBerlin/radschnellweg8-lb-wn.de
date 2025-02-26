# About rs 8

- [Website radschnellweg8-lb-wn.de](radschnellweg8-lb-wn.de)
<!-- todo migration add cms link -->

# Project structure

## `/config`

Site specific data for styling and content (that is not managed by the CMS).

**Validation:** Those files are [validated using zod](shared/configValidation/) to make sure all other RSV sites have the same config structure so the shared components can rely on them.

## `/shared`, `/keystatic`

Shared components and data. Mindset: Everything in there can be replaced with the content from another RSV sites at any time.

## `/src/content`

Content managed by Keystatic / the CMS. Different for each project of this kind.

## `/src/pages`

Astro Pages taht take content from Keystatic and render it. Those pages should be the same for all sites of this kind.

# Notes

- RSS feeds are drafted but not implemented, yet. We should add them once we add a blog to the page.
