class FormController {

	constructor	(document) {
		this.document = document;
		this.validFormNames = ['testform']
		this.document.querySelectorAll('form').forEach((element) => {
			element.addEventListener('submit', (event) => {
				event.preventDefault()
				this.form = event.target
				try {
					this.validateForm()
					this.handleSubmit()
				} catch (error) {
					this.displayMessage('error', error.message)
				}				
			})
		}) 
		this.form = {}
	}

	displayMessage (typeMsg, message) {
		const messageBox = this.document.querySelector('div.message');
		let classListMessageBox = messageBox.classList
		if (typeMsg === 'error' ) {
			classListMessageBox.add('alert')
			classListMessageBox.remove('confirm')
		}	
		if (typeMsg === 'success') {
			if (classListMessageBox.contains('alert')) {
				classListMessageBox.remove('alert')
				classListMessageBox.add('confirm')
			}
		}		
		messageBox.innerText = message
	}
	
	validateForm () {		
		if (this.validFormNames.indexOf(this.form.name) === -1) {
			throw new Error('Formular ist nicht gültig!')
		}
	}

	handleSubmit () {
		const formData = new URLSearchParams(new FormData(this.form));
		fetch(this.document.location.href + 'send-test/', {
			method: 'POST',
			headers: {
				'content-type': 'application/x-www-form-urlencoded',
			},
			body: formData,
		}).then((response) => response.json())
			.then((data) => {
				if (data.type === 'error') {
					this.displayMessage('error', data.message)
				}
				if (data.type === 'success') {
					this.displayMessage('success', data.message)
				}
			});
	}
}
export default FormController