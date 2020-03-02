import React, { PureComponent } from 'react';
// import { BrowserRouter, Route } from 'react-router-dom'
import { BrowserRouter, Route } from './Router-DOM';


export default class index extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Route path='/page1' component={page1} />
                <Route path='/page2' component={page2} />
                <Route path='/' component={page} />
            </BrowserRouter>
        )
    }
}
function page1() {
    return (
        <>
            page1
        < button > 切换2</button >
        </>
    )
}
function page2() {
    return (
        <>
            page2
        < button > 切换1</button >
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