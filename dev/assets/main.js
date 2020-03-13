import FormController from './js/Controllers/FormController.js'

class App {
	static initialize () {
		return new FormController(document);		
	}
}
App.initialize()