let mySql = require('mysql');
function query() {
    let connection = createConnection()
    connection.connect();
    connection.query(...arguments)
    connection.end();
}
function createConnection () {
    let connection = mySql.createConnection({
        host:'127.0.0.1',
        port:'3306',
        user:'root',
        password:'root123456',
        database:'school',
    });
    return connection;
}
module.exports = query;

