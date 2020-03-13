// const fs = require('fs');
import fs from 'fs';

console.log(fs)

export default class LoggerService {
	static writeInfoLog (msg) {

		console.log(fs);
		fs.appendFile('/info.log', msg, function (error) {
			if (error) {
				throw error
			}
			console.log('Updated!');
		})
	}
}