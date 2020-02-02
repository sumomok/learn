import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Test() {
    const [visible, setVisible] = useState();
    return (
        <div>
            <CSSTransition timeout={500} in={visible}>
                <h1>这是一个标题</h1>
            </CSSTransition>
            <button onClick={
                () => {
                    setVisible(!visible)
                }
            }>切换状态</button>
        </div>
    )
}
