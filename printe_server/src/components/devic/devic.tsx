import React from 'react'
import { devicProps } from '../../types/devic'

export default function Devic(props: devicProps) {
    let objArr = props.device.map(
        // eslint-disable-next-line
        (it,index) => <object
            id={it.id}
            classID={it.deviceClassId}
            key={index}
            width="0"
            height="0"
        ></object>
    )
    return (
        <div className="device">
            {objArr}
        </div>
    )
}
