import React, { Component } from 'react'
import Pager from './pager'
export default class pageTest extends Component {
    state = {
        current: 1,
        total: 100,
        limit: 9,
        panelNumber: 5
    }
    handleChange = (newPage) => {
        this.setState({
            current: newPage
        })
    }
    
    render() {
        return (
            <div>
                <div className="page">
                    <Pager {...this.state} onChangePage={this.handleChange} />
                </div>
            </div>
        )
    }
}

