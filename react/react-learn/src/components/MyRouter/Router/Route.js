import React, { PureComponent } from 'react';
import ctx from './ctx';
import getMatch from './match'
export default class Route extends PureComponent {
    matchRoute(location) {
        let { exact, sensitive, strict } = this.props
        let matchres = getMatch(this.props.path, location.pathname, { exact, sensitive, strict });
        return matchres
    }
    renderDOM(location) {
        if (this.props.children) {
            if (typeof this.props.children !== 'function') {
                this.props.children(ctx)
            }
            return this.props.children
        } else if (typeof this.props.render === 'function' && this.matchRoute(location)) {
            return this.props.render(ctx)
        } else if (this.props.component && this.matchRoute(location)) {
            let Comp = this.props.component
            return <Comp {...ctx._currentValue} />
        }
        return null;
    }
    render() {
        return (
            <ctx.Consumer>
                {values => {
                    return (
                        <ctx.Provider value={{ ...values, match: this.matchRoute(values.location) }}>
                            {this.renderDOM(values.location)}
                        </ctx.Provider>
                    )
                }}
            </ctx.Consumer>
        )
    }
}
