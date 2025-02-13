import { collection, fields } from '@keystatic/core'
import { customIcons } from './components/MapImage/customIcons'

export const keystaticMapImagesConfig = collection({
  label: 'Kartenbilder mit Legenden',
  path: 'src/content/mapImages/*',
  slugField: 'name',
  schema: {
    name: fields.slug({
      name: {
        label: 'Name',
        description:
          'Der Name ist ein rein internes Feld und wird nicht auf der Webseite angezeigt.',
      },
      slug: {
        description:
          '(!) Der Slug darf nicht mehr geändert werden, nachdem die Karte einmal in einem Artikel verwendet wurde. Anderfalls geht die Veknüpfung verloren und muss manuell aktualisiert werden.',
      },
    }),
    image: fields.image({
      label: 'Karte',
      description: 'Mindestes 960px, besser 1.920px',
      directory: 'src/content/mapImages',
      publicPath: '../../content/mapImages',
      validation: { isRequired: true },
    }),
    imageAlt: fields.text({
      label: 'Bild Beschreibung',
      description: 'Wird verwendet für das alt-Attribut des Bildes.',
      validation: { isRequired: false },
    }),
    imageCopyright: fields.text({
      label: 'Bild Quellennachweis',
      description: 'Format: Karte ©OpenStreetMap, ©ANDERE_QUELLE',
      validation: { isRequired: false },
    }),
    legend: fields.array(
      fields.object({
        label: fields.text({ label: 'Legende', validation: { isRequired: true } }),
        shape: fields.select({
          label: 'Form',
          description: "The person's role at the company",
          options: [
            { value: 'line', label: 'Linie' },
            { value: 'circle', label: 'Kreis' },
            { value: 'icon', label: 'Icon' },
          ],
          defaultValue: 'line',
        }),
        color: fields.text({
          label: 'Farbe (Hex)',
          description:
            'Format: #006EFF. Dieses Feld wird ignoriert, wenn als Form "Icon" ausgewählt wurde.',
          validation: { isRequired: true },
        }),
        iconKey: fields.text({
          label: 'Icon Schlüssel',
          description: `Wenn ein besonderes Icon verwendet werden muss, kann hier der Icon Schlüssel angegeben werden. Mögliche Werte sind ${Object.keys(
            customIcons,
          )
            .map((key) => `"${key}"`)
            .join(', ')}.`,
          validation: { isRequired: false },
        }),
      }),
      {
        label: 'Legende',
        itemLabel: (props) => props.fields.label.value,
      },
    ),
  },
})
