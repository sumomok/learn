import React, { PureComponent } from 'react';
import Options from '../options';
import PrinterLayout from '../components/layout/layout';
import header from '../components/Home/header';
import context from '../components/Home/context';
import footer from '../components/Home/footer';
import '../assets/sass/Home.scss';
interface IProps {
    history: History
    location: Location
}
export default class Home extends PureComponent<IProps> {
    render() {
        let background = Options.img.homeBackgroundUrl
        return (
            <div id="home" style={{ background: `url(${background})` }}>
                <PrinterLayout headerComp={header} ContentComp={context} FooterComp={footer} />
            </div>
        )
    }
}
