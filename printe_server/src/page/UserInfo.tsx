import React, { PureComponent } from 'react';
import Options from '../options';
import PrintLayout from '../components/layout/layout';
import Header from '../components/Home/header';
import Content from '../components/UserInfo/content';
import PrinterFooter from '../components/UserInfo/PrinterFooter';
import * as H from 'history';
import { Steps } from 'antd';
const { Step } = Steps
interface Iprops {
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>;
}
export default class UserInfo extends PureComponent<Iprops> {
    state = {
        current: 0,
    };
    nextStep = () => this.setState({
        ...this.state,
        current: this.state.current < 5 ? this.state.current + 1 : 5
    })
    prevStep = () => {
        this.setState({
            ...this.state,
            current:
                this.state.current > 0 ? this.state.current - 1 : 0
        })
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%', background: `url(${Options.img.backgroundUrl})` }}>
                <div style={{ width: "100%", position: "absolute", top: 130 }}>
                    <Steps
                        type="navigation"
                        current={this.state.current}
                    // onChange={this.onChange}
                    // className="site-navigation-steps"
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
                        ContentComp={() => <Content history={this.props.history} prevStep={this.nextStep} nextStep={this.nextStep} />}
                        FooterComp={() => <PrinterFooter history={this.props.history} location={this.props.location} nextStep={this.nextStep} prevStep={this.prevStep} step={this.state.current} />}
                    >
                    </PrintLayout>
                </div>
            </div>
        )
    }
}
