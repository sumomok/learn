import React, { Component } from 'react'

export default class Tick extends Component {
    state = {
        number: 5
    }
    constructor(props) {
        super(props)
        let timer = setInterval(() => {
            this.setState({
                number: this.state.number - 1,
            })
            if (this.state.number === 0) {
                clearInterval(timer)
                props.onOver();
            }
        }, 1000)
    }
    render() {
        return (
            <h1>
                倒计时：{this.state.number}
            </h1>
        )
    }
}
