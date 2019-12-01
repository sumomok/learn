let fs = require('fs');
let conf = fs.readFileSync('server.conf')
let globalConf = {};
let confs = conf.toString().split('\r\n');
for (let i=0;i<confs.length;i++) {
    let tempconf = confs[i].split('=');
    if (tempconf.length < 2 ) {
        continue;
    } else {
        globalConf[tempconf[0]] =tempconf[1]
    }
}
if (globalConf.path_position = 'relative') {
    globalConf.basePath = __dirname + globalConf.path;
} else {
    globalConf.basePath = __filename + globalConf.path;
}
module.exports = globalConf;