let http = require('http');
let url = require('url');
let globalConfig = require('./conf.js');
let fs =require('fs')
let loader = require('./loader.js')
let log = require('./log');
log('服务器配置：' + JSON.stringify(globalConfig))
http.createServer(function(request,response){
    let urlHandle = url.parse(request.url,true)
    let urlAddress = urlHandle.pathname;
    log('访问地址：' +  urlAddress);
    if (isStaticsReguest(urlAddress)) {
        try {
            let page = fs.readFileSync(globalConfig.page_path + urlAddress)
            response.writeHead(200);
            response.write(page);
            response.end();
        } catch (e) {
            log('访问资源不存在');
            response.writeHead(404);
            response.write("<html><body><h1>404 Not Found</h1></body></html>");
            response.end();
        }
    } else {
        if (loader.path.get(urlAddress)) {
            loader.path.get(urlAddress)(request,response);
        } else {
            log('访问资源不存在');
            response.writeHead(404);
            response.write("<html><body><h1>404 Not Found</h1></body></html>");
            response.end();
        }
        //动态资源
    }
    let params = urlHandle.query;

}).listen(globalConfig.port);
log('服务器已启动');
function isStaticsReguest(pathName) {
    let fileArr = globalConfig.file
    for (let i = 0;i<fileArr.length;i++) {
        if (pathName.indexOf(fileArr[i]) > -1) {
            if (pathName.slice(pathName.length - fileArr[i].length,pathName.length).indexOf(fileArr[i]) > -1) {
                return true;
            } else {
                return false;
            }
        }
    }
}