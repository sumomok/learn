import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'
export default class ImgContainer extends Component {
    static propTypes = {
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        imgArr: PropTypes.arrayOf(PropTypes.string).isRequired
    }
    switchTo(index) {
        console.log(this.div)
    }
    containerRef = el => {
        this.div = el
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
                    width: this.props.imgWidth * this.props.imgArr.length
                }}
            >
                {imgarr}
            </div>
        )
    }
}
