

// let obj = {
//     val:'demo',
// }


// let newObj = new Proxy(obj,{
//     set(target,key,value,receiver){
//         Reflect.set(target,key,value)
//         console.log(...arg);
//     },
//     get(target,key,receiver){
//         return Reflect.get(target,key);
//         console.log(...arg);
//     },
// })
// console.log(newObj.val = 10);
class plen {
    constructor (name){
        this.name = name || "普通飞机";
        this.bloone = 100;
    }
    fly(){
        console.log('fly')
    }
}

class attp extends plen{
    constructor(name){
        super(name);
    }
    dan (){
        console.log('biubiu');
    }
}

let op = new attp('战斗机');
let oa = new plen();