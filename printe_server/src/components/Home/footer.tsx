import React, { PureComponent } from 'react'
import Options from '../../options'
export default class content extends PureComponent {
    render() {
        return (
            <div className="footer">
                <div className="wechat" style={{ textAlign: "center" }}>
                    <p>关注官方微信</p>
                    <img src={Options.img.weChat} alt="" />
                </div>
            </div>
        )
    }
}
