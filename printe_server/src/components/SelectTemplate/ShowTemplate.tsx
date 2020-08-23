import React, { PureComponent } from 'react'
import * as H from 'history';
interface Iprops {
    setStep: (value: number) => void
    location: H.Location<H.LocationState>
    htmlcontent:string
}
export default class ShowTemplate extends PureComponent<Iprops> {
    componentDidMount() {
        this.props.setStep(3);
        // @ts-ignore
        this.refs.iframeContent.contentDocument.write(this.props.htmlcontent);
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%', paddingTop: 140 }}>
                <div style={{ width: '80%', height: '100%', overflow: 'hidden', overflowY: 'scroll', margin: '0 auto', textAlign: 'center', background: '#fff' }}>
                    <h1 style={{ fontSize: 40 }}>请确认模板信息是否正确</h1>
                    <iframe ref= 'iframeContent' id="showTemplate" title="template" style={{ width: '90%', height: '100%', border: '3px solid #000' }}></iframe>
                </div>
            </div>
        )
    }
}
