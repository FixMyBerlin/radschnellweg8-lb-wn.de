export type NavigatinItem = { name: string; href: string }

export const FOOTER_LINKS = [
  { name: 'Impressum & Kontakt', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutz' },
] as const satisfies NavigatinItem[]

// This is the max list of nav entries.
// We filter it is `buildNavigation` to those that are active ATM
export const NAVIGATION_LINKS = [
  { name: 'Startseite', href: '/' },
  { name: 'Route', href: '/route' },
  { name: 'Beteiligung', href: '/beteiligung' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Leichte Sprache', href: '/leichte-sprache' },
] as const satisfies NavigatinItem[]
