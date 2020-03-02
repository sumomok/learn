import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import NeedLogin from './NeedLogin';
export default function App() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/login">登录</Link>
                </li>
                <li>
                    <Link to="/NeedLogin">个人中心</Link>
                </li>
            </ul>
            <Switch>
                <Route path='/Login' component={Login}></Route>
                <Route path='/NeedLogin' component={NeedLogin}></Route>
                <Route path='/' component={Home}></Route>
            </Switch>
        </Router>
    )
}
