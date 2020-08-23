import React, { PureComponent } from 'react'
import { Result, message } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import * as H from 'history';
import api from '../../API';
interface Iprops {
    setStep: (value: number) => void
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>;
}
let flag = true;
export default class Printing extends PureComponent<Iprops> {
    componentDidMount() {
        this.props.setStep(4);
        if (process.env.NODE_ENV === 'production' && flag) {
            flag = false;
            // @ts-ignore
            window.getPrinterDeviceInfo(result => {
                if (result) {
                    flag = false;
                    let base64Html = window.localStorage.getItem('base64Html');
                    let UserInfo = window.localStorage.getItem('UserInfo');
                    let PrinterNumber = window.localStorage.getItem('printNumber');
                    let TemplateID = window.localStorage.getItem('TemplateID');
                    let TemplateCode = window.localStorage.getItem('TemplateCode');
                    // if (MenuInfo && UserInfo && MenuInfo !== "{}" && UserInfo !== "{}") {
                    UserInfo = JSON.parse(UserInfo ? UserInfo : "");
                    parseInt(PrinterNumber ? PrinterNumber : "")
                    // console.log(base64Html);
                    // if(MenuInfo && UserInfo)
                    api.PrintInfo({
                        // @ts-ignore
                        UserCode: UserInfo ? UserInfo.UserCode ? UserInfo.UserCode : "" : "",
                        // @ts-ignore
                        UserIDCard: UserInfo ? UserInfo.UserCode ? UserInfo.UserCode : "" : "",
                        // @ts-ignore
                        UserType: UserInfo ? UserInfo.UserType ? UserInfo.UserType : "" : "",
                        PrintResult: true,
                        PrintCount: 1,
                        PrintNumber: PrinterNumber ? PrinterNumber : "",
                        Description: "打印成功",
                        IsCharge: false,
                        IsElectronic: true,
                        PayOrderNo: "",
                        OrderTotalPrice: 0,
                        TempalatePDFpath: "",
                        LocalePhoto: base64Html ? base64Html : "",
                        TemplateGuid: TemplateID ? TemplateID : "",
                        TemplateCode: TemplateCode ? TemplateCode : ""
                    })
                        .then(res => this.props.history.push('/printer/UserInfo/selectTemplate/PrintSuccess'))
                } else {
                    message.error('打印失败')
                    this.props.history.push('/DeviceError');
                }
            })
        }
        if (process.env.NODE_ENV === 'development' && flag) {
            flag = false;
            let base64Html = window.localStorage.getItem('base64Html');
            let UserInfo = window.localStorage.getItem('UserInfo');
            let PrinterNumber = window.localStorage.getItem('printNumber');
            let TemplateID = window.localStorage.getItem('TemplateID');
            let TemplateCode = window.localStorage.getItem('TemplateCode');
            // if (MenuInfo && UserInfo && MenuInfo !== "{}" && UserInfo !== "{}") {
            UserInfo = JSON.parse(UserInfo ? UserInfo : "");
            parseInt(PrinterNumber ? PrinterNumber : "")
            // console.log(base64Html);
            // if(MenuInfo && UserInfo)
            api.PrintInfo({
                // @ts-ignore
                UserCode: UserInfo ? UserInfo.UserCode ? UserInfo.UserCode : "" : "",
                // @ts-ignore
                UserIDCard: UserInfo ? UserInfo.UserCode ? UserInfo.UserCode : "" : "",
                // @ts-ignore
                UserType: UserInfo ? UserInfo.UserType ? UserInfo.UserType : "" : "",
                PrintResult: true,
                PrintCount: 1,
                PrintNumber: PrinterNumber ? PrinterNumber : "",
                Description: "打印成功",
                IsCharge: false,
                IsElectronic: true,
                PayOrderNo: "",
                OrderTotalPrice: 0,
                TempalatePDFpath: "",
                LocalePhoto: base64Html ? base64Html : "",
                TemplateGuid: TemplateID ? TemplateID : "",
                TemplateCode: TemplateCode ? TemplateCode : ""
            })
                .then(res => this.props.history.push('/printer/UserInfo/selectTemplate/PrintSuccess'))
        }
        // @ts-ignore
        // 打印方法

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
