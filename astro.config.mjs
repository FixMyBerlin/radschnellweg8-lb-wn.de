import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import matomo from 'astro-matomo'
import { defineConfig, envField } from 'astro/config'
import rehypeExternalLinks from 'rehype-external-links'
import { USE_MATOMO } from './config/config'

// ABOUT:
// We have to fetch settings from `.env`
// Which we have to do manually, see https://docs.astro.build/en/guides/configuring-astro/#environment-variables
//
// USAGE:
// `npm run dev` uses hybrid mode and keystatic()
// `npm run build` (server) is based on .env and has different settings for Netlify (CMS/Keystatic) vs. IONOS (Static site)
// `npm run build:local && npm run serve` overwrites the .env settings to have a local test case for what is on IONOS
import { loadEnv } from 'vite'
const { ASTRO_OUTPUT_MODE, ASTRO_USE_NETLIFY_ADAPTER } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  '',
)

// CONFIG:
// https://astro.build/config
export default defineConfig({
  // Take the Netlify Deploy URL or fall back to production (Docs https://docs.netlify.com/configure-builds/environment-variables/#deploy-urls-and-metadata)
  // Used as `Astro.site!.origin` in <Layout>
  // todo migration
  site: process.env.URL ?? 'https://radschnellweg8-lb-wn.de',
  integrations: [
    ASTRO_OUTPUT_MODE === 'static' ? undefined : keystatic(),
    tailwind(),
    react(),
    mdx(),
    sitemap(), // We don't exclute inactive pages but rely on the per page `noindex`
    USE_MATOMO
      ? matomo({
          // Docs https://github.com/felix-berlin/astro-matomo
          enabled: true, // Always enabled, but sending to a non-existing siteId unles Production
          siteId: import.meta.env.PROD ? 11 : 999,
          debug: !import.meta.env.PROD,
          host: 'https://s.fixmycity.de/',
          disableCookies: true,
        })
      : undefined,
  ],
  // On Netlify and during development we use `hybrid`, on Github Pages we usd `static`.
  // Using static makes sure features like Astros redirecting work as expected.
  // Docs https://docs.astro.build/en/basics/rendering-modes/
  output: ASTRO_OUTPUT_MODE,
  adapter: ASTRO_USE_NETLIFY_ADAPTER === 'true' ? netlify() : undefined,
  redirects: {},

  // LATER: Find an elegent way to redirect trailing slashes
  // Why: We want the site to always use one format (no trailing slashes)
  // to improve SEO but also make "currentPage" checks easier.
  // However, this setup below does not work, yet.
  // See https://github.com/withastro/astro/issues/12532 for more.
  //
  // redirects: {
  //   '/beteiligung/': '/beteiligung',
  //   '/datenschutz/': '/datenschutz',
  //   '/faq/': '/faq',
  //   '/impressum/': '/impressum',
  //   '/leichte-sprache/': '/leichte-sprache',
  //   '/route/': '/route',
  // },
  // trailingSlash: 'never',
  // build: { format: 'file' },

  markdown: {
    rehypePlugins: [
      // Docs: https://docs.astro.build/en/recipes/external-links/
      // Docs: https://github.com/rehypejs/rehype-external-links
      [rehypeExternalLinks, { target: '_blank' }],
    ],
  },

  env: {
    schema: {
      ASTRO_OUTPUT_MODE: envField.enum({
        values: ['static', 'server'],
        access: 'secret',
        context: 'server',
        optional: false,
      }),
      ASTRO_USE_NETLIFY_ADAPTER: envField.boolean({
        access: 'secret',
        context: 'server',
        optional: false,
      }),
      KEYSTATIC_STORAGE_KIND: envField.enum({
        values: ['local', 'github'],
        access: 'public',
        context: 'client',
        optional: false,
      }),
      ASTRO_ENV: envField.enum({
        values: ['development', 'staging', 'production'],
        access: 'public',
        context: 'client',
        optional: false,
      }),
    },
  },
})
