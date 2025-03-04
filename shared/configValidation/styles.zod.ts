import { COLORS, COLORSCLASSES, LINKCLASSES } from '@config/styles'
import { z } from 'astro/zod'

const zodLINKCLASSES = z
  .object({
    link: z.string(),
    button: z.string(),
  })
  .strict()

export const zodCOLORSCLASSES = z
  .object({
    proseLink: z.string(),
    heroTextBg: z.string(),
    heroImageOverlay: z.string(),
    factsBg: z.string(),
    factNumber: z.string(),
    factDesc: z.string(),
    faqNumberBg: z.string(),
    milestoneHeadline: z.string(),
    scrollTopLink: z.string(),
    navigatorText: z.string(),
    navigationUnderline: z.string(),
    navigatorMobileLink: z.string(),
    quotesButton: z.string(),
    quotesPersonName: z.string(),
    quotesPersonPosition: z.string(),
    pageNoteFoundTitle: z.string(),
    routesListMarker: z.string(),
    barChartFill: z.string(),
    mapStatusIdea: z.string(),
    mapStatusCheck: z.string(),
    mapStatusPlanning: z.string(),
    mapStatusInProgress: z.string(),
    mapStatusDone: z.string(),
    legendSimpleMap: z.string(),
  })
  .strict()

export const zodCOLORS = z
  .object({
    heroPin: z.string(),
    milestoneDone: z.string(),
    mapDefault: z.string(),
    mapStatusIdea: z.string(),
    mapStatusCheck: z.string(),
    mapStatusPlanning: z.string(),
    mapStatusInProgress: z.string(),
    mapStatusDone: z.string(),
  })
  .strict()

export const validateStyles = () => {
  zodLINKCLASSES.parse(LINKCLASSES)
  zodCOLORSCLASSES.parse(COLORSCLASSES)
  zodCOLORS.parse(COLORS)
  return true
}
