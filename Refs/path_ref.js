const path = require('path')
const fs = require('fs')

var data = "const path = require('path') \nconst fs = require('fs')\n\nfs.mkdir(path.join(__dirname,'Notes'), err => {\nif (err) throw err\n\nconsole.log('Folder is created');\n})"

console.log('\nfilename: ',__filename);
console.log('path.basename: ',path.basename(__filename));
console.log('path.dirname: ',path.dirname(__filename));
console.log('path.extname: ',path.extname(__filename));

console.log('path.parse: ',path.parse(__filename));

console.log('path.join: ',path.join(__dirname, 'test','third.html'));
console.log('path.resolve: ',path.resolve(__dirname, 'test','third.html'),'\n');

//Create Folder
fs.mkdir(path.join(__dirname,'Notes'), err => {
if (err) throw err

console.log('Folder is created');
})


//Create File 
/*
fs.writeFile('fs_ref.js', data, err => {

    if (err) throw err;
    console.log('File is created');
})
*/