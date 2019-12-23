let fs = require('fs');
let conf = fs.readFileSync('./server.conf');
let confArr = conf.toString().split('\r\n');
let confObj = {};
for (let i = 0;i<confArr.length;i++) {
    let temp = confArr[i].split('=');
    if (temp.length >= 2) {
        confObj[temp[0]] = temp[1];
    } else {
        continue;
    }
}
if (confObj.file) {
   confObj.file = confObj.file.split('|')
} else {
    throw new Error('配置文件异常，缺少：file')
}
module.exports = confObj;