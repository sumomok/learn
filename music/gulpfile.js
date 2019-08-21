const {src,dest} = require('gulp');

function defaultTask() {
    return src('./src/*.js')
           .pipe(dest('./output/'));
    // return Promise.resolve('test');
}
// function build(){
//     console.log('111');
// }
// exports.build = build;
exports.default = defaultTask;