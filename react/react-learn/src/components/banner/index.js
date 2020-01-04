/*
 * @Author: lihaoran
 * @Date: 2020-01-02 09:13:07
 * @LastEditTime : 2020-01-02 15:47:20
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \learn\react\react-learn\src\components\banner\index.js
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import ImgContainer from './imgContainer/index';
import SwitchArrow from './switchArroow';
import SwitchDot from './switchDot';
export default class index extends Component {

    static defaultProps = {
        width: 550,
        height: 242,
        ImgArr: [],
        autoDuration: 2000,
        duration: "0.5s"
    }
    static propTypes = {
        width: PropTypes.number.isRequired,//容器高度
        height: PropTypes.number.isRequired,//容器宽度
        ImgArr: PropTypes.arrayOf(PropTypes.string).isRequired,//存放图片的数组
        autoDuration: PropTypes.number.isRequired,//自动切换的间隔时间
        duration: PropTypes.string.isRequired //完成一次切换需要的时间
    }
    state = {
        curIndex:0
    }
    timer = null
    componentDidMount() {
        this.handleSwitch();
    }

    handleClick = type=>{
        clearInterval(this.timer)
        let cur = this.state.curIndex
        console.log(cur);
        if (type === "left") {
            cur --;
            if (cur < 0) {
                cur = this.props.ImgArr.length - 1;
            }
        } else {
            cur ++;
            if (cur > this.props.ImgArr.length - 1) {
                cur = 0;
            }
        }
        console.log(cur);
        this.setState({
            curIndex:cur
        })
        this.imgContai.switchTo(cur);
        setTimeout(()=>{
            this.handleSwitch()
        },1000)
    }
    handleSwitch = ()=>{
        clearInterval(this.timer)
        // 得到ImgContainer的组件对象
        this.timer = setInterval(()=>{
            if (this.state.curIndex >= 0) {
                let cur = this.state.curIndex + 1;
                if (cur > this.props.ImgArr.length - 1) {
                    cur = 0
                } 
                this.setState({
                    curIndex:cur,
                })
                this.imgContai.switchTo(this.state.curIndex);
            }
        },this.props.autoDuration)
    }
    
    imgCont = el =>{
        this.imgContai = el
    }

    render() {
        return (
            <div className='banner-wrapper'
                style={{
                    width: this.props.width,
                    height: this.props.height,
                }}
            >
                <ImgContainer ref={this.imgCont} imgWidth={this.props.width} imgHeight={this.props.height} imgArr={this.props.ImgArr} duration={this.props.duration} />
                <SwitchArrow handleClick={this.handleClick} />
                <SwitchDot imgNumber={this.props.ImgArr.length - 1} />
            </div>
        )
    }
}
