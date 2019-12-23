let query = require('./dbutil');
module.exports = {
    "queryAllStudent":queryAllStudent,
    "queryStudentByClass":queryStudentByClass,
    "insertStudent":insertStudent,
    "queryStudentPassword":queryStudentPassword,
}
function queryAllStudent(param,cb) {
let querySql = 'select * from student';
    query(querySql,cb)
}
// queryAllStudent();
function queryStudentByClass(param,cb) {
    let querySql = 'select * from student where `class` = ? ;';
    let params = [...param]
    query(querySql,params,cb())
}
function insertStudent(param,cb) {
let insertSql = 'insert into student (`name`,`age`,`studentID`,`class`) values (?,?,?,?)';
let params = [...param];
query(insertSql,params,cb);
}
function queryStudentPassword(param,cb) {
    let querySql = 'select password  from student where `studentID` = ?'
    let params = [];
    params.push(param.studentID);
    // let params = [...param];
    query(querySql,params,cb);
}