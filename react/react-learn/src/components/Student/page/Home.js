import React, { PureComponent } from 'react';
import Layout from '../Layout';
import Header from '../components/Header/Header';
import MenuLis from '../components/MenuList/MenuList';
import Content from '../components/content/Content'
export default class Home extends PureComponent {
    render() {
        return (
            <Layout
                header={<Header></Header>}
                menuList={<MenuLis></MenuLis>}
            >
                <Content></Content>
            </Layout>
        )
    }
}
