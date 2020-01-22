import React, { Component } from 'react';
import ctx from './FormContext';
import Proptypes from 'prop-types';
import Input from './FormInput';
import Submit from './FormButton';
export default class Form extends Component {
    static propTypes = {
        onSubmit: Proptypes.func.isRequired
    }
    state = {
        formData: {
        },
        onChange: (value, name) => {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [name]: value
                }

            })
        },
        onSubmit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData)
        },
        test: '11111'
    }
    render() {
        return (
            <ctx.Provider value={this.state}>
                {this.props.children}
            </ctx.Provider>
        )
    }
}

Form.Input = Input;
Form.Submit = Submit;
