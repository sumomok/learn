import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import uuid from 'uuid';
import './index.css'
export default function Test() {
    const [task, setTask] = useState([
        {
            id: uuid(),
            taskName: "任务1"
        },
        {
            id: uuid(),
            taskName: "任务2"
        },
        {
            id: uuid(),
            taskName: "任务3"
        }
    ])
    return (
        <div>
            <TransitionGroup component="ul">
                {
                    task.map(t => {
                        return (
                            <CSSTransition timeout={3000} key={t.id}>
                                <li>
                                    {t.taskName}
                                    <button onClick={() => {
                                        let newTask = task.filter(i => i.id !== t.id)
                                        setTask(newTask)
                                    }}>删除</button>
                                </li>
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
        </div>
    )
}
