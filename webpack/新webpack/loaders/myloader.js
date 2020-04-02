const {getOptions} = require('loader-utils');
module.exports = function (str){
    let options = getOptions(this);
    console.log(options);
    // 处理str的代码
    return "var a = 1";
}