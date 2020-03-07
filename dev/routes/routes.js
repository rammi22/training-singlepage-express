// https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers
// https://stackoverflow.com/questions/38681318/express-4-middleware-when-route-is-not-found-finalhandler-not-called-how-to-c

import ShopController from './../app/Controllers/ShopController.js'
import express from 'express'
const router = express.Router()


// Home Page
router.get('/', (req, res) => {
	res.send('<h1>Hello World</h1>')
});

// Shop
router.get('/shop', (req, res) => {
	const controller = new ShopController(req, res);
	return controller.renderShop();
})

// 404 not found
router.use(function (req, res) {
	if (!req.route) {
		res.status(404).send('<h1>Errorrrrr!</h1>')
	}
})

export default router;