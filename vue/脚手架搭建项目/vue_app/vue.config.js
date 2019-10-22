const path = require('path');
module.exports = {
    productionSourceMap:false,//是否打包scourcemap
    outputDir:'./myDist',
    publicPath: process.env.NODE_ENV === 'production' ? 'http://10.1.2.26:9033':'/',//静态目录前加上服务器地址
    assetsDir:'assets',//将静态资源放到固定文件夹下
    chainWebpack:config =>{
        config.resolve.alias.set('_v', path.resolve(__dirname,'src/views'));//给某个目录起别名
    },
    // configureWebpack:{

    // },//配置webpack
    // devServer:{
    //     proxy:{
    //         'test':{
    //             target:'http://api.duyiedu.com'
    //         }
    //     }
    // },//配置代理

}