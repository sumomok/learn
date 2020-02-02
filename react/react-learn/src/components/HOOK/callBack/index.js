import React, { useCallback, useState } from 'react'

export default function Test1() {
    console.log('test1渲染')
    const [n, setN] = useState(123)
    const [x, setX] = useState(1)
    const handleChange = useCallback(() => {
        setN(123)
    }, [])
    // let handleChange = () => {
    //     setN(123)
    // }
    return (
        <div>
            <Test text={n} click={handleChange} />
            <input type='number' onChange={e => {
                setX(e.target.value)
            }
            }
                value={x} />
        </div>
    )
}
// function Test(prop) {
//     console.log('test渲染')
//     return (
//         <div>
//             <h1>{prop.text}</h1>
//             <button onClick={prop.click}>修改</button>
//         </div>
//     )
// }
class Test extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>{this.props.text}</h1>
                <button onClick={this.props.click}>修改</button>
            </div>
        )

    }
}