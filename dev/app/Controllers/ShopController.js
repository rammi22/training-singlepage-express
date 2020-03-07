import { resolve } from 'path';

class ShopController {
	constructor (req, res) {
		this.request = req
		this.response = res
	}

	renderShop () {
		return this.response.sendFile(resolve('app/Views/Shop/index.html'))
	}
}

export default ShopController