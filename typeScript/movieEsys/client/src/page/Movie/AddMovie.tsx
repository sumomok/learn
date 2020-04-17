import React, { PureComponent } from 'react'
import UploadImg from '../../components/uploadImg'
import { IRequestResult } from '../../types/interface';
import { message } from 'antd';

export default class AddMovie extends PureComponent {
    state = {
        img: ""
    }
    render() {
        return (
            <div>
                <UploadImg value={this.state.img} onUpload={
                    async e => {
                        if (e) {
                            let forData = new FormData();
                            forData.append(e.filename, e.file)
                            let request = new Request(e.action, {
                                method: "post",
                                body: forData
                            })
                            const resp: IRequestResult<{ path: string }> = await fetch(request).then(resp => resp.json())
                            if (resp.Success) {
                                this.setState({
                                    img: resp.Data.path
                                })
                                message.success("上传成功");
                            } else {
                                message.error("上传失败:" + resp.error)
                            }
                        } else {
                            this.setState({
                                img: ""
                            })
                        }

                    }
                } />
            </div>
        )
    }
}
