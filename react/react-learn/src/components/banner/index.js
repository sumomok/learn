import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import ImgContainer from './imgContainer/index'
export default class index extends Component {

    static defaultProps = {
        width: 550,
        height: 242,
        ImgArr: [],
        autoDuration: 2000,
        duration: 2000
    }

    static propTypes = {
        width: PropTypes.number.isRequired,//容器高度
        height: PropTypes.number.isRequired,//容器宽度
        ImgArr: PropTypes.arrayOf(PropTypes.string).isRequired,//存放图片的数组
        autoDuration: PropTypes.number.isRequired,//自动切换的间隔事件
        duration: PropTypes.number.isRequired //完成一次切换需要的事件
    }

    render() {
        return (
            <div className='banner-wrapper'
                style={{
                    width: this.props.width,
                    height: this.props.height,
                }}
            >
                <ImgContainer imgWidth={this.props.width} imgHeight={this.props.height} imgArr={this.props.ImgArr} />
            </div>
        )
    }
}
