import React, { Component } from 'react'

export default class form extends Component {
    state = {
        userId:'',
        password:'',
        sex:'male',
        loves:['篮球','足球','音乐','乒乓球','',''],
        chooseLoves:[]
    }
    render() {
        return (
            <div>
                <p>
                    <input></input>
                </p>
            </div>
        )
    }
}
