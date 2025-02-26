import { fields, singleton } from '@keystatic/core'
import { mdxComponentsKeystatic } from './components/mdxComponentsKeystatic'

export const keystaticRoutepageConfig = singleton({
  entryLayout: 'form',
  label: 'Routenseite',
  format: { contentField: 'body' },
  path: 'src/content/routepage/',
  schema: {
    title: fields.text({ label: 'Titel', validation: { isRequired: true } }),
    subtitle: fields.text({ label: 'Untertitel' }),
    subPagesActive: fields.checkbox({
      label: 'Unterseiten aktivieren',
      defaultValue: true,
      description:
        'Aktiviert die Anzeige der Abschnitte als Unterseiten. Wenn deaktiviert, werden die Abschnitte auf /route untereinander angezeigt.',
    }),
    body: fields.mdx({
      label: 'Text',
      components: mdxComponentsKeystatic('routepage'),
      options: { image: false },
    }),
  },
})
