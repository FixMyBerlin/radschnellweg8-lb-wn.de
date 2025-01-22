import { FONTNAME, GITHUB_REPO_NAME, META } from '@config/config'
import { LINKCLASSES } from '@config/styles'
import { z } from 'astro/zod'

const zodGITHUB_REPO_NAME = z.string()

const zodMETA = z
  .object({
    title: z.string(),
    description: z.string(),
  })
  .strict()

const zodFONTNAME = z.string()

const zodLINKCLASSES = z
  .object({
    link: z.string(),
    button: z.string(),
  })
  .strict()

export const validateConfig = () => {
  zodGITHUB_REPO_NAME.parse(GITHUB_REPO_NAME)
  zodMETA.parse(META)
  zodFONTNAME.parse(FONTNAME)
  zodLINKCLASSES.parse(LINKCLASSES)
  return true
}
