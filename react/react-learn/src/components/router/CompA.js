import React from 'react'
import { Link } from 'react-router-dom'
export default function CompA(props) {
    return (
        <div style={
            {
                transition
            }
        }>
            <Link to='/A/D'>新闻首页</Link>
            <Link to='/A/B'>新闻详情页</Link>
            <Link to='/A/C'>新闻搜索页</Link>
            {props.children}
        </div>
    )
}
