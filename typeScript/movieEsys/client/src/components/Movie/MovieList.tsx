import React, { PureComponent } from 'react'
import { IMovieState, IMovie, IMovieTableEvent, SwitchType } from '../../types/interface';
import { Table, Switch, Button, Popconfirm, Input } from 'antd'
import { ColumnProps, TablePaginationConfig } from 'antd/lib/table';
import defaultImg from '../../assets/1586952373.jpg';
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';


export class MovieList extends PureComponent<IMovieState & IMovieTableEvent>{
    componentDidMount() {
        this.props.onLoad()
    }
    private getSearch(params: object) {
        return (
            <div style={{ padding: 8 }}>
                <Input
                    value={this.props ? this.props.condition.key : ""}
                    onChange={e => { this.props.onConditionChange({ key: e.target.value, page: this.props.condition.page, limit: this.props.condition.limit }) }}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    icon={<SearchOutlined />}
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                    onClick={() => { this.props.onPageChange(this.props.condition) }}
                >
                    搜索
                </Button>
                <Button size="small" style={{ width: 90 }} onClick={() => { this.props.onConditionChange({ key: "", page: this.props.condition.page, limit: this.props.condition.limit }) }}>
                    重置
                </Button>
            </div>
        )
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
                filterDropdown: this.getSearch.bind(this),
                filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
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
                    this.props.onPageChange({
                        page: page,
                        limit: this.props.condition.limit,
                        key: ""
                    })
                }
            }
        }
    }
    render() {
        return (
            <Table rowKey="_id" pagination={
                this.getPagination()
            } dataSource={this.props.data} columns={this.getColumns()} loading={this.props.isLoading} ></Table>
        )
    }
}


