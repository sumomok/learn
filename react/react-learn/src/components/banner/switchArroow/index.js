/*
 * @Author: lihaoran
 * @Date: 2020-01-02 14:34:38
 * @LastEditTime : 2020-01-02 14:47:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\banner\switchArroow\index.js
 */
import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types'
export default class SwitchArroow extends Component {
    static propTypes = {
        handleClick :PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="Arrow">
                <span onClick={()=>{
                    this.props.handleClick('left')
                }} className='left'>
                    &lt;
                </span>
                <span className='right'
                    onClick={()=>{
                        this.props.handleClick('right')
                    }}>
                    &gt;
                </span>
            </div>
        )
    }
}
