import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter, Switch } from 'react-router-dom';
function CompA() {
    return (<h1>组件A</h1>)
}
function CompB() {
    return (<h1>组件B</h1>)
}
function ChangeComp(props) {
    return (
        <>
            <NavLink to="/A">组件A</NavLink>
            <NavLink to={{
                pathname: "/B",
                hash: "#abc",
                search: "?a=1&b=2"
            }}
                replace
                innerRef={node => console.log(node)}
            >组件B</NavLink>
        </>
    )

}
// const Change = withRouter(ChangeComp);
// function MyLink(props) {
//     return (
//         <>
//             <a href="javaScript:;" onClick={() => {
//                 props.history.push(props.to)
//             }}>{props.children}</a>
//         </>
//     )
// }
export default function App() {
    return (

        <Router>
            <ChangeComp></ChangeComp>
            <Switch>
                <Route path='/A' exact component={CompA}></Route>
                <Route path='/B' exact component={CompB}></Route>
                <Redirect to="/A/:id" from="/abc/:id" />
            </Switch>
        </Router>
    )
}
