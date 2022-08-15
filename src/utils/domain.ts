export const domain = () => {
  const ssrDomain =
    process.env.CONTEXT === 'production'
      ? process.env.URL
      : process.env.DEPLOY_PRIME_URL
  const ssrFallback = 'https://radschnellweg8-lb-wn.de'

  // We do this, to get the SSR domain. However, rehydration will use this utility as well,
  // so for that case, we need to take the current hostname.
  const browserDomain = typeof window !== 'undefined' && window.location.origin

  return browserDomain || ssrDomain || ssrFallback
}
