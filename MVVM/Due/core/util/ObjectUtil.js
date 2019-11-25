export function getNodeValue(obj,template) {
    // 做一步对类似 “a.b”的处理
    let templateList = template.split('.');
        let temp =obj;
        // if (templateList[0] ='obj') {
        // }
        for (let i = 0;i<templateList.length;i++) {
            if (temp[templateList[i]]) {
                temp = temp[templateList[i]]
            } else {
                return;
            }
        }

        return temp;
    }