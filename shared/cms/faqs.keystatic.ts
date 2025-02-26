import { collection, fields } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const highlightOptionEnum = ['homepage', 'beteiligung', 'leichte-sprache'] as const
const highlightOptions = [
  { label: 'Startseite', value: 'homepage' },
  { label: 'Auswertung der Beteiligung', value: 'beteiligung' },
  { label: 'Leichte Sprache', value: 'leichte-sprache' },
] as const satisfies Array<{ label: string; value: (typeof highlightOptionEnum)[number] }>

/** @desc We use this do define the categories in Keystatic but also the order in which they are presented in Astro. */
export const categoryEnumAndOrder = [
  'Allgemein',
  'Planung & Bau',
  'Nutzung',
  'Route',
  'Andere Verkehrsteilnehmende',
] as const

export const basePath = 'src/content/faqs'
export const keystaticFaqsConfig = collection({
  label: 'FAQs',
  path: `${basePath}/*`,
  slugField: 'title',
  format: { contentField: 'body' },
  columns: ['title', 'category', 'order'],
  schema: {
    title: fields.slug({ name: { label: 'Titel' } }),
    category: fields.select({
      label: 'Kategorie auf der FAQ-Seite',
      options: categoryEnumAndOrder.map((category) => ({ label: category, value: category })),
      defaultValue: categoryEnumAndOrder[0],
    }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('faqs'),
      options: { image: false },
    }),
    order: fields.number({
      label: 'Sortierung',
      description:
        'FAQ werden nach diesem Wert und dann A-Z sortiert. Dieses Feld nur ändern, wenn FAQs in eine eigene Sortier-Gruppe priorisiert oder depriorisiert werden sollen. Ansonsten den Standard-Wert von 1000 beibehalten.',
      defaultValue: 1000,
    }),
    highlight: fields.multiselect({
      label: 'Seiten, auf denen diese FAQ zusätzlich ausgespielt werden soll',
      options: highlightOptions,
      defaultValue: [],
    }),
  },
})
