import {proxy} from './proxy.js';
let uid = 0;
export function initMixin (Due){
    Due.prototype._init = function (options) {
        const vm = this;
        vm.uid = uid ++;
        vm._isDue = true;
        // 初始化数据
        if (options instanceof Object && options.data) {
            vm._Data = proxy(vm,options.data,'') 
            console.log(vm._Data);
        } else {
            throw new Error('请传入对象类型的options');
        }
        // 初始化created方法
        // 初始化methods
        // 初始化computed
        // 初始化el并挂载
    }
}