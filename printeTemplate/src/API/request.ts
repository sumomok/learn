import request from 'request';
import { requestData } from '../types/response'
import { requestTemplateData } from '../types/requestTemplate'
function requestTemplate(url: string, requestData: requestTemplateData) {
    return new Promise<requestData>((res, rej) => {
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
            },
            body: requestData
        }, function (error, response, body) {
            if (error) {
                rej(error);
            }
            if (!error && response.statusCode == 200) {
                // console.log(body) // 请求成功的处理逻辑
                res(body)
            }
        })
    })
}
export default requestTemplate