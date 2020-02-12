import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login'
export default class App extends PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/login' exact component={Login} />
                    <Route path='/' component={Home} />
                </Switch>
            </Router>
        )
    }
}
