export type navigationMenuItemProps = { name: string; to: string }

export const navigationLinks: navigationMenuItemProps[] = [
  { name: 'Startseite', to: '/' },
  { name: 'Hintergrund', to: '/hintergrund/' },
  { name: 'Beteiligung', to: '/beteiligung/' },
  { name: 'Login', to: 'https://radschnellweg-tool.de/' },
]
