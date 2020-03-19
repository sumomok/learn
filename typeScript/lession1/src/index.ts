/*
 * @Author: your name
 * @Date: 2020-03-19 14:00:19
 * @LastEditTime: 2020-03-19 16:13:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\lession1\index.ts
 */
let say: string = "hello, world";

let names: undefined | string;

if (Math.random() > 0.5) {
    names = '成功'
} else {
    names = undefined
}
// ????
console.log(typeof names?.charAt(0));

function throwError(msg: string): never {
    throw new Error(msg);
}