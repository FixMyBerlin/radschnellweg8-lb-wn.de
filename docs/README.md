# Anleitung: Beteiligungsergebnisse aus dem Trassenscout übertragen

In Astro/Keystatic haben wir eine Content-Collection [`content/surveyresults`](../src/content/surveyresults/index.json).

In dieser Datei werden die Ergebnisse der Beteiligung abgelegt und für die Darstellugn unter [/beteiligung](../src/pages/beteiligung.astro) sortiert.

Die Keystatic Config liegt unter [keystatic.surveyresults](../keystatic/keystatic.surveyresults.config.tsx).

## Data documentation - data for survey result charts and XLSX on /beteiligung

1. Open [trassenscout.de](https://trassenscout.de/rs8/surveys/1)

   _OR_

   1. run TS locally
   2. get data from production db:

      - `npm run db:getDump`
      - `npm run db:restoreDump`

<!-- todo migration -->

2. Open /rs8/surveys/1

3. Find button at the bottom of the page to copy data to clipboard

_only users with status ADMIN can copy data_

4. Update [`content/surveyresults`](../src/content/surveyresults/index.json)

5. Copy the number of participants manually

## Data update XLSX

1. See above
1. Open /rs8/surveys/1
1. Find buttons at the bottom of the page to download CSVs
1. manually export an xlsx file with three sheets (each CSV)
1. replace the `xlsx`-file in public dir
