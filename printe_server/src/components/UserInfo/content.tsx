import React, { PureComponent } from 'react'
import '../../assets/sass/UserInfoContent.scss'
import 'react-simple-keyboard/build/css/index.css';
import { Route,Switch} from 'react-router-dom';
import Login from './login';
import NotFindError from '../../page/404Error';
import '../../assets/sass/selectTemplate.scss';
import SelectTemplateType from '../SelectTemplate/SelectTemplateType';
import Printcerity from '../SelectTemplate/printcerity';
import Printcert from '../SelectTemplate/printcert';
import ApplyTemplate from '../SelectTemplate/ApplyTemplate';
import ShowTemplate from '../SelectTemplate/ShowTemplate';
import * as H from 'history';
import Printing from '../SelectTemplate/Printing';
import PrintSuccess from '../SelectTemplate/PrintSuccess';
interface Iprops {
    nextStep: Function
    prevStep: Function
    history: H.History<H.LocationState>
}
export default class content extends PureComponent<Iprops> {

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/printer/UserInfo/login" component={Login}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/SelectTemplateType" component={SelectTemplateType}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/printcerity" component={()=><Printcerity   />}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/printcert" component={() => <Printcert nextStep={this.props.nextStep} prevStep={this.props.nextStep} />}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/applyTemplate" component={()=><ApplyTemplate nextStep={this.props.nextStep} prevStep={this.props.nextStep} history={this.props.history}/>}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/ShowTemplate" component={()=><ShowTemplate nextStep={this.props.nextStep} prevStep={this.props.nextStep}  />}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/Printing" component={()=><Printing nextStep={this.props.nextStep} prevStep={this.props.nextStep}  history={this.props.history} />}></Route>
                    <Route exact path="/printer/UserInfo/selectTemplate/PrintSuccess" component={() => <PrintSuccess />}></Route>
                    <Route path="*" component={NotFindError}></Route>
                </Switch>
            </>
        )
    }
}
