import React from 'react'
import { } from 'react-router';
import { NavLink } from 'react-router-dom';
export const Layout: React.FC = function () {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/home">首页</NavLink>
                </li>
                <li>
                    <NavLink to="/movieList">电影列表</NavLink>
                </li>
                <li>
                    <NavLink to="/addMovie">添加电影</NavLink>
                </li>
                <li>
                    <NavLink to="/editMovie">修改电影</NavLink>
                </li>
            </ul>
        </div>
    )
}
