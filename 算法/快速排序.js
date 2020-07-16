/*
 * @Author: your name
 * @Date: 2020-03-04 15:44:36
 * @LastEditTime: 2020-03-04 17:04:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\快速排序.js
 */
let Arr = [4, 1, 3, 5, 7, 9, 8, 6, 2];
function quickSort(arr, begin, end) {
    if (arr == null || begin >= end - 1) return;
    let left = begin;
    let right = end;
    do {
        do { left++ } while (left < right && arr[left] < arr[begin]);
        do { right-- } while (left < right && arr[right] > arr[begin]);
        if (left < right) {
            exchange(arr, left, right)
        }
    } while (left <= right)
    let swapPoint = left == right ? right - 1 : right;
    console.log(left, right, swapPoint);
    exchange(arr, begin, swapPoint);
    quickSort(arr, begin, swapPoint);
    quickSort(arr, swapPoint + 1, end);
}
function quicksort(arr) {
    quickSort(arr, 0, arr.length)
}
function exchange(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
}
quicksort(Arr);