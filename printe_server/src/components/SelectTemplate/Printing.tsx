import React, { PureComponent } from 'react'
import { Result } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import * as H from 'history';
interface Iprops {
    nextStep: Function
    prevStep: Function
    history: H.History<H.LocationState>
}
export default class Printing extends PureComponent<Iprops> {
    componentDidMount() {
        // @ts-ignore
        // 打印方法
        // window.ptr.PrintRawDataAsync("PrintType=1;FilePath=D:\\test.png;");
        setTimeout(() => {
            this.props.history.push('/printer/UserInfo/selectTemplate/PrintSuccess')
            this.props.nextStep()
        },5000)
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
