# Data documentation - data for survey result charts on /beteiligung

We manually copy the survey data from Trassenscout

## Data update

1. Open [trassenscout.de](trassenscout.de/rs8/surveys/1)

OR

1. run TS locally
2. get data from production db:

- `npm run db:getDump`
- `npm run db:restoreDump`

3. navigate to /rs8/surveys/1

- Find button at the bottom of the page to copy data to clipboard

  _only users with status ADMIN can copy data_

- replace the data hold by surveyResultData in src/components/PageHome/data/survey-result-data.ts
