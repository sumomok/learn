let net = require('net');
let globalConf = require('./conf.js');
let fs = require('fs');
let server = net.createServer();
server.listen(globalConf.port,'127.0.0.1');
server.on('listening',e=>{
    console.log('服务已启动' + e)
})
server.on('connection',socket=>{
    console.log('有新的连接')
    socket.on('data',function (data) {
        // console.log(data.toString());
        let url = data.toString().split('\r\n')[0].split(' ')[1];
        console.log(globalConf.basePath);
        try {

            let data = fs.readFileSync(globalConf.basePath + url);
            socket.write("HTTP/1.1 200OK\r\n\r\n")
            socket.write(data)
        }catch (e) {
            socket.write("HTTP/1.1 404NotFound\r\n\r\n" + "<html><body>404 NOT Found</body></html>")
        }
        socket.end();
    })
})


