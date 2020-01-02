const express = require('express');
const server = express();
const Vue = require('vue');
const Render = require('vue-server-renderer');

server.use(express.static(require("path").join(__dirname, '../assets/')));

server.get('/ssr', (req, res) => {
    const app = new Vue({
        template: `<div>{{msg}}</div>`,
        data: {
            msg: 'hello Everyone'
        }
    })
    const renderer = Render.createRenderer()
    renderer.renderToString(app, (err, html) => {
        res.end(html)
    })
    //将Vue实例转换为字符串
})

server.listen(12306);

