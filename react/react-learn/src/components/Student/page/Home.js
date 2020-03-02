import React, { PureComponent } from 'react';
import Layout from '../Layout';
import Header from '../components/Header/Header';
import MenuLis from '../components/MenuList/MenuList';
import Content from '../components/content/Content';
// import { getAllStudent, getStudentPageList, searchStudent } from '../server/'
export default class Home extends PureComponent {
    // componentDidMount() {
    //     searchStudent(
    //         {
    //             key: '萧',
    //             sex: -1
    //         }
    //     ).then(resp => console.log(resp))
    //     getAllStudent({}).then(resp => console.log(resp));
    // }
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
