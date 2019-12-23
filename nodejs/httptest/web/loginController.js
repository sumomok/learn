let path = new Map();
let studentServer = require('../server/studentServer');
let url = require('url');
let fs =require('fs')
let globalConfig = require('../conf.js');
function getData(request,response) {
    studentServer.queryStudentServer('',function (error,data) {
        if (error) {
            console.log(error);
        } else  {
            response.write(JSON.stringify(data));
            response.end();
        }
    })
}
function login (request,response) {
    // let urlHandle = url.parse(request.url,true)
    request.on('data',function(data){
        let datas = data.toString()
        let userName = datas.split('&')[0].split('=')[1];
        let password =datas.split('&')[1].split('=')[1];
        let userInfo = {
            studentID:userName,
            password:password,
        }
        studentServer.queryStudentPasswordServer(userInfo,function (error,data) {
            if (error) {
                console.log(error);
            } else  {
                if (data == null || data.length == 0 ) {
                    response.write('false')
                    response.end();
                } else if (password == data[0].password) {
                    // let page = fs.readFileSync(globalConfig.page_path +'/main.html')
                    // response.writeHead(302)
                    response.write('true');
                    response.end();
                } else {
                    let page = fs.readFileSync(globalConfig.page_path + '/error.html')
                    response.writeHead(302)
                    response.write('false');
                    response.end();
                }
            }
        })
    })

}
path.set('/getData',getData)
path.set('/login',login)
module.exports.path = path;