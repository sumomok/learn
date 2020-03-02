import React, { PureComponent } from 'react';
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
class RouteGuard extends PureComponent {
    handleGuard = (callBack) => {
        if (this.props.onBerforChange) {
            this.props.onBerforChange(callBack)
        } else {
            callBack(true)
        }
    }
    render() {
        return (
            <Router getUserConfirmation={this.handleGuard}>
                <RGuardHelp></RGuardHelp>
                {this.props.children}
            </Router>
        )
    }
};
class GuardHelp extends PureComponent {
    componentDidMount() {
        this.props.history.block((newLocation, action) => {
            return ''
        });
        let unListen = this.props.history.listen((newLocation, action) => {
            if (this.props.onChange) {
                this.props.onChange(newLocation, action)
            } else {
                unListen()
            }
        })
    }
    render() {
        return null
    }
}
const RGuardHelp = withRouter(GuardHelp);
export default RouteGuard
