import React, { Component } from 'react'
import ctx from './FormContext'
export default class FormButton extends Component {
    static contextType = ctx
    render() {
        return (
            // <Consumer>
            <button onClick={this.context.onSubmit}>{this.props.children}</button>
            // </Consumer>
        )
    }
}
