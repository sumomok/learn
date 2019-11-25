import Vnode from "../vdom/vnode.js";
import {prepareRender,gettemplate2Vnode,getvnode2Template} from "./render.js";

export function initMount(Due) {
    Due.prototype.$mount = function (el) {
        let vm = this;
        let rootDom = document.getElementById(el)
        mount(vm,rootDom);
    }
}
export  function mount(vm,elm) {
    //进行挂载
    console.log('开始挂载')
    vm._vnode = construatVNode(vm,elm,null);
    //进行预备渲染(创建渲染索引，通过模板找vnode，通过vnode找模板)；
    prepareRender(vm,vm._vnode);
    console.log(gettemplate2Vnode())
    console.log(getvnode2Template())
}
function construatVNode(vm,elm,parent) {
    //深度优先搜索
    let vnode = null;
    let children = [];
    let text = elm.nodeValue;
    let data = null;
    let nodeType = elm.nodeType;
    let tag = elm.nodeName;
    vnode = new Vnode(tag,elm,children,text,data,parent,nodeType);
    let childs = vnode.elm.childNodes;
    for (let i = 0;i<childs.length;i++) {
        let childNodes = construatVNode(vm,childs[i],vnode);
        if (childNodes instanceof  Vnode) {
            vnode.children.push(childNodes);
        } else {
            vnode.children = vnode.children.concat(childNodes);
        }
    }
    return vnode;
}
function getNodeText(elm) {
    //在#text节点中有文本 type为3
    if(elm.nodeType == 3) {
        return elm.data;
    } else {
        return ""
    }
}