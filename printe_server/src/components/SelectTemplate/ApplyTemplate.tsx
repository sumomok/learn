import React, { PureComponent } from 'react'
import { Result } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import * as H from 'history';

interface Iprops {
    history: H.History<H.LocationState>
    nextStep: Function
    prevStep: Function
}
export default class ApplyTemplate extends PureComponent<Iprops> {
    componentDidMount() {
        // 请求模板（base64请求完毕后是base64格式）
        setTimeout(() => {
            this.props.history.push('/printer/UserInfo/selectTemplate/ShowTemplate')
            this.props.nextStep()
        }, 5000)
    }
    render() {
        return (
            <>
                <div className="title">
                    <Result
                        icon={<ClockCircleOutlined />}
                        title="正在生成模板，请稍后"
                        subTitle="生成模板需要一定时间，请耐心等待"
                        status="info"
                    />
                </div>
            </>

        )
    }
}
