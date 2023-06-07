import React from 'react'
import { domain } from '~/utils'

// FYI, https://www.gatsbyjs.com/docs/add-seo-component/ suggest to use useStaticQuery but I don't see why, yet
const seoDefaultValues = {
  defaultTitle:
    'Radschnellweg 8 | Der neue Radschnellweg von Ludwigsburg nach Waiblingen',
  defaultDescription:
    'Zwischen Waiblingen und Ludwigsburg entsteht der Radschnellweg RS 8. Informiere dich jetzt und hilf mit bei der Planung für einen besseren (Radschnell-)Weg in die Zukunft!',
}

type SeoProps = {
  noindex?: boolean
  title?: string | null
  description?: string | null
  image?: string | null
  article?: boolean | null
}

export const MetaTags: React.FC<SeoProps> = ({
  noindex = false,
  title,
  description,
  image,
  article,
}) => {
  const { defaultTitle, defaultDescription } = seoDefaultValues

  const seo = {
    title: (title && `${title} | ${defaultTitle}`) || defaultTitle,
    description: description || defaultDescription,
    image: image || `${domain() || ''}/social-sharing/default.jpg`,
  }

  if (noindex === true) {
    return (
      <>
        <title>{seo.title}</title>
        <meta name="robots" content="noindex" />
      </>
    )
  }

  // FYI, we do not inlcude the url meta tags since there was an issue with specs and `useLocation`.
  //  Since we do not need this field, its OK to remove it.
  return (
    <>
      <title>{seo.title}</title>
      <link rel="canonical" href="https://radschnellweg8-lb-wn.de/" />
      <meta property="og:title" content={seo.title} />
      <meta name="twitter:title" content={seo.title} />

      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:description" content={seo.description} />

      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:image" content={seo.image} />

      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}
