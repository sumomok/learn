/*
 * @Author: your name
 * @Date: 2020-03-04 14:42:23
 * @LastEditTime: 2020-03-04 15:06:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\选择排序.js
 */
let Arr = [4, 1, 3, 5, 7, 9, 8, 2];

function compare(a, b) {
    if (a > b) return true;
    else return false;
}
function exchange(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (compare(arr[j], arr[maxIndex])) {
                maxIndex = j;
            }
        }
        exchange(arr, maxIndex, arr.length - 1 - i)
    }
}
sort(Arr)
console.log(Arr)