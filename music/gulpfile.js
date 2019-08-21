const { parallel, series, src, dest } = require('gulp');
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
const GulpServer = require('gulp-connect-reproxy');
var folder = {
    src: './src/',
    dist: './dist/'
}
function js() {
    return src(folder.src + 'js/*.js')
        .pipe(GulpDebug())
        .pipe(uglify())
        .pipe(dest(folder.dist + 'js/'));
}

function html() {
    return src(folder.src + 'html/*.html')
        .pipe(GulpHtmlClean())
        .pipe(dest(folder.dist + 'html/'));
}

function css() {
    return src(folder.src + 'css/*.less')
        .pipe(GulpCleanCss())
        .pipe(less())
        .pipe(dest(folder.dist + 'css/'));
}

function img() {
    return src(folder.src + 'img/*.*')
        .pipe(gulpImageMin())
        .pipe(dest(folder.dist + 'img/'))
}
function server() {
    return GulpServer({
        port: '9091',
        root: "default",
    })
}
exports.default = series(js, html, css, img, server());