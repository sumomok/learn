import React, { PureComponent } from 'react'
import '../../assets/sass/UserInfoContent.scss'
import 'react-simple-keyboard/build/css/index.css';
import { Route, Switch } from 'react-router-dom';
import NotFindError from '../../page/404Error';
import '../../assets/sass/selectTemplate.scss';
import SelectTemplateType from '../SelectTemplate/SelectTemplateType';
import Printcert from '../SelectTemplate/printcert';
import ApplyTemplate from '../SelectTemplate/ApplyTemplate';
import ShowTemplate from '../SelectTemplate/ShowTemplate';
import * as H from 'history';
import Printing from '../SelectTemplate/Printing';
import PrintSuccess from '../SelectTemplate/PrintSuccess';
import { MenuResult } from '../../types/response';
interface Iprops {
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>
    FirstComp:Function
    firstPath:string
    onChengeUserName: Function
    onChengePassword: Function,
    onDeleteUserName: Function,
    onDeletePassword: Function
    setFileName: (fileName: string) => void
    userName: string
    password: string,
    inputDomClass: string,
    onChangeinputDomClass: Function
    MenuInfo?: MenuResult[]
    userInfo: {
        userCode?: string
        userName?: string
    }
    setStep: (value: number) => void
    setHtmlContent: (htmlcontent: string) => void
    htmlcontent:string
}
export default class content extends PureComponent<Iprops> {

    render() {
        let FirstComp = this.props.FirstComp;
        return (
            <>
                <Switch>
                    <Route exact path={this.props.firstPath} component={
                        () => <FirstComp
                            onChengeUserName={this.props.onChengeUserName}
                            onChengePassword={this.props.onChengePassword}
                            onDeleteUserName={this.props.onDeleteUserName}
                            onDeletePassword={this.props.onDeletePassword}
                            userName={this.props.userName}
                            password={this.props.password}
                            inputDomClass={this.props.inputDomClass}
                            onChangeinputDomClass={this.props.onChangeinputDomClass}
                            setStep={this.props.setStep}
                        />
                    }></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/SelectTemplateType" component={
                        () => <SelectTemplateType
                            MenuInfo={this.props.MenuInfo}
                            history={this.props.history}
                            loaction={this.props.location}
                            setStep={this.props.setStep}
                            userInfo={this.props.userInfo}
                        />
                    }></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/printcert" component={() =>
                        <Printcert
                            userCode={this.props.userInfo.userCode?this.props.userInfo.userCode:""}
                            setStep={this.props.setStep}
                            location={this.props.location} />
                    }></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/applyTemplate" component={() =>
                        <ApplyTemplate
                            setStep={this.props.setStep}
                            history={this.props.history}
                            location={this.props.location}
                            setFileName={this.props.setFileName}
                            setHtmlContent={this.props.setHtmlContent}
                        />}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/ShowTemplate" component={() =>
                        <ShowTemplate
                            location={this.props.location}
                            setStep={this.props.setStep}
                            htmlcontent={this.props.htmlcontent}
                        />}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/Printing" component={() =>
                        <Printing
                            setStep={this.props.setStep}
                            history={this.props.history}
                            location={this.props.location}
                        />}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/PrintSuccess" component={
                        () => <PrintSuccess
                            setStep={this.props.setStep}
                        />
                    }></Route>
                    <Route path="*" component={NotFindError}></Route>
                </Switch>
            </>
        )
    }
}
