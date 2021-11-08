let fs = require('fs')
const path = require('path');

//const stylePath = path.join(__dirname+'/styles');

    fs.readdir(__dirname+'/styles',{withFileTypes:true}, (err,files)=>{
        let stylesArray=[]
        for(let i = 0;i<files.length;i++){
            console.log(stylesArray);

            if(!(files[i].isFile() && path.extname(files[i].name)==='.css')){
               continue
            }
            let readStream = fs.createReadStream(__dirname+'/styles/'+files[i].name, 'utf-8');
            let writeStream = fs.createWriteStream(__dirname+'/project-dist/bundle.css');
            readStream.on('data',function(chunck){
                stylesArray.push(chunck)

            })
        }
        
        setTimeout(()=>{
            stylesArray.forEach(function(item){
                fs.appendFile(__dirname+'/project-dist/bundle.css',item,function(err){
                    if(err){
                        console.log(err);
                    }
                })
            })
        },1000)
        

        
    })







    /*async function readStykes(){
        if(!(files[i].isFile() && path.extname(files[i].name)==='.css')){
            return
         }
         let readStream = fs.createReadStream(__dirname+'/styles/'+files[i].name, 'utf-8');
         let writeStream = fs.createWriteStream(__dirname+'/project-dist/bundle.css'+files[i].name);
         readStream.on('data',function(chunck){
             stylesArray.push(chunck)
             console.log(stylesArray.length)
         })
    }*/
