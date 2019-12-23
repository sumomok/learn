let http = require('http');
let url = require('url');
let globalConfig = require('./conf.js');
let fs =require('fs')
http.createServer(function(request,response){
    let urlHandle = url.parse(request.url,true)
    let urlAddress = urlHandle.pathname;
    if (isStaticsReguest(urlAddress)) {
        fs.readFileSync(globalConfig.page + )
    } else {
        //动态资源
    }
    let params = urlHandle.query;
}).listen(globalConfig.port);

function isStaticsReguest(pathName) {
    let fileArr = globalConfig.file

    for (let i = 0;i<fileArr.length;i++) {
        console.log(pathName.slice(pathName.length - fileArr[i].length,pathName.length));
        if (pathName.slice(pathName.length - fileArr[i].length,pathName.length).indexOf(fileArr[i]) > -1) {
            return true;
        } else {
            return false;
        }

    }
}