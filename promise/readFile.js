var Promise = require("promise");
var fs = require("fs");

function readTxtFile(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, { encoding: 'utf8' }, (error, data) => {
			if (error) { reject(error); }
			resolve(data);
		});
	});
}

readTxtFile("file.txt")
.then(text => {
	console.log(text);
})
.catch(error => {
	console.log(error);
})