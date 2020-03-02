import React, { PureComponent } from 'react'

export default class StudentListBar extends PureComponent {
    constructor(props) {
        super(props);
        this.def = {
            sex: -1,
            key: '',
            page: 1,
            limt: 10
        }
        this.state = Object.assign({}, this.def, this.props.defaultValue);
        console.log(this.props.defaultValue);
    }
    render() {
        return (
            <div>
                请输入查询内容<input type="text" name="" id="" value={this.state.key} onChange={e => this.setState({
                    ...this.state,
                    key: e.target.value
                })} />
                不限<input type="radio" name="" id="" checked={this.state.sex === -1} value={-1} onChange={e => this.setState({
                    ...this.state,
                    sex: e.target.value
                })} />
                男<input type="radio" name="" id="" checked={this.state.sex === 0} value={0} onChange={e => this.setState({
                    ...this.state,
                    sex: e.target.value
                })} />
                女<input type="radio" name="" id="" checked={this.state.sex === 1} value={1} onChange={e => this.setState({
                    ...this.state,
                    sex: e.target.value
                })} />
                <button onClick={() => this.props.handleSearch(this.state)}>确定</button>
                <a href="/Students/123123">详情</a>
            </div>
        )
    }
}
