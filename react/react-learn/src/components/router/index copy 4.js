import React from 'react';
import RootRouter from './RootRouter';
import { Link, BrowserRouter as Router } from 'react-router-dom';
export default function App() {
    return (
        <Router>
            <Link to="/">首页</Link>
            <Link to="/A">新闻页</Link>
            <RootRouter />
        </Router>
    )
}
