/*
 * @Author: your name
 * @Date: 2020-04-23 15:53:05
 * @LastEditTime: 2020-04-23 16:58:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\vue\新Vue\数据响应式原理\index.ts
 */
let obj1 = {
    name: "test",
    age: 18,
    aresar: "test1",
    obj2: {
        a: 1,
        b: 2
    },
    arr: ["1", "2", { a: "1", b: "2" }],
    objarr: {
        a: "1",
        barr: ["1", "2", {
            a: "1",
            b: "2"
        }]
    }
}
var handle = {
    get: function (obj, props) {
        console.log("得到值")
        return obj[props]
    },
    set: function (obj, prop, value) {
        console.log("设置值")
        return obj[prop] = value
    }
};
let p = new Proxy(obj1,handle)
// function proxydefin(obj){
//     var handle = {
//         get: function (obj, props) {
//             console.log("得到值")
//             return obj[props]
//         },
//         set:function(obj, prop, value){
//             console.log("设置值")
//             return obj[prop] = value
//         }
//     };
//     return new Proxy(obj, handle);
// }
// function handleProxy(obj){
//     var handle = {
//         get: function (obj, props) {
//             console.log("得到值")
//             return obj[props]
//         },
//         set:function(obj, prop, value){
//             console.log("设置值")
//             return obj[prop] = value
//         }
//     };
//     let objp = new Proxy(obj, handle)
//     for (const key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             handleType(objp,key,obj[key])
//         }
//     }
//     return objp
// }
// function handleType(objp,key,value){
//     if (Array.isArray(value)){
//         value.forEach(element => {
//             if (Array.isArray(element)){
//                 handleType(objp,key,value)
//             } else if (typeof value === "object") {
//                 objp[key] = handleProxy(objp[key])
//             }
//         });
//     } else if(typeof value === "object") {
//         objp[key] = handleProxy(objp[key])
//     }
// }
// var test1 = handleProxy(obj1)
