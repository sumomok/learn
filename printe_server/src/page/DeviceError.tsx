import React, { PureComponent } from 'react'
import { Result } from 'antd'

export default class NotFindError extends PureComponent {
    render() {
        return (
            <div className="title" style={{ fontSize:30}}>
                <Result
                    status="error"
                    title="打印机出现故障"
                    subTitle="请联系相关运维人员进行处理，处理后请重启电脑，谢谢"
                />
            </div>

        )
    }
}
