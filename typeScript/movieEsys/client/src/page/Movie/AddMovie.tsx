import React, { PureComponent } from 'react'

import MovieForm from '../../components/Movie/movieForm';
import { IRequestResult, IMovieForm } from '../../types/interface';
import { message } from 'antd';
import { connect } from 'react-redux';
import { mapDispatchToPropsToFrom } from '../../components/Movie/PropsAndEvent';
import { withRouter, RouteComponentProps } from 'react-router';
class AddMovie extends PureComponent<IMovieForm & RouteComponentProps> {
    state = {
        img: ""
    }
    render() {
        console.log()
        return (
            <MovieForm onSubmit={params => {
                this.props.onSubmit(params, () => {
                    this.props.history.push('/movieList')
                })
            }} imgValue={this.state.img} onUpload={
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
        )
    }
}
export default withRouter(connect(null, mapDispatchToPropsToFrom)(AddMovie));