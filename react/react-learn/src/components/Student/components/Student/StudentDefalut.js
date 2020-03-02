import React from 'react'

export default function StudentDefalut(props) {
    return (
        <div>
            <h1>学生详情页</h1>
            <h1>学号：{props.match.params.sno}</h1>
        </div>
    )
}
