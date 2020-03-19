<!--
 * @Author: your name
 * @Date: 2020-03-19 11:13:48
 * @LastEditTime: 2020-03-19 14:18:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\typeScript\js问题.md
 -->

# js开发中的常见的问题
- 使用了不存在的变量，函数或者成员
- 把不确定的类型当做一个确定的类型处理
- 在使用null或undefined的成员

js的原罪

- js语言本身的特点，决定了该语言无法适应大型的复杂的项目
- 弱类型：某个变量，可以随时更换类型
- 解释性语言：错误发生的时间，是在运行时

# TypeScript

简称Ts

- 类型系统

对代码中所有的标识符（变量，函数，参数，返回值）进行类型检查

- 可选的

学习曲线非常平滑

- 静态的（在运行之前）

无论是浏览器环境，还是环境，无法直接识别ts代码

> babel:es6->es5
> tsc : ts->es

tsc ：ts编辑器
静态：类型检查发生的时间，在编译的时候，而非运行时。

Ts不参与任何运行时的类型检查。

## Ts常识

- 2012年由微软公司发布发布
- 定位：完全兼容js，对js进行补强
- Anders hejlsberg 负责开发ts项目
- 开源、拥抱ES标准
- 目前版本 3.4
- 官网：https://www.typescriptlang.org/

**额外的惊喜**

有了类型检查，增强了面向对象的开发

js中也有累和对象，支持面向对象的开发，没有类型检查，很多面向对象的场景实现起来有诸多问题。
使用TS后，可以编写出完善的面向对象代码.

