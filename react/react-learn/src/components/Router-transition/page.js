import React from 'react'
import { NavLink } from 'react-router-dom';
import './page.css'
export function NavBar() {
    return (
        <div>
            <NavLink exact to='/'>首页</NavLink>
            <NavLink exact to='/news'>新闻页</NavLink>
            <NavLink exact to='/personal'>个人中心</NavLink>
        </div>
    )
}
export function News() {
    return (
        <div>
            这是新闻页
        </div>
    )
}
export function Home() {
    return (
        <div>
            这是首页
        </div>
    )
}
export function Personal() {
    return (
        <div>
            这是个人中心页
        </div>
    )
}