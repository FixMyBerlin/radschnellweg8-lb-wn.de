import { writeFile } from 'fs/promises'
import { API_URL } from '../../config/map.mjs'

export async function fetchAndSaveGeoJSON() {
  try {
    console.log('Fetching GeoJSON from API...')
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`)
    }

    const geojson = await response.json()

    const filePath = 'data/routesegments/geometry.json'

    await writeFile(filePath, JSON.stringify(geojson, null, 2))
    console.log(`GeoJSON saved successfully to ${filePath}`)
  } catch (error) {
    console.error('Error fetching or saving GeoJSON:', error)
  }
}

fetchAndSaveGeoJSON()
