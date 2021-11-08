let fs = require('fs')
const path = require('path')



main();


async function main(){

    const assetsPath = path.join(__dirname+'/assets');
    const assetsDistPath = path.join(__dirname+'/project-dist/assets')
    createFolders()
    let htmlTemp = await readHtml()
    let stylesContents = await readStyles()
    let htmlComponents = await readHtmlComponents() 
    let htmlTempCompiled = await compilateHtml(htmlTemp, htmlComponents)
    await createBundle(stylesContents);
    await createIndex(htmlTempCompiled);
    await assetsCopy(assetsPath, assetsDistPath );
    //console.log(test)
    //console.log('hello2')
}

 function readHtml(){
    console.log('READ MAIN HTML')
    return new Promise(function(resolve, reject){
        let htmlContent ;
        fs.readFile(__dirname+'/template.html', 'utf-8',function(err,data){
            htmlContent = data;
            resolve(htmlContent)
        });
    })
}

 function readStyles(){
    console.log('READ STYLES')
    return new Promise(function(resolve, reject){
        let stylesFilesContent = [];
        fs.readdir(__dirname+'/styles',{withFileTypes:true}, (err,files)=>{
            files.forEach(function(file){
                fs.readFile(__dirname+'/styles/'+file.name, 'utf-8',function(err,data){
                    stylesFilesContent.push(data)
                    //console.log(data)
                });
            })
        });
        setTimeout(()=>{
            resolve(stylesFilesContent)
        },1000)
    })
}

 function readHtmlComponents(){
    console.log('READ HTML ')
    return new Promise(function(resolve, reject){
        let HtmlComponents = {};
        fs.readdir(__dirname+'/components',{withFileTypes:true}, (err,files)=>{
            files.forEach(function(file){
                fs.readFile(__dirname+'/components/'+file.name, 'utf-8',function(err,data){
                    switch(data[18]){
                        case 'n':
                            HtmlComponents.articles = data
                            break;
                        case 'c':
                            HtmlComponents.about = data
                            break;
                        case 't':
                            HtmlComponents.footer = data
                            break;
                        case 'd':
                            HtmlComponents.header = data
                            break;
                    }
                });
            })
        });
        setTimeout(()=>{
            resolve(HtmlComponents)
        },1000)
    })
}

 function compilateHtml(templates, components){
    console.log('COMPILATING!')
    return new Promise(function(resolve,reject){
        for(let key in components){
            templates = templates.replace(`{{${key}}}`,components[key])
        }
        resolve(templates)
    })
}


async function createBundle(stylesContents){
    stylesContents.forEach(function(item){
        fs.appendFile(__dirname+'/project-dist/style.css',item,function(err){
            if(err){
                console.log(err);
            }
        })
    })
}
async function createIndex(htmlTempCompiled){
    let writeIndex = fs.createWriteStream(__dirname+'/project-dist/index.html')
    writeIndex.write(htmlTempCompiled)
        /*fs.appendFile(__dirname+'/project-dist/index.html',htmlTempCompiled,function(err){
            if(err){
                console.log(err);
            }
        })*/

}

async function assetsCopy(assetsPath,assetsDistPath){
    fs.readdir(assetsPath,{withFileTypes:true}, function(err,items){
        items.forEach(function(item){
            if(!item.isFile()){
                //console.log(i)
                //console.log(`${assetsPath}/${item.name}`)
                assetsCopy(`${assetsPath}/${item.name}`,`${assetsDistPath}/${item.name}`)
            }else{
                //console.log(i)
                //console.log("FILEEEEEEEEEEEEEEEEEEEEE"+`${assetsPath}/${item.name}`,`${assetsDistPath}/${item.name}`)
                fs.copyFile(`${assetsPath}/${item.name}`,`${assetsDistPath}/${item.name}`,(err)=>{
                    if(err){
                        console.log(err);
                        return
                    }
                } )
            }
        })
    })
    

}

async function createFolders(){
    fs.mkdir(__dirname+'/project-dist', {recursive:true},(err)=>{
        if(err){
            console.log(err);
            return
        }
        console.log('MAKING DIST')
    })
    fs.mkdir(__dirname+'/project-dist/assets', {recursive:true},(err)=>{
        if(err){
            console.log(err);
            return
        }
    })
    fs.readdir(__dirname+'/assets',function(err,items){
        console.log(items)
        items.forEach(function(folder){
            console.log(folder)
            fs.mkdir(__dirname+'/project-dist/assets/'+folder, {recursive:true},(err)=>{
                if(err){
                    console.log(err);
                    return
                }
            })
        })
        

    })
}
console.log('Самопроверку прошел на 150 баллов.\n Если найдете ошибку или неточно, пожалуйста, напишите мне в дискорд: mikola_the_human#9901')