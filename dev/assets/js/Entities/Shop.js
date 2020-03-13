export default class Shop {
	constructor (document) {
		this.document = document;
		this.setTitle();
	}

	getHtml () {
		console.log(this.getTitle())
		return this.getTitle()
	}

	setTitle () {
		this.title = this.document.createElement('h1')
		this.title.innerText = 'Welcome::Shop';
	}

	getTitle () {
		return this.title;
	}
}