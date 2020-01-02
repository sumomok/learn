import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        val: 'test',
        checked: true,
        infoArr: ['足球', '篮球', '乒乓球', '排球'],
        chooseInfo: ['篮球', '乒乓球'],
        city:'beijing'
    }
    render() {
        // const infoInput = this.state.infoArr.map(it => (
        //     <label key={it}>
        //         <input type="checkbox"
        //             checked={this.state.chooseInfo.includes(it)}
        //             onChange={e => {
        //                 if (e.target.checked) {
        //                     this.setState({
        //                         chooseInfo:[...this.state.chooseInfo,it]
        //                     })

        //                 } else {
        //                     this.setState({
        //                         chooseInfo:this.state.chooseInfo.filter(item =>item !== it)
        //                     })
        //                 }
        //             }}
        //         ></input>
        //         {it}
        //     </label>
        // ))
        return (
            <div>
                {/* <input 
                    value={this.state.val}
                    onChange={e=>{
                        this.setState({
                            val:e.target.value
                        })
                    }}
                ></input> */}
                {/* <input
                    type='checkbox'
                    checked={this.state.checked}
                    onChange={e=>{
                        this.setState({
                            checked:e.target.checked
                        })
                    }}
                ></input> */}
                {/* {infoInput} */}
                <select 
                onChange={e => {
                    this.setState({
                        city:e.target.value
                    })
                }

                }>
                    <option value='beijing'>北京</option>
                    <option value='shanghai'>上海</option>
                    <option value='shenzhen'>深圳</option>
                    <option value='guangzhou'>广州</option>
                </select>

                <button
                    onClick={() => {
                        console.log(this.state.city)
                    }}
                >获取input值</button>
            </div>
        )
    }
}
