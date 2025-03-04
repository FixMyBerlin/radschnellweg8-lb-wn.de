# Geodaten Update

## Linien

Das Update der Linien-Daten, incl. properties "Status", "Datum der Fertigstellung" und "Baulastträger" (für routesegments / "Abschnitte") läuft so:

1. Im Trassenscout (TS):
   - die Planungsabschnitte im Projekt anlegen
   - die Felder "Status", "Datum der Fertigstellung" und "Baulastträger" angeben
   - den Export auf Projektebene aktivieren
2. Im CMS `Abschnitte`
   - die Abschnitte anlegen
   - als `Trassenscout Slug` den Slug des Planungsabschnitts aus dem Trassenscout angeben
3. Die Daten von TS holen:
   - https://staging.trassenscout.de/api/projects/<PROJEKT_SLUG> aufrufen und Datei als .json speichern (Hinweis: das Suffix .json ist richtig)
4. Datei hochladen:
   - im CMS unter `Geo Upload` > `Geo Upload Abschnitte` das neue json hochladen
   - durch Speichern werden die Punktdaten ersetzt
   - **alle bisherigen Daten werden überschrieben**
   - 1 Feature entspricht 1 Abschnitt aus `content/routesegments`
   - fehlende Geometrien zu im CMS angelegten Abschnitten können hier eingesehen werden: `/route/admin`
   - **unter 'Abschnitte' sollten alle Zeilen grün sein**
5. Neu builden:
   - nach dem build werden die neuen Geometrien in der Karte angezeigt
   - die Informationen zu "Status", "Datum der Fertigstellung" und "Baulastträger" sind entsprechend des GeoJSONs aktualisiert

## Punkte

Das Update der Punkt-Daten (für routesegmentdetails / "Detailinfos") läuft so:

1. Im CMS bei `Detailinfos zu Abschnitten`
   - die Detailinfos anlegen
   - bei den Detailinfos, die eine Geometrie haben, als `Detail ID` eine beliebige ID angeben
2. Placemark Play aufrufen: https://play.placemark.io/?load=https://raw.githubusercontent.com/FixMyBerlin/radschnellweg8-lb-wn.de/blob/new-route-pages/src/content/routesegmentdetailsData/upload.json
   - (Und händisch ranzoomen)
3. Die Daten editieren
   - Es können Punkt-Geometrien bearbeitet, gelöscht oder neu angelegt werden
   - Jede Geometrie benötigt eine property detailId des zugehörgen Items aus dem CMS
4. Exportieren: File > Export > GeoJSON
   - Im Dialog zusätzlich "Intent & format" auswählen
   - Dateinamen ändern in: `geometry.json` (Hinweis: Die Änderung des Suffix von .geojson zu .json ist richtig)
5. Datei hochladen:
   - im CMS unter `Geo Upload` > `Geo Upload Detailinfos` das neue json hochladen
   - durch Speichern werden die Punktdaten ersetzt
   - **alle bisherigen Daten werden überschrieben**
   - 1 Feature entspricht 1 Abschnitt aus `content/routesegmentdetails`
   - Übersicht über die Zurodnung zu CMS Items: `/route/admin`
6. Neu builden:
   - nach dem build werden die neuen Geometrien in der Karte (nur bei denen mit Fokus auf Abschnitt) angezeigt

## Abgleich der CMS items der Abschnitte und Detailinfos mit den Featuren aus den GeoJSONs:

Auf der Adminseite /route/admin gibt es Übersicht zum Abgleich.
