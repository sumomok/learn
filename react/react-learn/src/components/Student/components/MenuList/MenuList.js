import React, { PureComponent } from 'react'
import './index.css'
export default class MenuList extends PureComponent {
    render() {
        return (
            <ul className='menuList'>
                <li className='menu'><a href="/StudentList">学生列表</a></li>
                <li className='menu'><a href="/classList">课程列表</a></li>
                <li className='menu'><a href="/Students/add">添加学生</a></li>
                <li className='menu'><a href="/Students/edit">修改学生</a></li>
            </ul>
        )
    }
}
