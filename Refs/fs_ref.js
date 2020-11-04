const path = require('path') 
const fs = require('fs')

fs.mkdir(path.join(__dirname,'Notes'), err => {
if (err) {
    (err.code == "EEXIST") ? console.error('Folder already exists'):console.log(err);
}
else {
    console.log('Folder is created');
}})