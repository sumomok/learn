import React, { Component } from 'react'

export default class NewLife extends Component {
    state = {
        n: 0,
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState)
        return null;
    }
    render() {
        return (
            <div>
                <h1></h1>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}></button>
            </div>
        )
    }
}
