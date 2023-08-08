import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {banner, product} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: 'k15ydgxh',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: [banner, product]
  },
})
