import React from 'react'
import { IMovie } from '../../types/interface'
import UploadImg from '../../components/uploadImg'
import { RcCustomRequestOptions } from 'antd/lib/upload/interface';
import { Form, Input, Button, Checkbox, InputNumber, Switch } from 'antd';
import { Store } from 'antd/lib/form/interface';
import TextArea from 'antd/lib/input/TextArea';
interface MovieFormProps {
    data?: IMovie | undefined,
    onUpload: (newUrl: RcCustomRequestOptions | undefined) => void,
    imgValue: string | undefined,
    onSubmit: (value: IMovie) => void
}

function MovieForm(props: MovieFormProps) {
    const [form] = Form.useForm()
    const onFinish = (values: Store) => {
        const value: any = values
        let valueMovie: IMovie = Object.assign({}, value, { poster: props.imgValue });
        if (props.data) {
            valueMovie = {
                ...valueMovie,
                _id: props.data._id
            }
        }
        props.onSubmit(valueMovie)

    };
    const onRest = () => {
        form.resetFields()
    }
    let store: Store = {
        ...props.data
    }

    form.setFieldsValue(store)
    return (
        <Form form={form} onFinish={onFinish}>
            <Form.Item
                label="封面图"
            >
                <UploadImg value={props.imgValue} onUpload={props.onUpload} />
            </Form.Item>
            <Form.Item
                label="电影名称"
                wrapperCol={{ span: 7 }}
                name="name"
                rules={[{ required: true, message: "请填写电影名称" }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="电影时长"
                wrapperCol={{ span: 7 }}
                name="timeLong"
                rules={[{ required: true, message: "请填写电影时长" }]}
            >
                <InputNumber min={1} max={300} />
            </Form.Item>

            <Form.Item
                label="是否热门"
                wrapperCol={{ span: 7 }}
                name="isHot"
                valuePropName="checked"
            >
                <Switch />
            </Form.Item>
            <Form.Item
                label="是否经典"
                wrapperCol={{ span: 7 }}
                name="isClasic"
                valuePropName="checked"
            >
                <Switch />
            </Form.Item>
            {/* <Form.Item
                shouldUpdate
            >
                {
                    ({
                        setFieldsValue
                    }) => {
                        if (!props.imgValue) {
                            setFieldsValue({ poster: props.imgValue })
                            return (
                                <UploadImg value={props.imgValue} onUpload={props.onUpload} />
                            )
                        } else {
                            return <UploadImg value={props.imgValue} onUpload={props.onUpload} />
                        }
                    }
                }
            </Form.Item> */}
            <Form.Item
                label="地区"
                wrapperCol={{ span: 7 }}
                name="areas"
                rules={[{ required: true, message: "请选择地区" }]}
            >
                <Checkbox.Group options={[
                    { label: "中国大陆", value: "中国" },
                    { label: "中国台湾", value: "中国台湾" },
                    { label: "中国香港", value: "中国香港" },
                    { label: "美国", value: "美国" },
                ]}></Checkbox.Group>
            </Form.Item>
            <Form.Item
                label="类型"
                wrapperCol={{ span: 7 }}
                name="type"
                rules={[{ required: true, message: "请选择地区" }]}
            >
                <Checkbox.Group options={[
                    { label: "喜剧", value: "喜剧" },
                    { label: "动作", value: "动作" },
                    { label: "言情", value: "言情" },
                    { label: "惊悚", value: "惊悚" },
                ]}></Checkbox.Group>
            </Form.Item>
            <Form.Item
                label="描述"
                wrapperCol={{ span: 10 }}
                name="description"
            >
                <TextArea onResize={e => { e.height = 500; e.width = 500 }} rows={4} />
            </Form.Item>

            <Form.Item>
                <Button type="ghost" htmlType="submit">提交</Button>
                <Button type="ghost" onClick={onRest}>重置</Button>
            </Form.Item>
        </Form>
    )
}
export default MovieForm