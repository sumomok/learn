import React, { PureComponent } from 'react'
import { Layout } from 'antd';
import "../../assets/sass/layout.scss";
const { Header, Content, Footer } = Layout
interface IProps {
    headerComp: Function
    ContentComp: Function
    FooterComp:Function
}
export default class PrintLayout extends PureComponent<IProps> {
    
    render() {
        const HeaderComp = this.props.headerComp
        const ContentComp = this.props.ContentComp
        const FooterComp = this.props.FooterComp
        return (
            <Layout>
                <Header>
                    <HeaderComp />
                </Header>
                <Content>
                    <ContentComp />
                </Content>
                <Footer>
                    <FooterComp />
                </Footer>
            </Layout>
        )
    }
}
