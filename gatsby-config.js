module.exports = {
  // Required by 'gatsby-plugin-sitemap' Plugin
  siteMetadata: {
    title: 'Radschnellweg 8 | Ludwigsburg - Waiblingen',
    siteUrl: 'https://radschnellweg8-lb-wb.de',
  },

  // https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/#trailingslash-is-set-to-always
  trailingSlash: `always`,

  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)

  plugins: [
    // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-image/
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    // TailwindCSS needs PostCSS, https://tailwindcss.com/docs/guides/gatsby
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/
      // https://radschnellweg8-lb-wb.de/sitemap-index.xml // only links
      // https://radschnellweg8-lb-wb.de/sitemap-0.xml // content
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/impressum/', '/datenschutz/'],
      },
    },
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          // include: /\.inline\.svg$/,
          // Remove SVG props that fail conversion to dom
          omitKeys: ['xmlnsSerif', 'serifId'],
        },
      },
    },
    {
      // Docs https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Radschnellweg 8 | Der neue Radschnellweg von Ludwigsburg nach Waiblingen',
        short_name: 'RS 8',
        start_url: '/',
        background_color: 'white',
        display: 'minimal-ui', // https://developer.mozilla.org/en-US/docs/Web/Manifest/display#values
        legacy: false,
        theme_color: '#e6007e',
        icon: 'src/images/rsv8-logo.png',
        lang: 'de-DE', // https://developer.mozilla.org/en-US/docs/Web/Manifest/lang
      },
    },
  ],
}
