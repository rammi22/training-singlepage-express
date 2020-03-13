/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/Controllers/ShopController.js":
/*!*************************************************!*\
  !*** ./assets/js/Controllers/ShopController.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ShopController; });\nclass ShopController {\r\n\r\n\tconstructor (shop, document) {\r\n\t\tthis.document = document;\r\n\t\tthis.shop = shop;\r\n\t}\t\r\n\r\n\tvalidateAccess () {\r\n\t\t// if (!this.document.querySelector('body#tpl_shop')) {\r\n\t\t// \tthrow new Error ()\r\n\t\t// }\r\n\t}\r\n\r\n\trender () {\r\n\t\tconst oldChild = this.document.querySelector('main');\r\n\t\tconst newChild = this.document.createElement('main');\r\n\t\tthis.document.querySelector('body').id = \"tpl_shop\";\r\n\t\tnewChild.appendChild(this.shop.getHtml());\r\n\r\n\t\treturn oldChild.parentNode.replaceChild(newChild, oldChild);\t\t\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./assets/js/Controllers/ShopController.js?");

/***/ }),

/***/ "./assets/js/Entities/MainNavigation.js":
/*!**********************************************!*\
  !*** ./assets/js/Entities/MainNavigation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainNavigation; });\n/* harmony import */ var _Entities_Shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Entities/Shop */ \"./assets/js/Entities/Shop.js\");\n/* harmony import */ var _Controllers_ShopController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Controllers/ShopController */ \"./assets/js/Controllers/ShopController.js\");\n\r\n\r\n\r\nclass MainNavigation {\r\n\r\n\tconstructor () {\r\n\t\tthis.currentHTML = '<h1>Current HTML</h1>'\r\n\t\tthis.document = document \r\n\t\tthis.navigationItems = this.document.querySelectorAll('a.client-render')\r\n\t}\r\n\r\n\tinitialize () {\r\n\t\tthis.navigationItems.forEach((element) => {\r\n\t\t\telement.addEventListener('click', (event) => {\r\n\t\t\t\tevent.preventDefault();\r\n\t\t\t\tconst {destination} = event.target.dataset;\r\n\t\t\t\tthis.handleClickedElement(destination);\r\n\t\t\t})\r\n\t\t})\r\n\t}\r\n\r\n\thandleClickedElement (destination) {\r\n\t\tlet controller = {};\r\n\t\tif (destination === 'shop') {\r\n\t\t\tcontroller = new _Controllers_ShopController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _Entities_Shop__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.document), this.document);\t\t\t\r\n\t\t}\r\n\r\n\t\ttry {\r\n\t\t\tif (typeof controller.render !== 'function') {\r\n\t\t\t\tthrow new Error('Method renders missing');\r\n\t\t\t}\r\n\t\t\tReflect.apply(controller.render, controller, [])\r\n\t\t} catch (error) {\r\n\t\t\tconsole.log('ERROR: ' + error.message);\r\n\t\t}\r\n\t\treturn \r\n\t}\r\n\r\n\tgetCurrentHtml () {\r\n\t\treturn this.currentHTML;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./assets/js/Entities/MainNavigation.js?");

/***/ }),

/***/ "./assets/js/Entities/Shop.js":
/*!************************************!*\
  !*** ./assets/js/Entities/Shop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Shop; });\nclass Shop {\r\n\tconstructor (document) {\r\n\t\tthis.document = document;\r\n\t\tthis.setTitle();\r\n\t}\r\n\r\n\tgetHtml () {\r\n\t\tconsole.log(this.getTitle())\r\n\t\treturn this.getTitle()\r\n\t}\r\n\r\n\tsetTitle () {\r\n\t\tthis.title = this.document.createElement('h1')\r\n\t\tthis.title.innerText = 'Welcome::Shop';\r\n\t}\r\n\r\n\tgetTitle () {\r\n\t\treturn this.title;\r\n\t}\r\n}\n\n//# sourceURL=webpack:///./assets/js/Entities/Shop.js?");

/***/ }),

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Entities_MainNavigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Entities/MainNavigation.js */ \"./assets/js/Entities/MainNavigation.js\");\n\r\n\r\nclass App {\r\n\tstatic initialize () {\r\n\t\t// handle browser history\r\n\t\tconst serializer = new XMLSerializer();\r\n\t\tthis.popstateHTML = serializer.serializeToString(document);\r\n\t\twindow.addEventListener('popstate', () => {\r\n\t\t\tconsole.log(this.popstateHTML);\r\n\t\t\tReflect.apply(App.setPopstateContent, this, [])\r\n\t\t\tconsole.log(this.popstateHTML);\r\n\t\t});\r\n\t\t// navigate inside client application\r\n\t\tthis.mainNavigation = new _js_Entities_MainNavigation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\t\tthis.mainNavigation.initialize()\r\n\t\treturn\r\n\t}\r\n\r\n\tstatic setPopstateContent () {\r\n\t\tthis.popstateHTML = this.mainNavigation.getCurrentHtml()\r\n\t}\r\n\r\n}\r\n\r\nApp.initialize()\n\n//# sourceURL=webpack:///./assets/main.js?");

/***/ })

/******/ });