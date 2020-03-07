import React, { PureComponent } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from './Router-DOM';


export default class index extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/page1' component={page1} />
                    <Route path='/page1' component={page2} />
                    <Route path='/' component={page} />
                </Switch>
            </BrowserRouter>
        )
    }
}
function page1({ history }) {
    return (
        <>
            page1
        < button onClick={
                () => {
                    history.push('/page2')
                }
            } > 切换2</button >
        </>
    )
}
function page2({ history }) {
    return (
        <>
            page2
        < button onClick={
                () => {
                    history.push('/page1')
                }
            } > 切换1</button >
        </>
    )
}
function page() {
    return (
        <>
            page
        </>
    )
}