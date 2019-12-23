var LdapClient = require('node-ldap');
// var LdapClient = RedisClient('node-ldap');
// let md5 = require('md5');
// var client = new LdapClient({
//     ldapUrl: 'ldap://192.168.75.72:389/dc=sdu,dc=edu,dc=cn',
//     userDn: 'cn=admin',
//     password: 'neusoft123'
// });
//
// let password = md5('ytj20190002');
// // 用户认证
// client.auth('ytj20190002', password).then(function() {
//     console.log('success');
// }).catch(function(err) {
//     console.error(err);
// });