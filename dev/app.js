import AppController from './app/Controllers/AppController.js'
import express from 'express'

const expressApp = express()
const appController = new AppController(expressApp)
expressApp.use(express.static('public'))
appController.runApp();