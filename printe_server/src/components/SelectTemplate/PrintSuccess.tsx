import React, { PureComponent } from 'react'
import { Result} from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
interface IProps{
    setStep:(value:number)=>void
}
export default class PrintSuccess extends PureComponent<IProps> {
    componentDidMount() {
        this.props.setStep(6)
    }
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
