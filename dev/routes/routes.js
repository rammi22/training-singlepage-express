import FormController from './../app/Controllers/FormController.js'
import bodyParser from 'body-parser';
import express from 'express'

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }))

// post request form
router.post('/send-test', (req, res) => {
	try {
		// initialize new from controller
		const formController = new FormController(req.body)
		// validate form
		formController.validateForm()
		// set response message
		let customMessage = 'Hallo ' + formController.getValidName() + ', Grüsse vom Server'
		// execute the response
		res
			.set('content-type', 'application/json')
			.json({
				type:'success', 
				message:customMessage
			})
			.end()
	} catch (error) {
		res
			.status(400)
			.json({
				type:'error',
				message:error.message
			})
			.end()
	}
})

// 400 bad request
router.use(function (req, res) {
	if (!req.route) {
		res
			.status(400)
			.json({
				type:'error',
				message:'Ungültige Anforderung:' + req.originalUrl
			})
			.end()
	}
})

export default router;