// Node.js program to demonstrate the
// fs.readdir() method

// Import the filesystem module
const fs = require('fs');
const path = require('path');

// Function to get current filenames
// in directory with specific extension
fs.readdir(__dirname, (err, files) => {
if (err)
	console.log(err);
else {
	console.log("\Filenames with the .txt extension:");
	files.forEach(file => {
	if (path.extname(file) == ".txt")
		console.log("S'ha llegit el "+file);
	})
}
})
