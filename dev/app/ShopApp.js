import express from 'express'
import http from 'http'
import requestController from './Controllers/RequestController.js'
import routes from './../routes.js'

export default class ShopApp {
	constructor (expressApp) {
		if (typeof expressApp !== 'function') {
			throw new Error('Wrong parameter');
		}
		if (typeof ShopApp.instance === 'object') {
			this.instance = ShopApp.instance;
			// NOTE: cannot return from constructor, so i have to call a function with return 
			this.returnInstance();
		} else {
			this.expressApp = expressApp;
			this.requestController = requestController.getInstance(express.Router);
			this.http = http;
			ShopApp.instance = this;
		}
	}

	returnInstance () {
		return this.instance;
	}

	static getInstance () {
		const expressApp = express();
		ShopApp.instance = new ShopApp(expressApp);		
		ShopApp.getInstance = function () {
			return ShopApp.instance;
		}
		return ShopApp.instance;
	}

	run () {
		// https://riptutorial.com/Download/node-js-de.pdf Hallo Weltgrundrouting
		this.http.createServer(function (request, response) {
			if (request.url in routes) {	
				return routes[request.url](request, response, http)
			}
			response.writeHead(404)
			return response.end('Resource not found')
		}).listen(3000);
	}
}