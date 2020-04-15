import React, { PureComponent } from 'react'
import { IMovieState, IMovie, IMovieTableEvent, SwitchType } from '../../types/interface';
import { Table, Switch, Button, Popconfirm } from 'antd'
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import defaultImg from '../../assets/1586952373.jpg'
import { NavLink } from 'react-router-dom';


export class MovieList extends PureComponent<IMovieState & IMovieTableEvent>{
    componentDidMount() {
        this.props.onLoad()
    }
    private getColumns(): ColumnProps<IMovie>[] {
        return [
            {
                title: "缩略图",
                dataIndex: "poster",
                render: poster => {
                    if (poster) {
                        return (
                            <img src={defaultImg} alt="" style={{
                                width: 30,
                                height: 50
                            }} />
                        )
                    } else {
                        return (
                            <img src={defaultImg} alt="" style={{
                                width: 30,
                                height: 50
                            }} />
                        )
                    }
                }
            },
            {
                title: "名称",
                dataIndex: "name",
            },
            {
                title: "地区",
                dataIndex: "areas",
                render: (text: string[], record) => {
                    let result = text.join(", ")
                    return (
                        <h1>{result}</h1>
                    )
                }
            },
            {
                title: "类型",
                dataIndex: "type",
                render: (text: string[], record) => {
                    let result = text.join(", ")
                    return (
                        <h1>{result}</h1>
                    )
                }
            },
            {
                title: "时长",
                dataIndex: "timeLong",
                render: text => {
                    return (
                        text + "分钟"
                    )
                }
            },
            {
                title: "是否热门",
                dataIndex: "isHot",
                render: (isHot, newState) => {
                    return (
                        <Switch checked={isHot} onChange={(e) => {
                            this.props.onSwitchChange(newState._id as string, e, SwitchType.isHot)
                        }} />
                    )
                }
            },
            {
                title: "是否经典",
                dataIndex: "isClasic",
                render: (isHot, newState) => {
                    return (
                        <Switch checked={isHot} onChange={(e) => {
                            this.props.onSwitchChange(newState._id as string, e, SwitchType.isClasic)
                        }} />
                    )
                }
            },
            {
                title: "操作",
                dataIndex: "_id",
                render: (id) => {
                    return (
                        <>
                            <NavLink to={"/editMovie/" + id}>
                                <Button type="link">编辑</Button>
                            </NavLink>
                            <Popconfirm title="确定要删除吗？" cancelText="取消" okText="确认" onConfirm={
                                () => {
                                    this.props.onDelete(id)
                                }
                            }>
                                <Button type="link">删除</Button>
                            </Popconfirm>

                        </>
                    )
                }
            }

        ]
    }
    private getPagination(): false | TablePaginationConfig {
        if (this.props.count === 0) {
            return false
        } else {
            return {
                current: this.props.condition.page,
                pageSize: this.props.condition.limit,
                total: this.props.count,
                onChange: page => {
                    
                }
            }
        }
    }
    render() {
        return (
            <Table rowKey="_id" pagination={
                this.getPagination()
            } dataSource={this.props.data} columns={this.getColumns()}></Table>
        )
    }
}


