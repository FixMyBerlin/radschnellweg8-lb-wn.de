import { astroFaqsDefinition } from '@shared/cms/faqs.astro'
import { astroFaqspageDefinition } from '@shared/cms/faqspage.astro'
import { astroHomepageDefinition } from '@shared/cms/homepage.astro'
import { astroHomepageFactsDefinition } from '@shared/cms/homepageFacts.astro'
import { astroHomepageHeroDefinition } from '@shared/cms/homepageHero.astro'
import { astroHomepageMilestonesDefinition } from '@shared/cms/homepageMilestones.astro'
import { astroHomepageQuotesDefinition } from '@shared/cms/homepageQuotes.astro'
import { astroImprintpageDefinition } from '@shared/cms/imprintpage.astro'
import { astroLogosPartnersDefinition } from '@shared/cms/logosPartners.astro'
import { astroLogosSponsorsDefinition } from '@shared/cms/logosSponsors.astro'
import { astroLogoWebsiteDefinition } from '@shared/cms/logoWebsite.astro'
import { astroMapImagesDefinition } from '@shared/cms/mapImages.astro'
import { astroPrivacypolicypageDefinition } from '@shared/cms/privacypolicypage.astro'
import { astroRouteGeometryDefinition } from '@shared/cms/routegeometry.astro'
import { astroRoutepageDefinition } from '@shared/cms/routepage.astro'
import { astroRoutesegmentdetailsDefinition } from '@shared/cms/routesegmentdetails.astro'
import { astroRoutesegmentsDefinition } from '@shared/cms/routesegments.astro'
import { astroSimplifiedlanguagepageDefinition } from '@shared/cms/simplifiedlanguagepage.astro'
import { astroSurveyresultsDefinition } from '@shared/cms/surveyresults.astro'
import { astroSurveyresultspageDefinition } from '@shared/cms/surveyresultspage.astro'

export const collections = {
  // singletons:
  homepageHero: astroHomepageHeroDefinition,
  homepage: astroHomepageDefinition,
  routepage: astroRoutepageDefinition,
  surveyresultspage: astroSurveyresultspageDefinition,
  surveyresults: astroSurveyresultsDefinition,
  faqspage: astroFaqspageDefinition,
  simplifiedlanguagepage: astroSimplifiedlanguagepageDefinition,
  imprintpage: astroImprintpageDefinition,
  privacypolicypage: astroPrivacypolicypageDefinition,
  logoWebsite: astroLogoWebsiteDefinition,
  // collections:
  homepageQuotes: astroHomepageQuotesDefinition,
  homepageFacts: astroHomepageFactsDefinition,
  homepageMilestones: astroHomepageMilestonesDefinition,
  logosSponsors: astroLogosSponsorsDefinition,
  logosPartners: astroLogosPartnersDefinition,
  mapImages: astroMapImagesDefinition,
  routesegments: astroRoutesegmentsDefinition,
  routegeometry: astroRouteGeometryDefinition,
  routesegmentdetails: astroRoutesegmentdetailsDefinition,
  faqs: astroFaqsDefinition,
}
