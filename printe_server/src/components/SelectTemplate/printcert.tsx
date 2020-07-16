import React, { PureComponent } from 'react'
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import '../../assets/sass/selectTemplateTypes.scss';
import { Link } from 'react-router-dom';
import * as H from 'history';
interface Iprops {
    setStep: (value: number) => void
    location: H.Location<H.LocationState>
    userCode: string
}
export default class printcert extends PureComponent<Iprops> {
    componentDidMount() {
        this.props.setStep(1)
    }
    render() {
        let CarouselArrleft: any[] = []
        let CarouselArrright: any[] = []
        // @ts-ignore
        this.props.location.state.map((it, index) => {
            if (index % 4 < 4) {
                CarouselArrleft.push(
                    <Link key={it.m_guid} to={{
                        pathname: '/printer/UserInfo/selectTemplate/applyTemplate', state: {
                            templateId: it.m_guid,
                            userCode: this.props.userCode,
                            isElect: it.m_iselectronic ? true : false,
                            menumodelurl: it.m_menumodelurl
                        }
                    }}><img src={it.m_menuimg} alt="" /></Link>
                )
            } else {
                CarouselArrright.push(
                    <Link key={it.m_guid} to={{
                        pathname: '/printer/UserInfo/selectTemplate/applyTemplate', state: {
                            templateId: it.m_guid,
                            userCode: this.props.userCode,
                            isElect: it.m_iselectronic ? true : false,
                            menumodelurl: it.m_menumodelurl
                        }
                    }}><img src={it.m_menuimg} alt="" /></Link>
                )
            }
            return ''
        })
        let contetArrLength = CarouselArrleft.length > CarouselArrright.length ? Math.ceil(CarouselArrleft.length / 4) : Math.ceil(CarouselArrright.length / 4);
        let contentArr: any[] = new Array(contetArrLength);
        for (let i = 0; i < contetArrLength; i++) {
            contentArr.push(
                <div key={'contentArray' + i} className="templateCard">
                    <div className="top">
                        {CarouselArrleft.slice(i * 4, i * 4 + 4)}
                    </div>
                    <div className="bottom">
                        {CarouselArrright.slice(i * 4, i * 4 + 4)}
                    </div>
                </div>
            )
        }
        return (
            <div style={{ width: '100%', height: '80%', position: 'relative' }}>
                <div className="title">
                    请选择模板
                </div>
                <div style={{ position: 'relative', top: 100 }}>
                    <button
                        onClick={
                            () => {
                                // @ts-ignore
                                this.refs.carousel.prev()
                            }
                        }
                        style={
                            { width: 100, height: 100, borderRadius: '50%', background: 'rgba(0,0,0,.3)', fontSize: 30, position: 'absolute', zIndex: 20, border: 'none', color: '#a8071a', top: 130, left: 30 }
                        }><LeftOutlined /></button>
                    <Carousel ref='carousel'>
                        {contentArr}
                    </Carousel>
                    <button
                        onClick={
                            () => {
                                // @ts-ignore
                                this.refs.carousel.next()
                            }
                        }
                        style={
                            { width: 100, height: 100, borderRadius: '50%', background: 'rgba(0,0,0,.3)', fontSize: 30, position: 'absolute', zIndex: 20, border: 'none', color: '#a8071a', top: 130, right: 30 }
                        }
                    ><RightOutlined /></button>
                </div>

            </div>
        )
    }
}
