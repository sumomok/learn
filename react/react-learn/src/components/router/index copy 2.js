import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter, Switch } from 'react-router-dom';
function CompA() {
    return (<h1>组件A</h1>)
}
function CompC() {
    return (<h1>组件C</h1>)
}
function CompD() {
    return (<h1>组件D</h1>)
}
function CompB({ match }) {
    return (
        <div>
            {/* <div style={
                {
                    width: 500,
                    height: 500,
                    border: "2px solid"
                }
            }> */}
            <Link to={`${match.url}/CompC`}>C组件</Link>
            <Link to={`${match.url}/CompD`}>D组件</Link>
            <Route path={`${match.url}/CompC`} component={CompC}></Route>
            <Route path={`${match.url}/CompD`} component={CompD}></Route>
            {/* </div> */}

        </div>
    )
}
export default function App() {
    return (
        <div>
            <CompA />
            <Router>
                <Route path='/B' component={CompB}></Route>
            </Router>
        </div>
    )
}
