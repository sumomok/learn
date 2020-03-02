import React from 'react'
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
export default function TransitionRoute({ timeout, component: Component, ...rest }) {
    return (
        <Route {...rest}>
            {({ match }) => {
                return (
                    <>
                        <CSSTransition
                            in={match ? true : false}
                            // 通过match是否存在来让CSSTransition判断元素的进出
                            timeout={timeout}
                            classNames={
                                {
                                    enter: "animated slow flipInX",
                                    exit: "animated slow flipOutX"
                                }
                            }
                            unmountOnExit
                            mountOnEnter
                        >
                            <Component></Component>
                        </CSSTransition>
                    </>
                )
            }}
        </Route>
    )
}
