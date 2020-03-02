import { createBrowserHistory } from 'history';
import React, { PureComponent } from 'react';
import { Router } from '../Router/index.js';

export default class BrowserRouter extends PureComponent {
    history = createBrowserHistory({ ...this.props })
    render() {
        return (
            < Router history={this.history} >
                {this.props.children}
            </Router >
        )
    }
}
