# global
## setTimeout setInterval SetImmediate console clearinterval 利用v8引擎的内容来实现，与浏览器中的内容不同

- setTimeout setInterval SetImmediate 在浏览器环境下返回一个数字
- 在node环境下返回一个对象
    setImmediate 相当于 setTimeout 0

**下面两个并不属于global对象的**
## __dirname

该文件所处的绝对路径

## __filename
该文件所处的绝对路径 + 文件名+后缀名

## Buffer
- 类型化数组，继承自u（无符号）int（整数）8（0-255的数字）Array（的数组）
- 计算机中存储的基本单位：字节
- 使用时、输出时可能用到16进制
## process（进程）

### cwd()
- 获得执行node命令时的命令行的路径
### exit()
- 强制退出node进程
- 强制结束某个进程
### argv
- 获取执行命令行执行时所有的传入的参数
### kill（pid 进程ID）
- 结束某个进程，根据进程ID来执行

### env 
- 获取环境变量

# node的模块化细节
## 模块的查找

1. 绝对路径 
    其他路径会转换为绝对路径
2. 相对路径 ./或../
    相对于当前模块
    转换为绝对路径
3. 相对路径
    检查是否是内置模块，如：fs path 等
    检查当前目录中的node——modules
    检查上一级目录中的node_modules
    转换为绝对路径
    加载模块
4. 关于后缀名
    自动补全补js,json,node,mjs
5. 关于文件名
    如果只提供目录，首先先找是否存在index.js,然后进行后缀名补全
6. package.json
    如果定义了main字段，则
    1. 表示包的默认入口（如果node_modules中某个包也存在package.json时,只影响该包的主入口文件）
    2. 导入或执行包时若仅提供目录，则使用main补全入口
    3. 默认值为index.js
## module对象  

    记录了当前模块的信息
## require
resolve 获取传入的模块的路径

## module.exports原理
```TS
    const fs = require('fs')
    function require(path:string){
        // 转换为绝对路径
        const dirname = handlePath(path);
        if (module.cache[dirname]){
            return module.cache[dirname]
        }
        const fileContent = fs.readFile(dirname);
        // 初始阶段为什么 module.exports 和 exports一致的原因
        module.exports = {}
        const exports = module.exports
        function __temp(module,exports,require,__dirname,filename){
            //将文件中读取的内容放入其中
            const result = eval(fileContent);
        }
        // 让this指向module.exports
        __temp.call(module.exports,module,exports,require,__dirname,filename)
        return module.exports
    }
```

## ES模块化

目前，Node 中的ES模块化仍然处于实验阶段

模块要么是commonjs 要么是ES
1. commonjs 默认情况下，都是commonjs
2. ES 
    1. 文件后缀名为.mjs
    2. 最近的package.json 中的type的值是module

当使用ES模块化运行时，必须添加-- experimental-modules

## os
```js
// 操作系统api
const os = require('os');
// 回车符
console.log(os.EOL);
// 架构名
console.log(os.arch());
// cpu 每个核的信息
console.log(os.cpus());
//当前空闲内存
console.log(os.freemem() / 1024 ** 3);
// 获取
console.log(os.homedir());
// 获取主机名
console.log(os.hostname());
// 获取临时目录
console.log(os.tmpdir())
```

## path

```js
const path = require('path');
// 文件名+后缀名
console.log(path.basename('sadfasdf/a.js')); // a.js
// 路径分隔符
console.log(path.sep); // \
// 环境变量分隔符 
console.log(path.delimiter); // ;
//获取路径的文件夹路径
console.log(path.dirname('/a/b/c/d.js')) // /a/b/c
// 获取路径的后缀名
console.log(path.extname('/a/b/c/d.js')) // .js
// 拼接路径
console.log(path.join('a', 'b', '../', 'c', 'd.js'));
// 规范路径
// console.log(path.normalize);
// 后一个路径相当于前一个路径如何跳转
console.log(path.relative('a/b/c/d.js', 'a/b/d/e.js')); //..\..\d\e.js

// 添加盘符
console.log(path.resolve(__dirname,'./a.js')) // D:\learn\新Node\a.js

```

## util

### Callbackify
    promise转回调函数

    ```js
        const util = require('util')
        async function delpy(time) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(time);
                },time)
            })
        }

        const callback = util.callbackify(delpy);

        callback(500, (error,d) => {
            console.log(d);
        })
    ```
### promisify
回调函数转promise

```js
const util = require('util');
function delpycallback(time, callback) {
    setTimeout(() => {
        callback(null,time)
    },time)
}

const promiseF = util.promisify(delpycallback);
promiseF(500).then(d=>console.log(d))
```

### inherits 
    继承，在class出来以后暂时没用了
### isDeepStrictEqual
严格的深度比较，用于比较对象

## url
主要是url转对象  对象转url

## 文件IO

所有的IO的速度旺旺地狱内存和cpu的交互速度
现代操作系统（工作四五年以后再看的书）

## fs模块

除了require的外  其他的路径参数都是以命令行所在的位置的相对位置
sync函数是同步的，会导致js运行阻塞，极其影响性能
通常，在程序启动时运行有限的次数即可

### fs.readFile

读取一个文件
```js
const fs = require('fs');
const path = require('path');
const util = require('util');
const filename = path.resolve(__dirname, './1.txt');
fs.readFile(filename, {
    encoding:'utf-8'
}, (error, content) => console.log(content));

const promiseF = util.promisify(fs.readFile);

promiseF(filename, {
    encoding:"utf-8"
}).then(content => {
    console.log(content);
})



fs.promises.readFile(filename, {
    encoding:'utf-8'
}).then(content => {
    console.log(content)
})
```

### fs.writeFile

向文件中写入内容

### fs.stat

获取文件或目录信息

```js
fs.promises.stat(__dirname).then(d=>console.log(d));

```

### fs.readdir

获取目录中的文件和子目录

```js
fs.promises.readdir(__dirname).then(d=>console.log(d));
```

### fs.mkdir

创建目录

### fs.exists

判断文件或目录是否存在

## 小练习
```js
const fs = require('fs');
const path = require('path');
const util = require('util');
const filename = path.resolve(__dirname, 'testfile');
async function test() {
    const info = await fs.promises.stat(filename);
    return info
}
class FileDeep {
    constructor(filename, name,ext, size, isFile, birthtime, ctime) {
        this.filename = filename;
        this.ext = ext;
        this.name = name;
        this.size = size;
        this.isFile = isFile;
        this.birthtime = birthtime;
        this.ctime = ctime;
    }
    static async getContent(isBuffer) {
        if (this.isFile) {
            return null
        }
        if (isBuffer) { 
            return fs.promises.readFile(this.filename);
        }
        return fs.promises.readFile(this.filename, 'utf-8');
    }
    static async getfileinfo(filename) {
        const fileinfo = await fs.promises.stat(filename);
        return new FileDeep(filename, path.basename(filename), path.extname(filename), fileinfo.size, fileinfo.isFile(), fileinfo.birthtime, fileinfo.ctime);
    }
   async getChildren() {
        if (this.isFile) {
            return []
        }
       const childrenArr = await fs.promises.readdir(this.filename);
       
       const newArr = childrenArr.map(it => {
           const filename = path.resolve(this.filename, it);
           return  FileDeep.getfileinfo(filename);
       })
       
      return  Promise.all(newArr)
    }
}

async function test() {
    const filetest = await FileDeep.getfileinfo(filename);
    const fileinfo = await filetest.getChildren()
}
test()
```

## 文件流
1. 什么是流
    流是指数据的流动，数据从一个地方缓缓的流动到另一个地方
    流是有方向的
    1. 可读流
        数据从源头流向内存
    2. 可写流
        数据从内存流向源头
    3. 双工流
        数据即可以从源头流向内存又可以内存流向源头
2. 为什么需要流
    1. 其他介质和内存的数据规模不一致
    2. 其他介质和内存的数据处理能力不一致
3. 文件流
    1. 内存数据和磁盘文件数据之间的流动
    2. 文件流创建
    ```js
    fs.createReadStream('文件路径')
    ```
