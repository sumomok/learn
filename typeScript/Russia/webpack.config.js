/*
 * @Author: your name
 * @Date: 2020-04-01 09:07:30
 * @LastEditTime: 2020-04-02 08:56:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\Russia\webpack.config.js
 */
let path = require('path');
let { CleanWebpackPlugin } = require("clean-webpack-plugin");
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve("./dist"),
        filename: "script/bundle.js"

    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [{
            test: /(\.ts)$/,
            use: {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                }
            }
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}

