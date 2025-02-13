import { fields, singleton } from '@keystatic/core'

export const keystaticroutesegmentdetailsUploadConfig = singleton({
  label: 'Detailinfos Geo Upload',
  path: 'src/content/routesegmentdetailsData/',
  schema: {
    upload: fields.file({
      label: 'Geo Upload',
      description:
        'JSON-Datei - Dateiendung .json (!) - mit Punktdaten für Detailinfos hochladen. Prozess ist hier (TODO Link GH Readme) beschrieben. Mit dem Speichern werden die Daten ersetzt. Übersicht über die Zuordnung undter /route/admin.',
      validation: { isRequired: true },
    }),
  },
})
