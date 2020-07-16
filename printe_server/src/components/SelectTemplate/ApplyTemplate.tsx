import React, { PureComponent } from 'react';
import axios from 'axios';
import { Result, message } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import * as H from 'history';
// import { v4 } from 'uuid';
interface Iprops {
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>
    setStep: (value: number) => void
    setFileName: (filename: string) => void
    setHtmlContent:(htmlcontent:string)=>void
}
export default class ApplyTemplate extends PureComponent<Iprops> {
    componentDidMount() {
        this.props.setStep(2)
        // @ts-ignore
        if (window.top.applyTemplate) {
            return;
        }
        // @ts-ignore
        window.top.applyTemplate = true
        // @ts-ignore
        let params = {
            // @ts-ignore
            userCode: this.props.location.state.userCode,
            // userCode: "09901",
            // @ts-ignore
            templateID: this.props.location.state.templateId,
            TerminalNO: '103',
            TerminalIP: '127.0.0.1',
            // @ts-ignore
            menumodelurl: this.props.location.state.menumodelurl
        }
        axios.post('http://192.168.10.4:8030/applyTemplate', params).then(res => {
            // @ts-ignore
            let htmlcontent = res.data.Data.htmlData;
            // 将文件内容下载到本地
            var that = this
            if (process.env.NODE_ENV === 'production') {
                //@ts-ignore
                window.top.saveHTMLFile(res.data.Data.fileName, htmlcontent, e => {
                    // @ts-ignore
                    window.top.applyTemplate = false;
                    if (e) {
                        message.error('文件存放失败：' + e);
                    } else {
                        // @ts-ignore
                        that.props.setFileName(res.data.Data.fileName);
                        that.props.setHtmlContent(htmlcontent);
                        that.props.history.push({ pathname: '/printer/UserInfo/selectTemplate/ShowTemplate', state: { ...this.props.location.state, fileName: res.data.Data.fileName,htmlcontent } })
                    }
                });
            }
            //生产环境下注释
            if (process.env.NODE_ENV === 'development') {
                that.props.setFileName(res.data.Data.fileName);
                that.props.setHtmlContent(htmlcontent);
                that.props.history.push({ pathname: '/printer/UserInfo/selectTemplate/ShowTemplate', state: { ...this.props.location.state, fileName: res.data.Data.fileName,htmlcontent } })
            }
        }).catch(e => {
            console.log(e);
            message.error('申请模板失败');
            // 模板申请失败后的操作
        })
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
