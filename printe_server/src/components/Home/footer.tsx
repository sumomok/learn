import React, { PureComponent } from 'react';
import Options from '../../options';
/**
 * 首页页尾组件，包括二维码展示等，右侧现在为空，可以作为扩展
 */
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
