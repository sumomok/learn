import React, { Component } from 'react'
import Form from './Form'
export default class FormTest extends Component {
    render() {
        return (
            <Form onSubmit={datas => {
                console.log(datas)
            }}>
                账号：<Form.Input name="UserId" type="text" />
                密码：<Form.Input name="password" type="password" />
                <Form.Submit>提交</Form.Submit>
            </Form>
        )
    }
}
