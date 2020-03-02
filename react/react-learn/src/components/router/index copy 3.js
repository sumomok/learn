import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter, Switch } from 'react-router-dom';
import log from './login';
import MyRoute from './myRoute';
function CompA() {
    return (<h1>组件A</h1>)
}
function CompB(props) {
    console.log(props.location)
    return (
        <div>
            授权登录
            <button onClick={() => {
                log.login()
                props.history.push(props.location.state ? props.location.state : "/A")
            }}>登录</button>
        </div>
    )
}
function CompC() {
    return (<h1>访问受限的组件C</h1>)
}
export default function App() {
    return (
        <div>
            <Router>
                <div>
                    <Link to="/A">组件A</Link>
                    <Link to="/login">登录</Link>
                    <Link to="/C">受保护的组件</Link>
                </div>
                <Route path="/A" component={CompA} ></Route>
                <Route path="/login" component={CompB} ></Route>
                <MyRoute path='/C' component={CompC} ></MyRoute>
            </Router>
        </div>
    )
}
