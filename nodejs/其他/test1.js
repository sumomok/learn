// console.log('test');
let a = 10;
let b = 20
//输出结果↓ {} {}
console.log(module.exports,exports)
//输出结果↓ true
console.log(module.exports == exports)
// 输出结果↓ {a:10,b:20}
module.exports.a = a;
exports.b = b;
//输出结果↓ 10
module.exports = a;
exports = b;
//结论 ：
// 导出的永远是module.exports ,但开始时 module.exports 与export 指向同一个空间的对象
