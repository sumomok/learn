const { createReadStream } = require('fs');
const { resolve} = require('path');
const rs = createReadStream(resolve(__dirname, '1.txt'), {
    encoding: 'utf-8',
    highWaterMark:1 * 1024
});

rs.on('open', e => {
    console.log('打开了'+e);
})
rs.on('close', e => console.log('关闭了' + e));
rs.on('data', e => console.log(e + 1));
rs.on('error', e => console(e));
rs.on('end', e => console.log('读取结束'));
rs.pause() // 触发pause事件
rs.resume() // 触发resume事件