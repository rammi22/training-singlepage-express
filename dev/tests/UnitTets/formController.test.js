import FormController from "../../app/Controllers/FormController"


test ('failed validateForm', () => {
	// console.log('hallo');
	let form = {
		uname:'abcde', 
		form_name:'false'
	}
	const formController = new FormController(form)
	try {
		formController.validateForm()
	} catch (error) {
		expect(error.message).toBe("Gesendetes Formular ist nicht gültig!");
	}
})

test ('success validateForm', () => {
	let form = {
		uname:'abcde', 
		form_name:'testform'
	}
	const formController = new FormController(form)
	expect(formController.validateForm()).toBe(null)
})

test ('failed validateName', () => {
	let form = {
		uname:null, 
		form_name:'testform'
	}
	const formController = new FormController(form)

	try {
		formController.getValidName()
	} catch (error) {
		expect(error.message).toBe("Gesendetes Format für Name ist nicht gültig!");
	}
})

test ('success validateName', () => {
	let form = {
		uname:'tester', 
		form_name:'testform'
	}
	const formController = new FormController(form)
	expect(formController.getValidName()).toBe(form.uname)
})
