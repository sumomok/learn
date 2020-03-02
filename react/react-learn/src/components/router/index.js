import React from 'react';
import { Route, Link } from 'react-router-dom';
import CompA from './CompA';
import CompB from './CompB';
import RouteGuard from './RouteGuard';
export default function App() {
    return (
        <RouteGuard onBerforChange={callBack => {
            console.log('页面想要改变');
        }} >
            <Link to="/A">首页</Link>
            <Link to="/B">新闻页</Link>

            <Route path="/A" component={CompA}></Route>
            <Route path="/B" component={CompB}></Route>
        </RouteGuard>
    )
}
