import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import deskStructure from './desk-structure';

export default defineConfig({
  name: 'default',
  title: 'Kystlaget Øster Riisøer',

  projectId: '43t0dvsm',
  dataset: 'production',

  plugins: [deskTool({
    structure: deskStructure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
