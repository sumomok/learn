import FreeMarke from 'freemarker';
import path from 'path';
const fm1 = new FreeMarke({ root: path.join('D:\\WebSite\\Template\\tpl') });
function ftl2html(data:any,url:string):Promise<string> {
    return new Promise((res, rej) => {
        fm1.renderFile(url, data, (err:any, result:string) => {
            if (err) {
                rej(err)
            }
            res(result)
        });
    })
}


export default ftl2html
