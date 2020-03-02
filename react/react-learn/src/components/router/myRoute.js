import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter, Switch } from 'react-router-dom';
import login from './login';
export default function myRoute({ component: Component, path, location }) {
    return (
        <Route path={path} render={value => {
            if (login.loginState) {
                return <Component />
            } else {
                console.log('未登录')
                return <Redirect to={{
                    pathname: "/login",
                    state: value.location.pathname
                }} />
            }
        }} />
    )
}
