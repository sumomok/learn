function proxyObj (vm,object,namespace){
    let proxyObj = {}
    for (let prop in object){
        // console.log(prop)
        Object.defineProperty(proxyObj,prop,{
            configurable:true,
            get(){
                return object[prop];
            },
            set(value){
                console.log(getNameSpace(namespace,prop));
                object[prop] = value;
            },
        })
        Object.defineProperty(vm,prop,{
            configurable:true,
            get(){
                return object[prop];
            },
            set(value){
                console.log(getNameSpace(namespace,prop));
                object[prop] = value;
            },           
        });
        if (object[prop] instanceof Object) {
            proxyObj[prop] = proxy(vm,object[prop],getNameSpace(namespace,prop))
        }
    }
    return proxyObj;
}
function proxyArr (vm,arr,namespace){
    let obj = {
        eleType:"Array",
        
    }
}


export function proxy (vm,object,namespace){
    // vm 给那个vue对象进行代理
    // object 代理那个对象，
    // namespace 命名空间
    let proxy = {};
    if (object instanceof Object){
        proxy = proxyObj(vm,object,namespace)
    } else if (object instanceof Array){
        proxy = new Array(object.length);
        for (let i = 0 ;i< object.length;i++){
            proxy[i]  = proxy(vm,object,namespace);
        }
        proxy = proxyArr(vm,object,namespace);
    } else {
        throw Error('请传入对象类型的options')
    }
    return proxy;
}
function getNameSpace(nowNamespace,NowProp) {
    if (nowNamespace  == null || nowNamespace == ''){
        return NowProp;
    } else if (NowProp  == null || NowProp == ''){
        return nowNamespace;
    } else {
        return nowNamespace + '.' + NowProp;
    }
}