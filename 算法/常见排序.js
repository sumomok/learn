/*
 * @Author: your name
 * @Date: 2020-03-04 14:09:07
 * @LastEditTime: 2020-03-04 14:25:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\冒泡.js
 */
let Arr = [4, 1, 3, 5, 7, 9, 8, 2];

function sort(arr) {
    if (!Array.isArray(arr)) return;
    console.log('test')
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = getMin(arr)
    }
    return newArr
}
function getMin(arr) {
    if (!Array.isArray(arr)) return;
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != null && arr[index] > arr[i] || arr[i] != null && arr[index] == null) {
            index = i
        }
    }
    console.log(arr)
    let result = arr[index]
    arr[index] = null;
    return result;
}
console.log(sort(Arr));