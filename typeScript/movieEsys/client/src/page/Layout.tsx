import React from 'react'
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Layout as AntdLayout, Menu, Space, Button, } from 'antd'
import Home from './Movie/Home';
import { List } from '../components/index'
import EditMovie from './Movie/EditMovie';
import AddMovie from './Movie/AddMovie';
import '../css/Movie/layout.scss';
import 'antd/dist/antd.css'
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Sider, Content } = AntdLayout;
export const Layout: React.FC = function () {
    return (
        <AntdLayout>
            <Header>
                <div className="logo">猫眼电影</div>
                <div className="user">
                    <Space>
                        <span>用户名</span>
                        <Button>注销</Button>
                    </Space>
                </div>
            </Header>
            <AntdLayout>
                <Sider>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    电影管理
                                </span>
                            }
                        >
                            <Menu.Item key="1">
                                <NavLink to="/">首页</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to="/movieList">电影列表</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to="/addMovie">添加电影</NavLink>
                            </Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Content style={
                    {
                        padding: 24,
                        margin: 0,
                        minHeight: 280
                    }
                }>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/movieList" exact component={List}></Route>
                    <Route path="/addMovie" exact component={AddMovie}></Route>
                    <Route path="/editMovie/:id" component={EditMovie}></Route>
                </Content>
            </AntdLayout>
        </AntdLayout>
    )
}
