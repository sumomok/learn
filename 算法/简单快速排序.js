/*
 * @Author: your name
 * @Date: 2020-03-04 15:20:49
 * @LastEditTime: 2020-03-04 15:30:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\简单快速排序.js
 */
let Arr = [4, 1, 3, 5, 7, 9, 8, 2];

function quicksort(arr) {
    if (arr == null || arr.length == 0) return [];
    let middle = arr[0];
    let right = [];
    let left = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < middle) left.push(arr[i]);
        if (arr[i] > middle) right.push(arr[i]);
    }
    left = quicksort(left);
    right = quicksort(right);
    left.push(middle);
    return left.concat(right);
}
console.log(quicksort(Arr))