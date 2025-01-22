import { NAVIGATION_LINKS, type NavigatinItem } from '@config/links'
import { getEntry } from 'astro:content'

export const buildNavigation = async () => {
  // For some pages, we can specify if they are active. We filter them here.
  let navigation: NavigatinItem[] = NAVIGATION_LINKS

  const surveyresultpage = await getEntry('surveyresultspage', 'index')
  if (surveyresultpage?.data?.active === false) {
    navigation = navigation.filter((link) => link.href !== '/beteiligung')
  }

  const faqspage = await getEntry('faqspage', 'index')
  if (faqspage?.data?.active === false) {
    navigation = navigation.filter((link) => link.href !== '/faq')
  }

  const simplifiedLanguage = await getEntry('simplifiedlanguagepage', 'index')
  if (simplifiedLanguage?.data?.active === false) {
    navigation = navigation.filter((link) => link.href !== '/leichte-sprache')
  }

  return navigation
}
