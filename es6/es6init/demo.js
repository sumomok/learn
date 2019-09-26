"use strict";

// let a = 10;
// console.log(a);

// let a =20;
// let a = {
//     name:'lhr',
//     age:'22',
// }
// let {name:oname,age:oage} = a
// console.log(oname,oage);
// function a(b = 20,c=30){
//     return b +c;
// }
// // console.log(a(1))
// let sum = x => y => z=>x +y+z;
// console.log(sum(1)(2)(3));
// var sum = function sum (a,b){
//     return a + b ;
// }
// let sum = (a,b) => a+b;


// var obj = {
// }
// var value = undefined;
// Object.defineProperty(obj,'name',{
//     // value:'aaa',
//     // configurable:true,
//     get:function(){
//         return value;
//     },
//     set:function(val){
//         value = val
//     }

// })
// console.log(obj.name = 222);
// console.log(delete obj.name);
//交操作
// let arr1 = [1,2,3,4,5];
// let arr2 = [3,4,5,7,8,9];
// let arr3 = new Set([...arr2]);
// let arr = arr1.filter(ele => {
//     return arr3.has(ele);
// });
// console.log(arr);
//并操作
// let arr1 = [1,2,3,4,5];
// let arr2 = [3,4,5,7,8,9];
// let arr = new Set([...arr1,...arr2]);
// console.log(arr);
// 补操作
// let arr1 = [1,2,3,4,5];
// let arr2 = [3,4,5,7,8,9];
// let arr3 = new Set([...arr2]);
// let arr5 = new Set([...arr1]);
// let arr = arr1.filter(ele => {
//     return !arr3.has(ele);
// });
// let arr4 = arr2.filter(ele=>{
//     return !arr5.has(ele);
// })
// arr.push(...arr4)
// console.log(arr);

// map
// 初始化
// 传入的参数  每个参数都是数组
// let oMp = new Map([['myname','lhr'],['age','22'],['sex',true]]);
// console.log(oMp);
// let node1 = {
//     key:'name',
//     value:'1',
//     next:node2,
// };

// let node3 = {
//     key:'name',
//     value:'1',
//     next:null,
// };
// let node2 = {
//     key:'name',
//     value:'1',
//     next:node3,
// };

// function myMap(){
//     this.bucketLength = 8;
//     this.init();
// }
// myMap.prototype.init = function() {
//     this.bucket = new Array(this.bucketLength);
//     for(var i = 0; i<this.bucketLength;i++) {
//         this.bucket[i] = {
//             type:'bucket_' + i ,
//             next:null,
//         }
//     }
// }
// // 随机值变为一个区间内的值
// // 重复值固定
// myMap.prototype.makeHash = function (key){
//     let keyCharCodeAt = 0;
//     if(typeof key !=='string') {
//         if (typeof key == 'number') {
//                 keyCharCodeAt = Object.is(key,NaN)? 0:key;
//         } else if (typeof key == 'object') {

//         } else if (typeof key == 'boolean') {
//             keyCharCodeAt = Number(key)
//         } else {
//             keyCharCodeAt = 2;
//         }
//     } else {
//         for ( let i = 0;i< 3; i++){
//             keyCharCodeAt += key.charCodeAt(i) ? key.charCodeAt(i) : 0; 
//         }
//     }
//     return keyCharCodeAt % 8;
// }
// myMap.prototype.set = function (key,value){
//     let hash = this.makeHash(key);
//     let oTempBucket = this.bucket[hash];
//     while (oTempBucket.next) {
//         if(oTempBucket.next.key == key) {
//             oTempBucket.next.value = value;
//             return
//         }
//         oTempBucket = oTempBucket.next;
//     }
//     oTempBucket.next = {
//         key:key,
//         value:value,
//         next:null,
//     }
// }
// myMap.prototype.get = function (key){
//     let hash = this.makeHash(key);
//     let oTempBucket = this.bucket[hash];
//     while (oTempBucket.next) {
//         if(oTempBucket.next.key == key) {
//             return oTempBucket.next.value
//         }
//         oTempBucket = oTempBucket.next;
//     }
//     return undefined;
// }
// myMap.prototype.delete = function (key){
//     let hash = this.makeHash(key);
//     let oTempBucket = this.bucket[hash];
//     while (oTempBucket.next) {
//         if(oTempBucket.next.key == key) {
//             oTempBucket.next = oTempBucket.next.next;
//         return true;
//         }
//         oTempBucket = oTempBucket.next;
//     }
//     return false;
// }
// myMap.prototype.has = function (){
//     let hash = this.makeHash(key);
//     let oTempBucket = this.bucket[hash];
//     while (oTempBucket.next) {
//         if(oTempBucket.next.key == key) {
//             return true;
//         }
//         oTempBucket = oTempBucket.next;
//     }
//     return false;
// }
// myMap.prototype.clear = function (){
//     this.init();
// }
// let map = new myMap();
// map.set('name','lhr');
// map.set({},'-----');
// map.set(function(){},'+++++');
// console.log(map.get('name'));

let test = new Promise(function (resolve,reject) {
    // Math.random() * 100 >50?resolve('ok'):reject('error');
    // resolve('test');
    throw new Error('demo');
});
// test.then((val)=>{
//     console.log(val);
// },(reason)=>{
//     console.log(reason);
// }).then((val)=>{
//     console.log(val + '2');
// },(reason)=>{
//     console.log(reason + '2');
// });
test.then((val)=>{
    console.log(val);
}).catch((error)=>{
    console.log(error + 2);
});