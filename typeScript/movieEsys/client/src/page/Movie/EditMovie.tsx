import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { mapDispatchToPropsToFrom } from '../../components/Movie/PropsAndEvent';
import { IMovieForm, IMovie, IRequestResult } from '../../types/interface';
import MovieForm from '../../components/Movie/movieForm';
import { message } from 'antd';

interface IParams {
    id: string
}
class EditMovie extends PureComponent<RouteComponentProps<IParams> & IMovieForm, { data: IMovie, img: string | undefined }, {}> {
    componentDidMount() {
        this.props.onSearchById(this.props.match.params.id, data => {
            this.setState({
                data,
                img: data.poster
            })
        })
    }
    render() {
        return (
            <div>
                <MovieForm
                    onSubmit={params => {
                        this.props.onEdit(params, () => {
                            this.props.history.push('/movieList')
                        })
                    }}
                    imgValue={this.state ? this.state.data.poster : ""} onUpload={
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

                    }
                    data={this.state ? this.state.data : undefined}
                />
            </div>
        )
    }
}
export default connect(null, mapDispatchToPropsToFrom)(EditMovie)
