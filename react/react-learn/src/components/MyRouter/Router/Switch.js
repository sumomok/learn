import React, { PureComponent } from 'react'
import ctx from './ctx';
import match from './match';
import Route from './Route'
export default class Switch extends PureComponent {
    getMatchDom = ({ location }) => {
        console.log(this)
        let children;
        if (this.props.children.type === Route) {
            children.push(this.props.children);
        } else if (Array.isArray(this.props.children)) {
            children = [...this.props.children]
        } else if (this.props.children.type !== Route) {
            return new Error('不能传入除route以外的组件')
        }
        for (let child of children) {
            let { path, exact, sensitive, strict } = child.props
            let result = match(path, location.pathname, { exact, sensitive, strict })
            if (result) {
                return child
            }
        }
        // return <>
        //     <h1>test</h1>
        // </>

    }
    render() {
        return (
            <ctx.Consumer>
                {this.getMatchDom}
            </ctx.Consumer>
        )

    }
}
