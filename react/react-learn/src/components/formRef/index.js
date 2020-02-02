/*
 * @Author: your name
 * @Date: 2020-01-02 16:43:11
 * @LastEditTime : 2020-01-02 17:36:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\formRef\index.js
 */
import React, { Component } from 'react'
/**
 * 函数组件的ref转发
 * @param {*} props 
 * @param {*} ref 
 */
// const NewA = React.for wardRef(A)
// function A(props,ref) {
//     return <h1 ref={ref}>组件A</h1>
// }

class A extends Component {
    render(){
        return <h1 ref={this.props.forwardRef}>组件A</h1>
    }
}

const NewA = React.forwardRef((props,ref)=>{
    return <A forwardRef={ref}/>
})

export default class index extends Component {
    forwardRef = el =>{
        console.log(el)
    }
    render() {
        return (
            <div>
                <NewA ref={this.forwardRef} />
            </div>
        )
    }
}
