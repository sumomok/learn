const { watch,parallel, series, src, dest } = require('gulp');
// 转换less
const less = require('gulp-less');
// 压缩html
const GulpHtmlClean = require('gulp-htmlclean');
//图片处理
const gulpImageMin = require('gulp-imagemin');
//压缩js
const uglify = require('gulp-uglify');
//去掉调试语句
const GulpDebug = require('gulp-strip-debug');
//压缩css
const GulpCleanCss = require('gulp-clean-css');
// 开启服务器
const GulpServer = require('gulp-connect');

var folder = {
    src: './src/',
    dist: './dist/'
}
function js() {
    return src(folder.src + 'js/*.js')
        .pipe(GulpDebug())
        .pipe(uglify())
        .pipe(dest(folder.dist + 'js/'))
        .pipe(GulpServer.reload());
}

function html() {
    return src(folder.src + '*.html')
        .pipe(GulpHtmlClean())
        .pipe(dest(folder.dist))
        .pipe(GulpServer.reload());
}

function css() {
    return src(folder.src + 'css/*.less')
        .pipe(less())
        .pipe(GulpCleanCss())
        .pipe(dest(folder.dist + 'css/'))
        .pipe(GulpServer.reload());
}

function img() {
    return src(folder.src + 'img/*.*')
        .pipe(gulpImageMin())
        .pipe(dest(folder.dist + 'img/'))
        .pipe(GulpServer.reload());
}
function server() {
    GulpServer.server({
        livereload:true,
        port:'9091',
        root:'dist',
    })
}
function watchTask (){
    watch(folder.src + 'js/*.*',js);
    watch(folder.src + '*.html',html);
    watch(folder.src + 'css/*.*',css);
    watch(folder.src + 'img/*.*',js);
}
exports.default = parallel(js, html, css, img,server,watchTask,);