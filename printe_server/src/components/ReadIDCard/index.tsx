import React, { PureComponent } from 'react';
import '../../assets/sass/ReadIDcard.scss';
import api from '../../API';
import { message } from 'antd';
import * as H from 'history';
import { userInfo } from '../../types/response';
import { CheckOutlined } from '@ant-design/icons';
interface IProp {
    spining: Function
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>;
    onRequestuserInfo: (value: userInfo) => void
}
var flag = true
export default class ReadIDCard extends PureComponent<IProp> {
    componentDidMount() {
        if (process.env.NODE_ENV === 'production' && flag) {
            flag = false;

            //@ts-ignore
            window.acceptAndRead();
            //@ts-ignore
            let timer = setInterval(() => {
                //@ts-ignore
                let getUseInfo = window.getInfo();
                if (getUseInfo !== '000015|||||||||||||||') {
                    clearInterval(timer);
                    var UserArr = getUseInfo.split('|');
                    var userName = UserArr[0][6] + UserArr[0][7] + UserArr[0][8]
                    var userIDNumber = UserArr[5];
                    window.localStorage.setItem('ReadIDCardName', userName)
                    this.props.spining(true);
                    api.UserLogin({
                        LoginType: 10,
                        IDCardInfo: userIDNumber
                    }).then(({ data }) => {
                        this.props.spining(false)
                        if (data.AppMsg === 'success') {
                            message.success({
                                content: "登录成功",
                                icon: <CheckOutlined />
                            });
                            let { MenuInfo, UserInfo } = data.Data
                            UserInfo.UserName = userName
                            this.props.onRequestuserInfo({
                                MenuInfo,
                                UserInfo
                            });
                            window.localStorage.setItem('MenuInfo', JSON.stringify(MenuInfo));
                            window.localStorage.setItem('UserInfo', JSON.stringify(UserInfo));
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
                        message.error({
                            content: '网络错误，请重试',
                            style: {
                                fontSize: 30
                            }
                        });
                    })
                }
            },1000)
        }
        if (process.env.NODE_ENV === 'development' && flag) {
            flag = false;
            var getUseInfo = "000125陈奕旭|男|汉族|1998-12-26|山东省平邑县浚河路23号265室|371326199812262811|平邑县公安局|20170426|20270426||220D4482B02B7787||01";
            var UserArr = getUseInfo.split('|');
            var userName = UserArr[0][6] + UserArr[0][7] + UserArr[0][8]
            var userIDNumber = UserArr[5];
            window.localStorage.setItem('ReadIDCardName', userName)
            this.props.spining(true);
            api.UserLogin({
                LoginType: 10,
                IDCardInfo: userIDNumber
            }).then(({ data }) => {
                this.props.spining(false)
                if (data.AppMsg === 'success') {
                    message.success({
                        content: "登录成功",
                        icon: <CheckOutlined />
                    });
                    let { MenuInfo, UserInfo } = data.Data
                    UserInfo.UserName = userName
                    this.props.onRequestuserInfo({
                        MenuInfo,
                        UserInfo
                    });
                    window.localStorage.setItem('MenuInfo', JSON.stringify(MenuInfo));
                    window.localStorage.setItem('UserInfo', JSON.stringify(UserInfo));
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
                message.error({
                    content: '网络错误，请重试',
                    style: {
                        fontSize: 30
                    }
                });
            })
        }

    }
    componentWillUnmount() {
        if (process.env.NODE_ENV === 'production') {
            //@ts-ignore
            window.cancelRead()
        }
    }
    render() {
        return (
            <div>
                <div className="title">请将您的身份证放置在读卡区</div>
                <div className="showImg" style={{ height: 550 }}>
                    <div className="idcard"></div>
                    <div className="jindu"></div>
                    <div className="part"></div>
                </div>
            </div>
        )
    }
}
