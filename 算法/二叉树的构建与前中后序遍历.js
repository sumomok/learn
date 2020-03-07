/*
 * @Author: your name
 * @Date: 2020-03-05 10:26:17
 * @LastEditTime: 2020-03-05 10:34:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\二叉树的构建与前中后序遍历.js
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.rignt = null;
}
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

// 前序遍历
// function ergodic(root) {
//     if (root == null) return;
//     console.log(root.value);
//     ergodic(root.left);
//     ergodic(root.right);
// }

//中序遍历
function ergodic(root) {
    if (root == null) return;
    ergodic(root.left);
    console.log(root.value);
    ergodic(root.right);
}
//后序遍历
// function ergodic(root) {
//     if (root == null) return;
//     ergodic(root.left);
//     ergodic(root.right);
//     console.log(root.value);
// }
ergodic(a)