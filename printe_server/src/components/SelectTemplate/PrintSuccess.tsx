import React, { PureComponent } from 'react'
import { Result} from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

export default class PrintSuccess extends PureComponent {
    render() {
        return (
            <div className="title">
                <Result
                    icon={<CheckCircleOutlined />}
                    title="打印成功"
                    subTitle="打印成功，请取走打印材料"
                    status="success"
                />
            </div>
        )
    }
}
