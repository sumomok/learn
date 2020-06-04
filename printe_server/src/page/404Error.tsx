import React, { PureComponent } from 'react'
import { Result } from 'antd'

export default class NotFindError extends PureComponent {
    render() {
        return (
            <div className="title" style={{ fontSize:30}}>
                <Result
                    status="404"
                    title="404"
                    subTitle="抱歉，页面未找到"
                />
            </div>

        )
    }
}
