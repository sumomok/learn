import React from 'react'

export default function Login() {
    return (
        <div>
            <h1>登录页</h1>
            <button onClick={() => {
                console.log('登录成功')
            }}>登录</button>
        </div>
    )
}
