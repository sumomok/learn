let fs = require('fs')
let globalConfig = require('./conf.js');
let controllerSet = [];
let files = fs.readdirSync(globalConfig['web_path']);
let pathMap = new Map();
for (let i=0;i<files.length;i++) {
    let temp = require('./' + globalConfig['web_path']+'/'+files[i]);
    if (temp.path) {
        for(let [key,value] of temp.path) {
            if (pathMap.get(key) != null) {
                throw new Error('url重复，url为：' + key)
            } else {
                pathMap.set(key,value)
            }
        }
        controllerSet.push(temp)
    } else {

    }
}
module.exports.path = pathMap;