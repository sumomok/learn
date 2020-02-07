import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './index.css';
import "animate.css";
export default function Test() {
    const [show, setShow] = useState(true)
    return (
        <div>
            <SwitchTransition mode="out-in">
                <CSSTransition appear timeout={5000} key={show}>
                    <h1>{show ? "title1" : "title2"}</h1>
                </CSSTransition>
            </SwitchTransition>
            <button onClick={() => {
                setShow(!show);
            }}>切换</button>
        </div>
    )
}
