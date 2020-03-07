const path = require('path');

module.exports = {
	entry: './assets/main.js',
	//mode: 'development',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public/js'),
	},
};