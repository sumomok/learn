import React, { PureComponent } from 'react'
import '../../assets/sass/contentFooter.scss'
import Options from '../../options'
import { Link } from 'react-router-dom';
import * as H from 'history';
import again from '../../assets/img/btn_continue.png'
interface Iprops {
    nextStep: Function
    prevStep: Function
    step: number
    history: H.History<H.LocationState>
    location: H.Location<H.LocationState>;
}

class PrinterFooter extends PureComponent<Iprops> {
    render() {
        return (
            <div className="contentFooter">
                <div className='left'>
                    <Link to="/"><img onClick={() => {
                        this.props.nextStep()
                    }} src={Options.img.button.home} alt="" /></Link>
                    {
                        this.props.step !== 7 ? <img
                            src={Options.img.button.back}
                            alt=""
                            onClick={
                                () => {
                                    this.props.prevStep(); this.props.history.goBack()
                                }} />:null
                    }

                </div>
                <div className='right'>
                    {/* 后期需要处理事件 */}
                    {
                        this.props.step === 0 ?
                            <img src={Options.img.button.ok} alt=""
                                onClick={
                                    () => {
                                        setTimeout(
                                            () => {
                                                this.props.nextStep(); this.props.history.push('/printer/UserInfo/selectTemplate/SelectTemplateType')
                                            }, 1000)
                                    }} /> :
                            this.props.step === 3 ? <img src={Options.img.button.print} onClick={() => {
                                this.props.nextStep();
                                this.props.history.push('/printer/UserInfo/selectTemplate/Printing')
                            }} alt="" /> : this.props.step === 5 ? <img src={again} alt="" /> : null
                    }
                </div>
            </div>
        )
    }
}

export default PrinterFooter