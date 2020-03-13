export default class ShopController {

	constructor (shop, document) {
		this.document = document;
		this.shop = shop;
	}	

	validateAccess () {
		// if (!this.document.querySelector('body#tpl_shop')) {
		// 	throw new Error ()
		// }
	}

	render () {
		const oldChild = this.document.querySelector('main');
		const newChild = this.document.createElement('main');
		this.document.querySelector('body').id = "tpl_shop";
		newChild.appendChild(this.shop.getHtml());

		return oldChild.parentNode.replaceChild(newChild, oldChild);		
	}
}