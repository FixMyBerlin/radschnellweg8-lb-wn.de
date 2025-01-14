import { validateConfig } from './config.zod'
import { validateStyles } from './styles.zod'

console.log('Validate config')
validateConfig()

console.log('Validate styles')
validateStyles()
