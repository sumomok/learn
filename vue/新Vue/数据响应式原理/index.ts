/*
 * @Author: your name
 * @Date: 2020-04-23 15:53:05
 * @LastEditTime: 2020-04-23 16:01:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\vue\新Vue\数据响应式原理\index.ts
 */
// let obj1 = {
//     name:"test",
//     age:18,
//     aresar:"test1",
//     obj2:{
//         a:1,
//         b:2
//     },
//     arr:["1","2",{a:"1",b:"2"}],
//     objarr:{
//         a:"1",
//         barr:["1","2",{
//             a:"1",
//             b:"2"
//         }]
//     }
// }
const handle = {
    get(obj:any,props:any,receiver:any){
        console.log(obj,props,receiver)
    }
}
const p = new Proxy({},handle)