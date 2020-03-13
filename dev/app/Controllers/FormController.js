class FormController {
	constructor (form) {
		this.form = form
		this.validFormNames = ['testform']
	}

	validateForm () {
		if (this.validFormNames.indexOf(this.form.form_name) === -1) {
			throw new Error('Gesendetes Formular ist nicht gültig!')
		}
		return null;
	}

	getValidName () {
		if (typeof this.form.uname !== 'string') {
			throw new Error('Gesendetes Format für Name ist nicht gültig!')
		}
		return this.form.uname;
	}
}
export default FormController