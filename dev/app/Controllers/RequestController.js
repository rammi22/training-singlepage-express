export default class RequestController {

	constructor () {
		if (typeof RequestController.instance === 'object') {
			this.instance = RequestController.instance;
			this.returnInstance(RequestController.instance);
		} else {
			RequestController.instance = this;
		}


	}

	returnInstance () {
		return this.instance;
	}

	static getInstance (router) {
		this.router = router;
		RequestController.instance = new RequestController();
		RequestController.getInstance = function () {
			return RequestController.instance;
		}
		return RequestController.instance;
	}
}