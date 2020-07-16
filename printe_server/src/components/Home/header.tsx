import React, { PureComponent } from 'react'
import Options from '../../options'
/**
 * 头部组件，包括logo，报警电话
 */
export default class content extends PureComponent {
    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={Options.img.logo} alt="" />
                </div>
                <div className="DevOpsTel">
                    <img src={Options.img.DevOpsTel} alt="" />
                </div>
            </div>
        )
    }
}
