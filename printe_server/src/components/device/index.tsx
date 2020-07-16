import React, { PureComponent } from 'react'

export default class index extends PureComponent {
    render() {
        return (
            <>
                {/* 将硬件操作相关的函数分离，使得可以用谷歌开发↓ */}
                {process.env.NODE_ENV === 'production' ? <iframe width="0" height="0" title="device" src='/device/DeviceManager_1.html'></iframe> : null}
            </>
        )
    }
}
