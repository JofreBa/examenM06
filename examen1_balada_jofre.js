// Node.js program to demonstrate the
// fs.writeFile() method

// Import the filesystem module
const fs = require('fs');


let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log();



let data = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)

fs.writeFile("log_programa/log_file.txt", data, (err) => {
if (err)
	console.log(err);
else {
	console.log("File written successfully\n");
	console.log("The written has the following contents:");
	console.log(fs.readFileSync("log_programa/log_file.txt", "utf8"));
}
});
