<!--
 * @Author: your name
 * @Date: 2020-03-19 14:02:14
 * @LastEditTime: 2020-03-19 17:46:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\lession1.md
 -->

# 在 node中搭建ts开发环境

## 安装typescript
    npm/cnpm install -g typescript

默认情况下，ts会做出下面几种假设：
1. 假设当前的执行环境是dom
2. 如果代码中没有使用模块化语句，认为该代码是全局执行
3. 编译目标代码是es3

有两种方式更改以上假设

1. 在命令行后 加上相关参数
2. 使用ts配置文件，更改编译选项

# ts的配置文件

使用配置文件后，使用tsc进行编译时，不能跟上文件名，否则会忽略配置文件。
@types/node
@types 是一个官方的类型库，对于很多已有的js依赖进行类型描述

# 使用第三方库简化流程

ts-node：可以简化 编译流程，使其在内存中编译完成并运行 （ts-node 不生成编译后的文件，在内存中编译完毕后直接运行）

nodemon :检测文件变化，并执行相应命令 (--watch 文件目录 指只监听配置的文件目录  -e 文件后缀名 指只监听该文件后缀名的文件 )

# 基本类型约束
> TS是一个可选的静态类型约束系统

## 如果进行类型约束

仅需要在变量，函数的参数，函数的返回值位置后加冒号和类型约束即可

## 源代码和编译结果的差异

除了类型去掉，其他没有任何变化

## 基本类型

- number
- string
- boolean 
- object
- array
- null 和 undefined

null和undefined是其他类型的子类型,在配置中未配置strict时可以赋值给其他任何类型的变量

想要避免这种情况，在配置中添加strictNullChecks:true即可

strict 是开启所有严格模式


# 常用类型

- 联合类型 多种类型任选其一

配合类型保护进行判断

类型保护:当对某个变量进行类型判断之后，在判断的语句块中便可以确定他的确切类型，typeof可以出发类型保护。

- void类型：通常用于约束函数的返回值，表示该函数没有任何的返回

- never  表示函数永远不可能结束

- 字面量取值 ：约束为某一个值 表示某个变量只能为一个某一个值，
- 元祖：约束一个数组为固定长度，内容固定
- any类型：any类型可以绕过类型检查，any类型的数据可以赋值给任意类型  不能随意使用

# 函数相关约束

函数重载： 在一个函数声明上面提供这个函数的传参情况，ts会识别
如下例子

```js
function test(a:number,b:number):number
function test(a:string,b:string):string
function test(a:string|number,b:string|number):string|number {
    if (typeof a === 'string' && typeof b==="string"){
        return a + b
    } else if (typeof a === 'number' && typeof b==="number"){
        return a+ b
    }
}


```