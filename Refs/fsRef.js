const path = require('path') 
const fs = require('fs')

fs.mkdir(path.join(__dirname,'Notes'), err => {
if (err) {
    (err.code == "EEXIST") ? console.error('Folder already exists'):console.log(err);
}
else {
    console.log('Folder is created');
}})

/*
fs.appendFile('fs_ref.js', ' Content from appendFile', err => {
if (err) throw err
console.log('File was edited');
})


fs.readFile('fs_ref.js', 'utf-8', (err,data) => {
    if (err) throw err
    console.log(data);
})

fs.rename('fs_ref.js', 'fsRef.js', err => {
    if (err) throw err
    console.log('File was renamed');
})
*/