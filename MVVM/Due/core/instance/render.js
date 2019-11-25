// 通过模板，找到那些节点用到了这个模板
import {getNodeValue} from "../util/ObjectUtil.js";

let template2Vnode = new Map()
// 通过节点，找到，这个节点下有哪些模板
let vnode2Template = new Map();

export function renderMixin(Due) {
    Due.prototype._render=function () {
        renderNode(this,this._vnode);
    }
}

export function renderData(vm,data) {
    let templateVnode = template2Vnode.get(data)
    if (templateVnode && templateVnode.length !== 0) {
        for (let i = 0;i<templateVnode.length;i++) {
            renderNode(vm,templateVnode[i])
        }
    }
}

export function renderNode(vm,vnode) {
    if (vnode.nodeType == 3){
        let template = vnode2Template.get(vnode);
        if (template) {
            let result = vnode.text
            for (let i = 0;i<template.length;i++) {
                let tempValue = getTemplateValue([vm._Data,vnode.env],template[i]);
                result = result.replace("{{" + template[i] +"}}",tempValue);
            }
            vnode.elm.nodeValue = result;
        }

    } else {
        for (let i=0;i<vnode.children.length;i++){
            renderNode(vm,vnode.children[i]);
        }
    }
}

export  function prepareRender(vm,vnode) {
    if (vnode == null ) {
        return;
    }
    if (vnode.nodeType == 3 ) {
        //文本节点
        analysisTemplateString(vnode);
    }
    if (vnode.nodeType == 1) {
        // 标签节点
        for (let i =0;i<vnode.children.length;i++) {
            prepareRender(vm,vnode.children[i])
        }
    }
}
//analysisTemplateString 分析模板字符串
function analysisTemplateString(vnode) {
    let templateStrList = vnode.text.match(/{{[a-zA-Z0-9_.]+}}/g)
    for (let i =0; templateStrList && i<templateStrList.length;i++) {
        setTemplate2Vnode(templateStrList[i],vnode)
        setVnode2Template(templateStrList[i],vnode);
    }
}
function getTemplateName(template) {
    if (template.substring(0,2) == '{{' && template.substring(template.length-2,template.length) == '}}') {
        return template.substring(2,template.length-2)
    } else {
        return template
    }
}
function setTemplate2Vnode(template,vnode) {
    let templateName = getTemplateName(template)
    let node = template2Vnode.get(templateName)
    if (!node) {
        template2Vnode.set(templateName,[vnode])
    } else {
        node.push(vnode)
    }
}
function setVnode2Template(template,vnode) {
    let templateName = getTemplateName(template)
    let temp = vnode2Template.get(vnode)
    if (!temp) {
        vnode2Template.set(vnode,[templateName])
    } else {
        temp.push(templateName)
    }
}
export function gettemplate2Vnode() {
    return template2Vnode
}
export function getvnode2Template() {
    return vnode2Template
}
function getTemplateValue(objs,template) {
    let templateValue = null;
    for (let i = 0;i<objs.length;i++) {
        templateValue = getNodeValue(objs[i],template)
        if (templateValue) {
            return templateValue;
        }
    }
    return '';
}