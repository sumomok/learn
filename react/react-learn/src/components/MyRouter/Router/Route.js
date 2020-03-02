import React, { PureComponent } from 'react';
import ctx from './ctx';
import getMatch from './match'
export default class Route extends PureComponent {
    matchRoute(location) {
        let matchres = getMatch(this.props.path, location.pathname);
        return matchres
    }
    renderDOM() {

    }
    render() {
        return (
            <ctx.Consumer>
                {values => {
                    let Comp = this.props.children || ''
                    return (
                        <ctx.Provider value={{ ...values, match: this.matchRoute(values.location) }}>
                            {this.renderDOM}
                        </ctx.Provider>
                    )
                }}
            </ctx.Consumer>
        )
    }
}
