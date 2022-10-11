// Node.js program to demonstrate the
// fs.open() Method

// Include the fs module
var fs = require('fs');

console.log("Open file!");

// To open file in write and read mode,
// create file if doesn't exists.
fs.open('log_programa/log_file.txt', 'w+', function (err, f) {
if (err) {
	return console.error(err);
}
});
