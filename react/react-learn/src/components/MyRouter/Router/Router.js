import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getMatch from './match';
import ctx from './ctx';
export default class Router extends PureComponent {
    static propTypes = {
        history: PropTypes.object.isRequired,
        children: PropTypes.node
    }
    state = {
        location: this.props.history.location
    }
    match = getMatch('/', this.state.location.pathname);
    componentDidMount() {
        this.props.history.listen((location, mation) => {
            this.setState({
                location
            })
        })
    }
    render() {
        return (
            <ctx.Provider value={{
                history: this.props.history,
                location: this.state.location,
                match: this.match,
            }}>
                {this.props.children}
            </ctx.Provider>
        )
    }
}
