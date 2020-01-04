/*
 * @Author: your name
 * @Date: 2020-01-03 10:53:43
 * @LastEditTime : 2020-01-03 11:37:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\oldContext\index.js
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
const type = {
    a: PropTypes.number,
    b: PropTypes.string.isRequired,
    change:PropTypes.func,
}
//函数组件上下文传入到第二个参数里边
function ChildA(prop, context) {
    return (
        <>
            <p>ChildA:{context.a} {context.b}</p>
            <ChildB />
        </>
    )
}
// 函数组件用下面的方法定义静态属性
ChildA.contextTypes = type
class ChildB extends Component {
    // constructor(props,context) {
    //     // 第一种
    //     // super(props)
    //     // console.log(context);
    //     // 第二种 一般用这种方法
    //     // super(props,context)//将参数的上下文交给父类处理  context中
    //     // console.log(this.context);
    // }
    static contextTypes = type
    render() {
        return <p>
            ChildB：{this.context.a} {this.context.b}
            <button onClick={()=>{
                this.context.change(5)
            }
            }>点击+1</button>
        </p>
    }
}

export default class OldContext extends Component {
    static childContextTypes = type
    state = {
        a: 1,
        b: "132123",
        change:newA=>{
            this.setState({
                a:newA,
            })
        }
    }
    getChildContext() {
        console.log('获取上下文中的数据');
        return {
            a:this.state.a,
            b:this.state.b,
            change:this.state.change
        }
    }
    render() {
        return (
            <div>
                <h1>旧上下文</h1>
                <ChildA />
                <button onClick={()=>{
                    this.setState({
                        a:this.state.a+1,
                    })
                }
                }>a+1</button>
            </div>
        )
    }
}
