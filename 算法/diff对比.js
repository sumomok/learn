/*
 * @Author: your name
 * @Date: 2020-03-06 16:14:25
 * @LastEditTime: 2020-03-06 16:40:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\算法\diff对比.js
 */

function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

let a1 = new Node('a')
let b1 = new Node('b')
let c1 = new Node('c')
let d1 = new Node('d')
let e1 = new Node('e')
let f1 = new Node('f')
let g1 = new Node('g')

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.left = f1;
c1.right = g1;

let a2 = new Node('a')
let b2 = new Node('b')
let c2 = new Node('x')
let d2 = new Node('d')
let e2 = new Node('e')
let f2 = new Node('y')
let g2 = new Node('g')

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.left = f2;
c2.right = g2;
let diffResult = [];
/**
 * 
 * @param {*} root1 
 * @param {*} root2 
 * @param {*} diffResult  [{type:"修改",orgin:root1,new:root2}] [{type:"添加",orgin:null,new:root2}] [{type:"删除",orgin:root1,new:null
 * }]
 */
function diffDom(root1, root2, diffResult) {
    if (root1 == root2) return diffResult;
    let leftResult = [];
    let rightResult = [];
    if (root1 == null && root2 != null) {
        diffResult.push({ type: "添加", orgin: null, new: root2 })
    }
    else if (root1 != null && root2 == null) {
        diffResult.push({ type: "删除", orgin: root1, new: null })
    }
    else if (root1.value != root2.value) {
        diffResult.push({ type: "修改", orgin: root1, new: root2 })
        diffDom(root1.left, root2.left, diffResult);
        diffDom(root1.right, root2.right, diffResult);
    } else {
        diffDom(root1.left, root2.left, diffResult);
        diffDom(root1.right, root2.right, diffResult);
    }
    return diffResult;
}
console.log(diffDom(a1, a2, diffResult))