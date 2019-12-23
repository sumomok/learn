let studentDao = require('../dao/studentDao');
function queryStudentServer(param,cb) {
    studentDao.queryAllStudent(param,cb)
}
module.exports = {
    "queryStudentServer":queryStudentServer,
    "queryStudentPasswordServer":queryStudentPasswordServer
}
function queryStudentPasswordServer(param,cb) {
    studentDao.queryStudentPassword(param,cb);
}