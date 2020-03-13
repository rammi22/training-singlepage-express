import MainNavigation from './js/Entities/MainNavigation.js'

class App {
	static initialize () {
		// handle browser history
		const serializer = new XMLSerializer();
		this.popstateHTML = serializer.serializeToString(document);
		window.addEventListener('popstate', () => {
			console.log(this.popstateHTML);
			Reflect.apply(App.setPopstateContent, this, [])
			console.log(this.popstateHTML);
		});
		// navigate inside client application
		this.mainNavigation = new MainNavigation();
		this.mainNavigation.initialize()
		return
	}

	static setPopstateContent () {
		this.popstateHTML = this.mainNavigation.getCurrentHtml()
	}

}

App.initialize()