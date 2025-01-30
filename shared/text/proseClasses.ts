import { COLORSCLASSES } from '@config/styles'
import { clsx } from 'clsx'

export const markdownProseClasses = clsx(
  // BASE
  'prose prose-base md:prose-lg',
  'max-w-full', // We always wrap Prose in Section containers, which bring their own max-width
  'text-gray-900',
  // HEADLINES ALL
  'prose-headings:text-balance prose-headings:font-extrabold prose-headings:text-gray-800',
  'prose-headings:mb-2 prose-headings:mt-1',
  // HEADLINEs h1
  'prose-h1:mb-5 prose-h1:text-3xl prose-h1:leading-snug prose-h1:md:text-5xl prose-h1:md:leading-snug',
  // HEADLINEs h2
  'prose-h2:mb-4 prose-h2:mt-16 prose-h2:text-2xl prose-h2:leading-snug prose-h2:md:text-3xl prose-h2:md:leading-snug',
  // HEADLINEs h3
  'prose-h3:mb-3 prose-h3:mt-8 prose-h3:text-lg prose-h3:font-semibold prose-h3:leading-snug prose-h3:md:text-xl prose-h3:md:leading-snug',
  // LISTs
  'prose-ul:space-y-1.5 prose-li:m-0 prose-li:p-0',
  // LINKs
  clsx(
    COLORSCLASSES.proseLink,
    'prose-a:underline prose-a:decoration-[1.5px] prose-a:underline-offset-2 prose-a:active:decoration-2',
  ),
)
