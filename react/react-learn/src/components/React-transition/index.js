import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';

function Comp1({ visible }) {
    return (
        <CSSTransition appear mountOnEnter in={visible} timeout={2000}>
            <h1 className="title">组件1</h1>
        </CSSTransition>
    )
}
function Comp2({ visible }) {
    return (
        <CSSTransition in={visible} timeout={2000}>
            <h1 className="title">组件2</h1>
        </CSSTransition>
    )
}
export default function Test() {
    const [visible, setVisible] = useState(true);
    return (
        <div className="container">
            <div className="comp-container">
                <Comp1 visible={visible} />
                <Comp2 visible={!visible} />
            </div>
            <div className="button">
            <button onClick={
                () => {
                    setVisible(!visible)
                }
            }>切换状态</button>
            </div>
        </div>
    )
}
