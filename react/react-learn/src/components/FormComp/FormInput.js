import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ctx from './FormContext'
export default class FormInput extends Component {
  static contextType = ctx;
  static defineProps = {
    type: "text"
  }
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }

  render() {
    return (
      <input
        onChange={e => { this.context.onChange(e.target.value, this.props.name) }}
        type={this.props.type} name={this.props.name}
        value={(this.context.formData[this.props.name] || "")} />
    )
  }
}
