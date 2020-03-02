import React from 'react'
import * as Page from './page';
import { BrowserRouter as Router } from 'react-router-dom';
import TransitionRoute from './TransitionRoute';
import 'animate.css';
export default function App() {
    return (
        <Router>
            <Page.NavBar></Page.NavBar>
            <TransitionRoute path='/' exact component={Page.Home} timeout={2000} />
            <TransitionRoute path='/News' exact component={Page.News} timeout={2000} />
            <TransitionRoute path='/Personal' exact component={Page.Personal} timeout={2000} />
        </Router>
    )
}
