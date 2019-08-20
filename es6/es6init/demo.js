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


var obj = {
}
var value = undefined;
Object.defineProperty(obj,'name',{
    // value:'aaa',
    // configurable:true,
    get:function(){
        return value;
    },
    set:function(val){
        value = val
    }

})
console.log(obj.name = 222);
// console.log(delete obj.name);