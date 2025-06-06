export const META = {
  title: 'Radschnellweg 8 | Der neue Radschnellweg von Ludwigsburg nach Waiblingen',
  description:
    'Zwischen Waiblingen und Ludwigsburg entsteht der Radschnellweg RS 8. Informiere dich jetzt und hilf mit bei der Planung für einen besseren (Radschnell-)Weg in die Zukunft!',
}

/** @desc Enable/disable matomo tracking */
export const USE_MATOMO: boolean = true

export const BASE_CONFIG = {
  CMS_NAME: 'RS8',
  CMS_LOGO_PATH: '/icons/icon-48x48.png',
  GITHUB_REPO_NAME: 'radschnellweg8-lb-wn.de',
  PRODUCTION_URL: 'https://radschnellweg8-lb-wn.de',
  META,
  USE_MATOMO,
  TRASSENSCOUT_PROJECT_API_URL: ['https://trassenscout.de/api/projects/rs8'],
}
