/*
 * @Author: your name
 * @Date: 2020-04-23 15:07:06
 * @LastEditTime: 2020-04-23 15:52:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\vue\新Vue\数据响应式原理\index.ts
 */
// 还有个命名空间未解决，数据响应问题已经做完
 let obj = {
     name:"test",
     age:18,
     aresar:"test1",
     obj2:{
         a:1,
         b:2
     },
     arr:["1","2",{a:"1",b:"2"}],
     objarr:{
         a:"1",
         barr:["1","2",{
             a:"1",
             b:"2"
         }]
     }
 }
 dataProxy(obj);


 function dataProxy(obj:any){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            checkType(obj,key,obj[key])
        }
    }
 }
 function checkType(obj:any,key:string,value:any){
    if (Array.isArray(value)){
        handleArray(value)
    } else if (typeof value === 'object'){
        dataProxy(value)
    } else {
        objDefineProperty(obj,key,value)
    }
 }
 function handleArray(arr:any[]){
    arr.forEach(it=>{
        if (Array.isArray(it)){
            handleArray(it)
        } else if (typeof it === 'object'){
            dataProxy(it)
        } else {
            return
        }
    })
 }
 function objDefineProperty(obj:any,key:string,value:any){
    Object.defineProperty(obj,key,{
        get(){
            console.log("取值")
           return value
        },
        set(v){
            // 此处直接进行渲染即可
            console.log("设置值")
            return v
        }
    })
 }