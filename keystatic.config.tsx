import { BASE_CONFIG } from '@config/config'
import { config } from '@keystatic/core'
import { keystaticFaqsConfig } from '@shared/cms/faqs.keystatic'
import { keystaticFaqspageConfig } from '@shared/cms/faqspage.keystatic'
import { keystaticHomepageConfig } from '@shared/cms/homepage.keystatic'
import { keystaticHomepageFactsConfig } from '@shared/cms/homepageFacts.keystatic'
import { keystaticHomepageHeroConfig } from '@shared/cms/homepageHero.keystatic'
import { keystaticHomepageMilestonesConfig } from '@shared/cms/homepageMilestones.keystatic'
import { keystaticHomepageQuotesConfig } from '@shared/cms/homepageQuotes.keystatic'
import { keystaticImprintpageConfig } from '@shared/cms/imprintpage.keystatic'
import { keystaticLogosPartnersConfig } from '@shared/cms/logosPartners.keystatic'
import { keystaticLogosSponsorsConfig } from '@shared/cms/logosSponsors.keystatic'
import { keystaticLogoWebsiteConfig } from '@shared/cms/logoWebsite.keystatic'
import { keystaticMapImagesConfig } from '@shared/cms/mapImages.keystatic'
import { keystaticPrivacypolicypageConfig } from '@shared/cms/privacypolicypage.keystatic'
import { keystaticRoutegeometries } from '@shared/cms/routegeometries.keystatic'
import { keystaticRoutepageConfig } from '@shared/cms/routepage.keystatic'
import { keystaticRoutesegmentdetailsConfig } from '@shared/cms/routesegmentdetails.keystatic'
import { keystaticRoutesegmentsConfig } from '@shared/cms/routesegments.keystatic'
import { keystaticSimplifiedlanguagepageConfig } from '@shared/cms/simplifiedlanguagepage.keystatic'
import { keystaticSurveyresultsConfig } from '@shared/cms/surveyresults.keystatic'
import { keystaticSurveyresultspageConfig } from '@shared/cms/surveyresultspage.keystatic'
import { KEYSTATIC_STORAGE_KIND } from 'astro:env/client'

export default config({
  storage: {
    // https://keystatic.com/docs/github-mode#setting-up-git-hub-mode
    kind: KEYSTATIC_STORAGE_KIND,
    repo: {
      owner: 'FixMyBerlin',
      name: BASE_CONFIG.GITHUB_REPO_NAME,
    },
  },
  ui: {
    brand: {
      name: BASE_CONFIG.CMS_NAME,
      mark: () => <img src={BASE_CONFIG.CMS_LOGO_PATH} height={27} />,
    },
    navigation: {
      Start: ['homepageHero', 'homepage', 'homepageQuotes', 'homepageFacts', 'homepageMilestones'],
      Logos: ['logoWebsite', 'logosSponsors', 'logosPartners'],
      Kartenbilder: ['mapImages'],
      FAQs: ['faqspage', 'faqs'],
      Routen: ['routespage', 'routesegments', 'routesegmentdetails', 'routegeometries'],
      Beteiligungsergebnisse: ['surveyresultspage', 'surveyresults'],
      Verschiedenes: ['imprintpage', 'privacypolicypage'],
    },
  },
  singletons: {
    homepageHero: keystaticHomepageHeroConfig,
    homepage: keystaticHomepageConfig,
    routespage: keystaticRoutepageConfig,
    surveyresultspage: keystaticSurveyresultspageConfig,
    surveyresults: keystaticSurveyresultsConfig,
    faqspage: keystaticFaqspageConfig,
    simplifiedlanguagepage: keystaticSimplifiedlanguagepageConfig,
    imprintpage: keystaticImprintpageConfig,
    privacypolicypage: keystaticPrivacypolicypageConfig,
    logoWebsite: keystaticLogoWebsiteConfig,
  },
  collections: {
    homepageQuotes: keystaticHomepageQuotesConfig,
    homepageFacts: keystaticHomepageFactsConfig,
    homepageMilestones: keystaticHomepageMilestonesConfig,
    logosSponsors: keystaticLogosSponsorsConfig,
    logosPartners: keystaticLogosPartnersConfig,
    mapImages: keystaticMapImagesConfig,
    routesegments: keystaticRoutesegmentsConfig,
    routesegmentdetails: keystaticRoutesegmentdetailsConfig,
    routegeometries: keystaticRoutegeometries,
    faqs: keystaticFaqsConfig,
  },
})
