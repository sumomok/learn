export default class Vnode {
    constructor(tag,//标签类型
                elm,//对应的真是节点。
                children,//当前节点下的子节点
                text,//当前虚拟节点中的文本
                data,//暂无意义，暂时保留 VNodeData
                parent,//父级节点
                nodeType,//节点类型
                 ){
        this.tag = tag;
        this.elm = elm;
        this.children = children;
        this.text = text;
        this.data = data;
        this.parent = parent;
        this.nodeType = nodeType;
        this.env = {}; //当前节点的环境变量
        this.instructions = null;
        this.template = [];//当前节点涉及到的模板
    }
}