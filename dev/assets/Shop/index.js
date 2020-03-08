export default class shop {
	constructor () {
		this.document = document	
		this.validateAccess()
	}

	validateAccess () {
		if (!this.document.querySelector('body#tpl_shop')) {
			return;
		}

		console.log(
			'irre',
			this.document.getElementById('testButton')
		)
	}
}