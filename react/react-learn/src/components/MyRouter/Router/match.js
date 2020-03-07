import { pathToRegexp } from 'path-to-regexp';
/**
 * 得到match对象
 * @param {*} path 路径规则
 * @param {*} pathName 要匹配的路径
 * @param {*} options 路径匹配设置，仅可传 exact（是否精确匹配）sensitive（是否区分大小写）strict（严格匹配模式）
 */
export default function getMatch(path, pathName, options) {
    let key = [];
    const reg = pathToRegexp(path, key, getOptions(options));

    let result = reg.exec(pathName);

    if (!result) {
        return
    }
    let newResult = Array.from(result).slice(1);
    let params = getParams(key, newResult);
    let match = {
        params,
        path,
        url: result[0],
        isExact: result[0] === pathName
    }
    return match

}
/**
 * 匹配配置对象处理
 * @param {*} options 匹配配置对象
 */
function getOptions(options = {}) {
    let defualtOptions = {
        exact: false,
        sensitive: false,
        strict: false,
    }
    let newOptions = { ...defualtOptions, ...options }
    return {
        sensitive: newOptions.sensitive,
        strict: newOptions.strict,
        end: newOptions.exact
    }
}
/**
 * match 中的params对象的获取
 * @param {*} key pathToRegxp 返回的key数组
 * @param {*} result 匹配的结果
 */
function getParams(key, result) {
    let obj = {}
    for (let i = 0; i < key.length; i++) {
        let name = key[i].name;
        let value = result[i];
        obj[name] = value;
    }
    return obj
}