import AppController from './app/Controllers/AppController.js'
import express from 'express'

const expressApp = express()
const appController = new AppController(expressApp)
// set public folder for static pages
expressApp.use(express.static('public'))
// run the app
appController.runApp();