import React, { PureComponent } from 'react'
import { Result } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import * as H from 'history';
interface Iprops {
    setStep: (value: number) => void
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>;
}
export default class Printing extends PureComponent<Iprops> {
    componentDidMount() {
        this.props.setStep(4);
        // @ts-ignore
        // 打印方法
        setTimeout(() => {
            this.props.history.push('/printer/UserInfo/selectTemplate/PrintSuccess')
        }, 5000)
    }
    render() {
        return (
            <div className="title">
                <Result
                    icon={<ClockCircleOutlined />}
                    title="正在打印，请稍后"
                    subTitle="打印需要一定时间，请耐心等待"
                    status="info"
                />
            </div>
        )
    }
}
