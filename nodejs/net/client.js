let net = require('net');
let socket = net.connect(12306,'127.0.0.1');
socket.on('connect',()=>{
    console.log('服务已连接')
    socket.write('hello, world')
})

