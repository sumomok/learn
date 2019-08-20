var path = require('path');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry:{
        index:'./src/js/index.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].[hash:5].js'
    },
    module:{
        rules:[
            // {
            //     test:/(\.js)$/,
            //     // use:['babel-loader'],
            // },
            {
                test:/(\.less)$/,
                use:['css-loader','less-loader']
            },
            {
                test:/(\.html)$/,
                use:['html-loader']
            }
        ],
    },
    plugins:[
        new CleanWebpackPlugin(),
        
    ],
    mode:'development',
}