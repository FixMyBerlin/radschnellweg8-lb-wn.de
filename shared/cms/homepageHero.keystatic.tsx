import { fields, singleton } from '@keystatic/core'

export const keystaticHomepageHeroConfig = singleton({
  // entryLayout: 'form',
  label: 'Startseite Banner',
  // format: { contentField: 'content' },
  path: 'src/content/homepageHero/',
  schema: {
    // Docs: https://keystatic.com/docs/fields/conditional
    participation: fields.conditional(
      // FIELD CONDITION
      fields.checkbox({ label: '[Beteiligung] Aktiv' }),
      {
        // FIELDS WHEN TRUE
        true: fields.object(
          {
            participationHref: fields.url({
              label: '[Beteiligung] Link zur Beteiligung',
              description:
                '(!) Bitte nur verwenden, wenn eine Beteiligung aktiv ist. Wenn dieses Feld gefüllt ist, werden die anderen Felder (bis auf das Bild) ignoriert.',
              validation: { isRequired: true },
            }),
            participationText: fields.text({
              label: '[Beteiligung] Title',
              description: '(!) Wird nur verwendet, wenn ein Link zur Beteiligung gesetzt ist.',
              validation: { isRequired: true },
            }),
          },
          {
            label: '[Beteiligung]',
            description:
              'Diese Sektion tauscht das reguläre Hero-Element aus durch eine Version die zur Beteiligung verlinkt.',
          },
        ),
        // FIELDS WHEN FALSE
        false: fields.empty(),
      },
    ),
    title1: fields.text({
      label: 'Titel Zeile 1',
      validation: { length: { min: 1, max: 80 } },
    }),
    title2: fields.text({
      label: 'Title Zeile 2',
      validation: { length: { max: 160 } },
    }),
    waypoints: fields.array(fields.text({ label: 'Wegpunkte' }), {
      label: 'Wegpunkt',
      itemLabel: (props) => props.value,
    }),
    image: fields.image({
      label: 'Bild',
      description: 'Bild bitte im Format 800x500px hochladen.',
      directory: 'src/content/homepageHero',
      publicPath: '../../content/homepageHero',
      validation: { isRequired: true },
      // transformFilename: () => 'hero', // filename will be "image" for some reason, which is fine
    }),
    imageCopyright: fields.text({
      label: 'Bild Quellennachweis',
      description: 'Format: Foto ©TEXT',
    }),
  },
})
