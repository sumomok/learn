import React, { PureComponent } from 'react'
import img from '../../assets/img/test.png'

interface Iprops {
    nextStep: Function
    prevStep: Function
}
export default class ShowTemplate extends PureComponent<Iprops> {
    componentDidMount() {
        // top.downLoadFile(img, 'test1');
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%', paddingTop: 140 }}>
                <div style={{ width: '80%', height: '100%', overflow: 'hidden', overflowY: 'scroll', margin: '0 auto', textAlign: 'center', background: '#fff' }}>
                    <h1 style={{ fontSize: 40 }}>请确认模板信息是否正确</h1>
                    <img style={{ border: '3px solid #000' }} src={img} alt="" />
                </div>
            </div>
        )
    }
}
