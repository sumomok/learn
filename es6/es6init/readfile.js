let fs = require('fs');

function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (data) {
                res(data)
            } else {
                rej(err)
            }
        })
    })
}
function* generator(data) {
    let val1 = yield readFile('./number.txt');
    let val2 = yield readFile(val1);
    let val3 = yield readFile(val2);
    return val3
}
function co(oit) {
    return new Promise(function (res, rej) {
        let oCo = () => {
            var { value, done } = oit.next()
            if (done) {
                res(value)
            } else {
                value.then((val) => {
                    oCo()
                },rej)
            }

        }
    })
}
co(generator()).then((val)=>{
    console.log(val);
})
// Promise.all([readFile('./number.txt', 'utf-8', function (err, data) {
//     student.number = data;
// }),readFile('./name.txt', 'utf-8',function (err, data) {
//     student.name = data;              
// }),readFile('./des.txt', 'utf-8',function (err, data) {
//     student.des = data;          
// })
// ]);
// readFile('./number.txt').then((data)=>{
//     readFile(data);
// },(err)=>{
//     console.log(err);
// }).then((data)=>{
//     readFile(data)
// },(err)=>{
//     console.log(err);
// }).then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// })