import {renderData} from "./render.js";

function proxyObj(vm, object, namespace) {
    let proxyObj = {}
    for (let prop in object) {
        // console.log(prop)
        //将代理完的对象返回出去
        Object.defineProperty(proxyObj, prop, {
            configurable: true,
            get() {
                return object[prop];
            },
            set(value) {
                // 这个地方可以进行页面数值渲染
                object[prop] = value;
                renderData(vm,getNameSpace(namespace,prop))
                console.log(getNameSpace(namespace,prop));
            },
        })
        // 代理到vm上  也就是直接给vm赋值
        Object.defineProperty(vm, prop, {
            configurable: true,
            get() {
                return object[prop];
            },
            set(value) {
                // 这个地方可以进行页面数值渲染
                object[prop] = value;
                renderData(vm,getNameSpace(namespace,prop))
            },
        });
        if (object[prop] instanceof Object) {
            // console.log('3');
            proxyObj[prop] = proxy(vm, object[prop], getNameSpace(namespace, prop))
        }
    }
    return proxyObj;
}
let arrProto = Array.prototype;
function proxyArr(vm, arr, namespace) {
    let obj = {
        eleType: "Array",
        toString: function () {
            let result = '';
            for (let i = 0; i < arr.length; i++) {
                result = arr[i] + ', ';
            }
            return result.substring(0, result.length - 2);
        },
        push() { },
        pop() { },
        shift() { },
        unshift() { },
    }
    defineArrayFunc.call(vm, arr, 'push', namespace, vm);
    defineArrayFunc.call(vm, arr, 'pop', namespace, vm);
    defineArrayFunc.call(vm, arr, 'shift', namespace, vm);
    defineArrayFunc.call(vm, arr, 'unshift', namespace, vm);
    arr.__proto__ = obj;
    return arr;
}

function defineArrayFunc(object, funName, namespace, vm) {
    Object.defineProperty(object, funName, {
        enumerable: true,
        configurable: true,
        value(...arg) {
            let original = arrProto[funName];
            const result = original.apply(object, arg);
            renderData(vm,getNameSpace(namespace,''))
            return result;
        }
    })

}
// vm 给那个vm对象代理  object 要进行代理的对象  namespace
// 我们要知道那个属性被更改了，我们才能对页面上的内容进行更新。
// 所以我们必须贤能够捕获修改的这个事件
// 我们需要用代理的方式来实现监听属性修改。
export function proxy(vm, object, namespace) {
    // vm 给那个vue对象进行代理
    // object 代理那个对象，
    // namespace 命名空间
    let pro = {};
    if (object instanceof Array) {
        pro = new Array(object.length);
        for (let i = 0; i < object.length; i++) {
            if(object[i] instanceof Object) {
                pro[i] = proxy(vm, object[i], namespace);
            }
        }
        pro = proxyArr(vm, object, namespace);
    } else if (object instanceof Object){
        pro = proxyObj(vm,object,namespace)
    }  else {
        // console.log(object);
        // throw Error('请传入对象类型的options')
    }
    return pro;
}
function getNameSpace(nowNamespace, NowProp) {
    if (nowNamespace == null || nowNamespace == '') {
        return NowProp;
    } else if (NowProp == null || NowProp == '') {
        return nowNamespace;
    } else {
        return nowNamespace + '.' + NowProp;
    }
}