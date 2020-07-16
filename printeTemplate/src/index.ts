import express from 'express';
import bodyPre from 'body-parser';
import RequestData from './API/request'
import { HandleRequest } from './API/HandleRequire';
import ftl2html from './tool/ftl2html';
import path from 'path'
import fs from 'fs';
import { v4 } from 'uuid';
import requestTemplateAPI from './Options';
const app = express()
app.use(bodyPre());
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
    if (req.method.toLowerCase() == 'options') {
        res.send(200);  //让options尝试请求快速结束
    }
    else {
        next();
    }
});
//事例入参
// {
//     userCode: '2020113242',
//     templateID: '273c6cd8c7794f0295592930256141e4',
//     TerminalNO: '101',
//     TerminalIP: '10.100.255.18',
//     menumodelurl: 'D:\\WebSite\\Template\\tpl\\273c6cd8c7794f0295592930256141e4.ftl'
//   }
app.use('/output', express.static(path.join(__dirname, "/output/")))
app.post('/applyTemplate', async (req, res) => {
    if (req.body) {
        try {
            let result = await RequestData(requestTemplateAPI.baseUrl + ':' + requestTemplateAPI.port + '/api/TemplateInfo', {
                TemplateUrl: req.body.menumodelurl,
                TerminalIP: req.body.TerminalIP,
                TerminalNO: req.body.TerminalNO,
                // 暂时写死
                UserGuid: "09901",
                // UserGuid: req.body.userCode,
                M_Guid: req.body.templateID,
                // 暂时写死
                ElectricMenuCode: "3169382542684160",
            });
            // HandleRequest.sendResult(result, '', res, true);
            if (result.AppMsg === 'success') {
                // 返回参数中的数据位置
                // result.Data.templageData.data
                // 此处先用假数据代替，数据存在后在进行开发
                let data = {
                    PERNAME: "test",
                    GENDERCODE: "男",
                    BIRTHDAY: "1990年1月1号",
                    PERIDCARD: "37091111111111111",
                    WSTARTTIME: "2010年1月1号",
                    TOTALINCOMEME: "10000元",
                    TOTALINCOMEMEZW: "10000元",
                    ZMRQ: "test",
                    COLLEGENAME: "test",
                    ZWXX: "test"
                }
                try {
                    var htmlData = await ftl2html(data, path.join(req.body.menumodelurl));
                    console.log('执行了');
                    if (htmlData !== '') {
                        let fileName = v4() + ''
                        fileName = fileName.substring(0, 7) + '.html'
                        var resultFs = await fs.promises.writeFile(path.join(__dirname, './output/' + fileName), htmlData);
                        console.log(fileName);
                        HandleRequest.sendResult({ htmlData, fileName }, '', res, true);
                    } else {
                        HandleRequest.sendResult({ htmlData }, '生成模板失败，模板数据为空', res, false)
                    }
                } catch (e) {
                    HandleRequest.sendResult({}, e, res, false)
                }

            } else {
                HandleRequest.sendResult({}, result.AppMsg, res, false)
            }
        } catch (e) {
            HandleRequest.sendResult({}, e, res, false);
        }
    } else {
        HandleRequest.sendResult({}, '参数为空', res, false);
    }
})

app.listen(8030);