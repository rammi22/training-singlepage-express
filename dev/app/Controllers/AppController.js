import {AbstractController} from './AbstractController.js'
import router from './../../routes/routes.js'

export default class AppController extends AbstractController {

	constructor (app) {
		super()
		this.app = app
	}

	runApp () {
		this.app.use(router)
		this.app.listen(3000, () => {
			console.log('app running on 3000')
		})
	}
}