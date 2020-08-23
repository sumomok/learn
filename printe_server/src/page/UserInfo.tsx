import React, { PureComponent } from 'react';
import Options from '../options';
import PrintLayout from '../components/layout/layout';
import Header from '../components/Home/header';
import Content from '../components/UserInfo/content';
import PrinterFooter from '../components/UserInfo/PrinterFooter';
// @ts-ignore
import CountDown from 'react-countdown-clock'
import * as H from 'history';
import { Steps, Spin } from 'antd';
import { userInfo } from '../types/response';
import Login from '../components/UserInfo/login';
const { Step } = Steps
interface Iprops {
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>;
}
interface IState {
    current: number,
    spining: boolean,
    userName: string,
    userPassword: string,
    templateNumber: string,
    inputDomClass: string,
    userInfo: userInfo,
    fileName: string,
    htmlcontent: string
}
export default class UserInfo extends PureComponent<Iprops, IState> {
    state = {
        current: 0,
        spining: false,
        userName: "",
        userPassword: "",
        templateNumber: "",
        inputDomClass: "",
        userInfo: {
            MenuInfo: [],
            UserInfo: {
                UserCode: "",
                UserName: "",
                UserType: ""
            }
        },
        fileName: '',
        htmlcontent: ""
    };
    setStep(value: number) {
        this.setState({
            ...this.state,
            current: value
        })
    }
    render() {
        return (
            <div className="testSpin" style={{ width: '100%', height: '100%', background: `url(${Options.img.backgroundUrl})` }}>
                <Spin size="large" wrapperClassName="testSpin" spinning={this.state.spining} />
                <div style={{ width: "100%", position: "absolute", top: 130 }}>
                    <div style={{ position: "absolute", top: 60, right: 50, zIndex: 999 }}>
                        {
                            process.env.NODE_ENV === 'production' ?
                                <CountDown
                                    seconds={150}
                                    color="rgb(146,13,20)"
                                    alpha={0.9}
                                    size={100}
                                    onComplete={() => { this.props.history.push('/') }}
                                ></CountDown> : null
                        }
                    </div>
                    <Steps
                        type="navigation"
                        current={this.state.current}
                    >
                        <Step status={this.state.current === 0 ? 'process' : "finish"} title="登录" />
                        <Step status={this.state.current === 0 ? 'wait' : this.state.current === 1 ? 'process' : this.state.current > 1 ? "finish" : 'wait'} title="选择模板" />
                        <Step status={this.state.current < 1 ? 'wait' : this.state.current === 2 ? 'process' : this.state.current > 2 ? "finish" : 'wait'} title="申请打印" />
                        <Step status={this.state.current < 2 ? 'wait' : this.state.current === 3 ? 'process' : this.state.current > 3 ? "finish" : 'wait'} title="打印展示" />
                        <Step status={this.state.current < 3 ? 'wait' : this.state.current === 4 ? 'process' : this.state.current > 4 ? "finish" : 'wait'} title="打印中" />
                        <Step status={this.state.current < 4 ? 'wait' : this.state.current === 5 ? 'process' : this.state.current > 5 ? "finish" : 'wait'} title="打印成功" />
                    </Steps>
                </div>
                <div>
                    <PrintLayout
                        headerComp={() => <Header />}
                        // ContentComp={() => <div>test</div>}
                        ContentComp={() =>
                            <Content
                                firstPath="/printer/UserInfo/login"
                                FirstComp={Login}
                                MenuInfo={this.state.userInfo.MenuInfo ? this.state.userInfo.MenuInfo : undefined}
                                history={this.props.history}
                                setStep={(value: number) => this.setStep(value)}
                                htmlcontent={this.state.htmlcontent}
                                setHtmlContent={(value: string) => {
                                    this.setState({
                                        ...this.state,
                                        htmlcontent: value
                                    })
                                }}
                                onChengeUserName={(value: string) => {
                                    this.setState({
                                        ...this.state,
                                        userName: this.state.userName + value
                                    })
                                }}
                                onChengePassword={(value: string) => {
                                    this.setState({
                                        ...this.state,
                                        userPassword: this.state.userPassword + value
                                    })
                                }}
                                onDeletePassword={() => {
                                    this.setState({
                                        ...this.state,
                                        userPassword: this.state.userPassword.substring(0, this.state.userPassword.length - 1)
                                    })
                                }}
                                onDeleteUserName={() => {
                                    this.setState({
                                        ...this.state,
                                        userName: this.state.userName.substring(0, this.state.userName.length - 1)
                                    })
                                }}
                                setFileName={(fileName) => {
                                    this.setState({
                                        ...this.state,
                                        fileName
                                    })
                                }}
                                userName={this.state.userName}
                                password={this.state.userPassword}
                                inputDomClass={this.state.inputDomClass}
                                onChangeinputDomClass={(value: string) => {
                                    this.setState({
                                        ...this.state,
                                        inputDomClass: value
                                    })
                                }}
                                location={this.props.location}
                                userInfo={{
                                    userCode: this.state.userInfo.UserInfo.UserCode,
                                    userName: this.state.userInfo.UserInfo.UserName
                                }}
                            />}
                        FooterComp={() =>
                            <PrinterFooter
                                history={this.props.history}
                                location={this.props.location}
                                step={this.state.current}
                                setStep={this.setStep}
                                spining={(value: boolean) => {
                                    this.setState({
                                        ...this.state,
                                        spining: value
                                    })
                                }}
                                onRequestuserInfo={(value: userInfo) => {
                                    this.setState({
                                        ...this.state,
                                        userInfo: value
                                    })
                                }}
                                userName={this.state.userName}
                                password={this.state.userPassword}
                                filename={this.state.fileName}
                                loginModel={10}
                            />
                        }
                    >
                    </PrintLayout>
                </div>
            </div >

        )
    }
}
