import React, { PureComponent } from 'react'

export default class index extends PureComponent {
    state = {
        inputValue:"test"
    }
    render() {
        return (
            <div>
                {this.state.inputValue}
                <input type="text" v-model={this.state.inputValue}/>
            </div>
        )
    }
}
