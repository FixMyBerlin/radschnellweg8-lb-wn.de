import { fields, singleton } from '@keystatic/core'

export const keystaticrouteGeoUploadConfig = singleton({
  label: 'Geo-Daten Upload',
  path: 'src/content/routeGeoData/',
  schema: {
    uploadSegements: fields.file({
      label: 'Geo Upload Abschnitte',
      description:
        'JSON-Datei - Dateiendung .json (!) - mit Punktdaten für Detailinfos hochladen. Prozess ist auf /route/admin beschrieben. Mit dem Speichern werden die Daten ersetzt. Übersicht über die Zuordnung undter /route/admin.',
      validation: { isRequired: true },
    }),
    uploadDetails: fields.file({
      label: 'Geo Upload Detailinfos',
      description:
        'JSON-Datei - Dateiendung .json (!) - mit Punktdaten für Detailinfos hochladen. Prozess ist auf /route/admin beschrieben. Mit dem Speichern werden die Daten ersetzt. Übersicht über die Zuordnung undter /route/admin.',
      validation: { isRequired: true },
    }),
  },
})
