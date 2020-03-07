/*
 * @Author: your name
 * @Date: 2020-03-06 11:27:44
 * @LastEditTime: 2020-03-06 15:05:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \算法\树的深度优先算法和广度优先算法.js
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
// 深度优先搜索，深度优先搜索，和前序遍历的顺序是一样的。
// function Dfs(root, target) {
//     if (root == null) return false;
//     //此处进行操作 例如 root.value  === target ?retrun ture:return false;
//     console.log(root.value);
//     bfs(root.left);
//     bfs(root.right);
//     return root;
// }
// bfs(a);

//广度优先搜索
function BFs(rootList, target) {
    if (rootList == null || rootList.length == 0) return false;
    let childrenList = [];
    for (let i = 0; i < rootList.length; i++) {
        if (rootList[i].value == target) {
            return true;
        }
        else {
            childrenList.push(rootList[i].left);
            childrenList.push(rootList[i].right);
        }
    }
    return BFs(childrenList, target);
}
let test = BFs([a], 'g');
console.log(test);