/*
 * @Author: your name
 * @Date: 2020-03-06 15:26:53
 * @LastEditTime: 2020-03-06 15:39:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\树的比较.js
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
let c2 = new Node('c')
let d2 = new Node('d')
let e2 = new Node('e')
let f2 = new Node('f')
let g2 = new Node('g')

a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.left = f2;
c2.right = g2;
// 没有特殊声明情况下的 左右子树互换不为相等
function comparse(root1, root2) {
    if (root1 == root2) return true;
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false;
    if (root1.value != root2.value) return false;
    let leftBoolen = comparse(root1.left, root2.left);
    let rightBoolen = comparse(root1.right, root2.right);
    return leftBoolen && rightBoolen;
}
// 左右子树互换相等的情况下
function comparse1(root1, root2) {
    if (root1 == root2) return true;
    if (root1 == null && root2 != null || root2 == null && root1 != null) return false;
    if (root1.value != root2.value) return false;
    let leftBoolen = comparse(root1.left, root2.left);
    let rightBoolen = comparse(root1.right, root2.right);
    return leftBoolen && rightBoolen || comparse(root1.left, root2.right) && comparse(root1.right, root2.left);
}
console.log(comparse(a1, a2))