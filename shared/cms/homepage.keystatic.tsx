import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticHomepageConfig = singleton({
  entryLayout: 'form',
  label: 'Startseite',
  format: { contentField: 'bodyBeforeQuotes' },
  path: 'src/content/homepage/',
  schema: {
    // META TAGS
    title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
    // MAIN CONTENT
    bodyBeforeQuotes: fields.mdx({
      label: 'Inhalte oberhalb der Zitate',
      components: mdxComponentsKeystatic('homepage'),
      options: { image: false },
    }),
    bodyAfterQuotes: fields.mdx({
      label: 'Inhalt unterhalb der Zitate',
      components: mdxComponentsKeystatic('homepage'),
      options: { image: false },
    }),
    // MILESTONES
    titleMilestones: fields.text({ label: 'Titel der Meilensteine' }),
    bodyAfterMilestones: fields.mdx({
      label: 'Inhalt der Meilensteine',
      components: mdxComponentsKeystatic('homepage'),
      options: { image: false },
    }),
    // PRESS
    titleLinks: fields.text({ label: 'Titel der Linkliste' }),
    links: fields.array(
      fields.object({
        label: fields.text({ label: 'Label', validation: { isRequired: true } }),
        href: fields.url({ label: 'URL', validation: { isRequired: true } }),
      }),
      {
        label: 'Links',
        itemLabel: (props) => `${props.fields.label.value} (${props.fields.href.value})`,
      },
    ),
  },
})
