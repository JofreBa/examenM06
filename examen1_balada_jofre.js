// Node.js program to demonstrate the
// fs.mkdir() Method

// Include fs and path module
const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'log_programa'), (err) => {
	if (err) {
		return console.error("Directory already exists in : "+__dirname);
	}
	console.log('Directory log_programa created successfully in : '+__dirname);
});
