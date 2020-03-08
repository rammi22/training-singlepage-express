import { resolve } from 'path';

class ShopController {
	constructor (req, res, logger) {
		this.request = req
		this.response = res
		this.logger = logger
	}

	renderShop () {
		// this.logger.info('logging from shop controller')
		return this.response.sendFile(resolve('app/Views/Shop/index.html'))
	}
}

export default ShopController