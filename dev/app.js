import AppController from './app/Controllers/AppController.js'
import compression from 'compression'
import express from 'express'
const expressApp = express()
const appController = new AppController(expressApp)

expressApp.use(compression())
expressApp.use(express.static('public'))

appController.runApp();