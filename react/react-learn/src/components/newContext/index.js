import React, { Component } from 'react'

const ctx = React.createContext({
    a: 0,
    b: "abc",
    fun: null
});


function CompA() {
    return (
        <ctx.Consumer>
            {value => (
                <>
                    <h1>
                        {value.a}{value.b}
                    </h1>
                    <CompB />
                </>
            )}
        </ctx.Consumer>

    )
}
class CompB extends Component {
    static contextType = ctx
    render() {
        return (
            <ctx.Consumer>
                {val => (
                    <h1>
                        {val.a}
                        {val.b}
                        <button onClick={() => {
                            console.log(val.fun(6))
                        }}>
                            点击
                        </button>
                    </h1>
                )}
            </ctx.Consumer>
        )
    }
}
export default class NewContext extends Component {
    state = {
        a: 1,
        b: "adfsa",
        fun: val => {
            this.setState({
                a: val
            })
        }
    }
    render() {
        return (
            <div>
                <ctx.Provider value={{ ...this.state }}>
                    <CompA />
                </ctx.Provider>
            </div>
        )
    }
}
