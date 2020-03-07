/*
 * @Author: your name
 * @Date: 2020-03-04 14:27:06
 * @LastEditTime: 2020-03-04 14:42:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\冒泡排序.js
 */
let Arr = [4, 1, 3, 5, 7, 9, 8, 2];
// 排序的理论就是 比较和交换

function sort(arr) {
    if (!Array.isArray(arr)) return;
    for (let j = 0; j < arr.length - 1; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
            if (compare(arr[i], arr[i + 1])) exchange(arr, i, i + 1)
            console.log(arr);
        }
    }
}
function compare(a, b) {
    if (a > b) return true;
    else return false;
}
function exchange(arr, a, b) {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp
}
sort(Arr)
// console.log(Arr);