/*
 * @Author: lihaoran
 * @Date: 2020-01-02 15:15:35
 * @LastEditTime : 2020-01-02 15:39:53
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\banner\switchDot\index.js
 */
import React, { Component } from 'react';
import './index.css';
import PropType from 'prop-types';
export default class SwitchDot extends Component {
    static PropType = {
        imgNumber:PropType.number.isRequired
    }
    render() {
        let liArr = [];
        for(let i = 0; i<this.props.imgNumber; i ++) {
            liArr.push(
                <li>
                    
                </li>
            )
        }
        return (
            <div className="SwitchDot">
                <ul>
                    {}
                </ul>
            </div>
        )
    }
}
