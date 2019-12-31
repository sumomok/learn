import React, { Component } from 'react'
import Tick from './Tick'
export default class tickContr extends Component {
    constructor(props) {
        super(props)
        this.state = {
            state: '正在倒计时'
        }
    }
    handlOver = () => {
        console.log('执行')
        this.setState({
            state: '倒计时结束'
        })
    }
    render() {
        return (
            <div>
                <Tick onOver={this.handlOver} />
                <h1>
                    {this.state.state}
                </h1>
            </div>
        )
    }
}
