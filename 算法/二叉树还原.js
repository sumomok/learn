/*
 * @Author: your name
 * @Date: 2020-03-06 10:15:17
 * @LastEditTime: 2020-03-06 10:42:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\二叉树还原.js
 */

const qianxu = ['A', 'B', 'D', 'E', 'C', 'F', 'G'];
const zhongxu = ['D', 'B', 'E', 'A', 'F', 'C', 'G'];
const houxu = ['D', 'E', 'B', 'F', 'G', 'C', 'A']
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
//前序中序还原
// function reduction(qian, zhong) {
//     if (qian == null || zhong == null || qian.length !== zhong.length || qian.length === 0 || zhong.length === 0) return;
//     let root = new Node(qian[0]);
//     let rootIndex = zhong.indexOf(root.value);
//     let qianLeft = qian.slice(1, rootIndex + 1);
//     let qianRight = qian.slice(rootIndex + 1, qian.length);
//     let zhongLeft = zhong.slice(0, rootIndex);
//     let zhongright = zhong.slice(rootIndex + 1, zhong.length);
//     root.left = reduction(qianLeft, zhongLeft);
//     root.right = reduction(qianRight, zhongright);
//     return root;
// }
/**
 *  后序中序还原二叉树
 * @param {*} qian 
 * @param {*} zhong 
 */
function reduction(hou, zhong) {
    if (hou == null || zhong == null || hou.length !== zhong.length || hou.length === 0 || zhong.length === 0) return;
    let root = new Node(hou[hou.length - 1]);
    let rootIndex = zhong.indexOf(root.value);
    let zhongLeft = zhong.slice(0, rootIndex);
    let zhongRight = zhong.slice(rootIndex + 1, zhong.length)
    let houLeft = hou.slice(0, zhongLeft.length);
    let houRight = hou.slice(zhongLeft.length, hou.length - 1);
    root.left = reduction(houLeft, zhongLeft);
    root.right = reduction(houRight, zhongRight);
    return root;
}
let reduc = reduction(houxu, zhongxu);

