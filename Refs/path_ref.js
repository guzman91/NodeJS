const path = require('path')
const fs = require('fs')

console.log('\nfilename: ',__filename);
console.log('path.basename: ',path.basename(__filename));
console.log('path.dirname: ',path.dirname(__filename));
console.log('path.extname: ',path.extname(__filename));

console.log('path.parse: ',path.parse(__filename));

console.log('path.join: ',path.join(__dirname, 'test','third.html'));
console.log('path.resolve: ',path.resolve(__dirname, 'test','third.html'),'\n');


fs.mkdir(path.join(__dirname,'Notes'), err => {
if (err) throw new Error(err)

console.log('Folder is created');
})

