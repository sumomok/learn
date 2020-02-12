import React, { PureComponent } from 'react';
import './index.css';

export default class Header extends PureComponent {
    render() {
        return (
            <div className='Header-container'>
                <div className="left">学生管理系统</div>
                <div className="right">
                    <span>用户名</span>
                    <span>退出</span>
                </div>
            </div>
        )
    }
}
