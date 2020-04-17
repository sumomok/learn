import React, { PureComponent } from 'react'
import { Upload, Modal } from 'antd'
import { UploadFile, RcCustomRequestOptions } from 'antd/lib/upload/interface'
interface uploadProps {
    value: string,
    onUpload: (newUrl: RcCustomRequestOptions | undefined) => void
}
interface AddMovieState {
    isShow: boolean
}
export default class uploadImg extends PureComponent<uploadProps> {
    state: AddMovieState = {
        isShow: false
    }
    private getfileList(): UploadFile<any>[] {
        if (this.props.value) {
            return [{
                uid: "-1",
                name: this.props.value,
                url: this.props.value
            }]
        }
        return []

    }
    render() {
        return (
            <>
                <Modal
                    visible={this.state.isShow}
                    keyboard
                    maskClosable
                    footer={null}
                    onCancel={() => {
                        this.setState({
                            isShow: false
                        })
                    }}
                >
                    <img src={this.props.value} alt="" />
                </Modal>
                <Upload
                    name="imgFile"
                    listType="picture-card"
                    className="avatar-uploader"
                    action="/api/upload"
                    accept="'.img,.png,.gif,.bpm,.jpg"
                    fileList={this.getfileList()}
                    customRequest={e => {
                        this.props.onUpload(e);
                    }}
                    onRemove={() => {
                        this.props.onUpload(undefined)

                    }
                    }
                    onPreview={() => {
                        this.setState({
                            isShow: true
                        })
                    }}
                >
                    {this.props.value ? "" : <div>
                        <div className="ant-upload-text">Upload</div>
                    </div>}
                </Upload>
            </>
        )
    }
}
