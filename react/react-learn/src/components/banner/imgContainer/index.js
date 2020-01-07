/*
 * @Author: your name
 * @Date: 2020-01-02 09:13:07
 * @LastEditTime : 2020-01-02 14:28:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\banner\imgContainer\index.js
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
export default class ImgContainer extends Component {
    static propTypes = {
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        imgArr: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.string.isRequired,
    }
    /**
     * 切换到对应序号的图片
     * @param {*} index 
     */
    switchTo(index) {
        if (index <= 0) {
            index = 0;
            this.div.style.transition = "all " + this.props.duration;
        } else if (index >= this.props.imgArr.length) {
            index = this.props.imgArr.length;
            this.div.style.transition = "none";
        }
        const targetLeft = - index * this.props.imgWidth;
        this.div.style.marginLeft = targetLeft + "px";
    }
    containerRef = el => {
        this.div = el;
    }
    render() {
        let imgarr = this.props.imgArr.map((it, index) => {
            return (
                <img
                    style={{
                        width: this.props.imgWidth
                    }}
                    key={index} src={it} alt=''>

                </img>)
        })
        return (
            <div className='banner-container'
                ref={this.containerRef}
                style={{
                    width: this.props.imgWidth * (this.props.imgArr.length + 1),
                    transition: "all " + this.props.duration
                }}
            >
                {imgarr}
            </div>
        )
    }
}
