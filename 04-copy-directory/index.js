let fs = require('fs')
const path = require('path')

fs.mkdir(__dirname+'/files_copy', {recursive:true},(err)=>{
    if(err){
        console.log(err);
        return
    }
})
fs.readdir(__dirname+'/files',function(err,items){
    items.forEach(function(item){
        console.log(__dirname+'/'+item)
        fs.copyFile(__dirname+'/files/'+item, __dirname+`/files_copy/${item}`,(err)=>{
            if(err){
                console.log(err);
                return
            }
        } )
    })
})
