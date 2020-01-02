import React from 'react'

export default function Func(props) {
    return (
        <div>
            a:{props.a},
            b:{props.b},
            c:{props.c},
        </div>
    )
}
// 属性默认值
Func.defaultProps = {
    a:1,
    b:2,
    c:3
}