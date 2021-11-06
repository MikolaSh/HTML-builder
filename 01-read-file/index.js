let fs = require('fs');
const path = require('path')

let myText = fs.createReadStream(path.join(__dirname + '/text.txt'), 'utf-8');

myText.on('data', function(chunk){
    console.log(chunk);
})