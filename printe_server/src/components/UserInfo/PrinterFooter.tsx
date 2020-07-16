import React, { PureComponent } from 'react'
import '../../assets/sass/contentFooter.scss'
import Options from '../../options'
import { Link } from 'react-router-dom';
import * as H from 'history';
import again from '../../assets/img/btn_continue.png'
import api from '../../API';
import { userInfo } from '../../types/response';
import { message } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas';

interface Iprops {
    step: number,
    spining: Function
    onRequestuserInfo: (value: userInfo) => void
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>;
    userName?: string
    password?: string
    filename: string
    setStep: (value: number) => void
    loginModel: number
}

class PrinterFooter extends PureComponent<Iprops> {
    componentDidMount() {
    
    }
    state = {
        UserInfo: {},
        MenuInfo: {}
    }
    render() {
        return (
            <div className="contentFooter">
                <div className='left'>
                    {
                        this.props.step < 2 || (this.props.step > 4 && this.props.step !== 6) ? <Link to="/"><img onClick={() => {
                        }} src={Options.img.button.home} alt="" /></Link> : null
                    }

                    {
                        this.props.step < 3 || (this.props.step > 4 && this.props.step !== 6) ? <img
                            src={Options.img.button.back}
                            alt=""
                            onClick={
                                () => {
                                    this.props.history.goBack()
                                }} /> : null
                    }

                </div>
                <div className='right'>
                    {
                        this.props.step === 0 ?
                            <img src={Options.img.button.ok} alt=""
                                onClick={
                                    () => {
                                        this.props.spining(true)
                                        api.UserLogin({
                                            LoginType: this.props.loginModel,
                                            UserNameInfo: {
                                                UserName: this.props.userName ? this.props.userName : "",
                                                UserPwd: this.props.password ? this.props.password : ""
                                            }
                                        }).then(({ data }) => {
                                            console.log(data);
                                            this.props.spining(false)
                                            if (data.AppMsg === 'success') {
                                                message.success({
                                                    content: "登录成功",
                                                    icon: <CheckOutlined />
                                                });
                                                let { MenuInfo, UserInfo } = data.Data
                                                this.props.onRequestuserInfo({
                                                    MenuInfo,
                                                    UserInfo
                                                });
                                                this.setState({
                                                    MenuInfo,
                                                    UserInfo
                                                })
                                                this.props.history.push('/printer/UserInfo/selectTemplate/SelectTemplateType')
                                            } else {
                                                message.error({
                                                    content: data.AppMsg,
                                                    style: {
                                                        fontSize: 30
                                                    }
                                                });
                                            }
                                        }).catch(err => {
                                            this.props.spining(false)
                                            console.log(err);
                                            message.error({
                                                content: '网络错误，请重试',
                                                style: {
                                                    fontSize: 30
                                                }
                                            });
                                        })
                                    }} /> :
                            this.props.step === 3 ? <img src={Options.img.button.print} onClick={() => {
                                console.log('test');
                                //此处为打印方法↓
                                if (process.env.NODE_ENV === 'production') {
                                    // @ts-ignore
                                    // window.ptr.PrintRawDataAsync("PrintType=1;FilePath=D:\\download\\" + this.props.filename + ";");
                                }
                                console.log(document.getElementById('showTemplate'));
                                var rootDom = document.getElementById('showTemplate');

                                if (rootDom) {
                                    // @ts-ignore
                                    rootDom = rootDom.contentDocument.body;
                                    if (rootDom) {
                                        html2canvas(rootDom).then(canvas => {
                                            var base64Html = canvas.toDataURL('utf-8').split(',')[1];
                                            // if()
                                            // api.PrintInfo({
                                            //     UserCode: "",
                                            //     UserIDCard: "",
                                            //     UserType: "",
                                            //     PrintResult: true,
                                            //     PrintCount: 1,
                                            //     PrintNumber: "",
                                            //     Description: "",
                                            //     IsCharge: false,
                                            //     PayOrderNo: "",
                                            //     OrderTotalPrice: 1,
                                            //     TempalatePDFpath: base64Html,
                                            //     LocalePhoto: "",
                                            //     TemplateGuid: "",
                                            //     TemplateCode: ""
                                            // }).then(res => console.log());
                                        })
                                    }

                                }
                                // html2canvas(document.getElementById('#root'))
                                //跳转到即将打印的界面↓
                                // this.props.history.push({ pathname: '/printer/UserInfo/selectTemplate/Printing', state: { filename: this.props.filename } })
                            }} alt="" /> : this.props.step === 6 ? <img src={again} alt="" /> : null
                    }
                </div>
            </div>
        )
    }
}

export default PrinterFooter