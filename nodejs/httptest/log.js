let fs = require('fs');
let globalConfig = require('./conf');
module.exports = function (data) {
    let newData = new Date().getFullYear() +'年'+ (new Date().getMonth() + 1) +'月'+ new Date().getDate() + '日' + new Date().getHours() +'时' + new Date().getMinutes() + '分' + new Date().getSeconds() + '秒：'+ data + '\n'
    fs.appendFile(globalConfig["log_path"] + globalConfig['log_name'],newData,function () {

    });
}
