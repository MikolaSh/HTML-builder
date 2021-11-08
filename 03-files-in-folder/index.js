
let fs = require('fs')
const path = require('path')
console.log(__dirname+'/secret-folder')

fs.readdir(__dirname+'/secret-folder', function(err, items) {
    console.log(items);
    items.forEach(function(item){
        fs.stat(__dirname+'/secret-folder/'+item, function(err, stats){
            if(stats.isFile()){
                console.log(path.basename(item)+' - '+path.extname(item)+' - '+stats.size+'b') 
            }
        })
    })
});