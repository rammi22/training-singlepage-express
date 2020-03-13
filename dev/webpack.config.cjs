const path = require('path');

module.exports = {
	entry: "./assets/main.js",
	mode: 'development',
	target: 'node',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'public/js'),
	}
};