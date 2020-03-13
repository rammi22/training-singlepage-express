import Shop from '../Entities/Shop';
import ShopController from "../Controllers/ShopController";

export default class MainNavigation {

	constructor () {
		this.currentHTML = '<h1>Current HTML</h1>'
		this.document = document 
		this.navigationItems = this.document.querySelectorAll('a.client-render')
	}

	initialize () {
		this.navigationItems.forEach((element) => {
			element.addEventListener('click', (event) => {
				event.preventDefault();
				const {destination} = event.target.dataset;
				this.handleClickedElement(destination);
			})
		})
	}

	handleClickedElement (destination) {
		let controller = {};
		if (destination === 'shop') {
			controller = new ShopController(new Shop(this.document), this.document);			
		}

		try {
			if (typeof controller.render !== 'function') {
				throw new Error('Method renders missing');
			}
			Reflect.apply(controller.render, controller, [])
		} catch (error) {
			console.log('ERROR: ' + error.message);
		}
		return 
	}

	getCurrentHtml () {
		return this.currentHTML;
	}
}