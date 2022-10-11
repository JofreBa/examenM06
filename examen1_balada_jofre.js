const fs = require('fs');
const path = require('path');

let data = ""
fs.readdir(__dirname, (err, files) => {
    if(!files.length == 0){
        console.log('San trobat '+files.length+' en el directori'+__dirname);
        files.forEach(file => {
            if (path.extname(file) == ".txt")
              data = data +file
          })
        fs.writeFile("log_file.txt", data, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully\n");
            }
            });
    }else{console.log('No hi han fitxers en el directori'+__dirname)}
   
});




