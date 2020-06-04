import React, { PureComponent } from 'react'
import { Carousel } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import '../../assets/sass/selectTemplateTypes.scss';
import img1 from '../../assets/img/img'
import { Link } from 'react-router-dom';
interface Iprops {
    nextStep: Function
    prevStep: Function
}
export default class printcert extends PureComponent<Iprops> {
    render() {
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
                        <div className="templateCard">
                            <div className="top">
                               <Link to='/printer/UserInfo/selectTemplate/applyTemplate'><img onClick={()=>this.props.nextStep()} src={img1} alt="" /></Link>
                            </div>
                        </div>
                        {/* 渲染获取到的所有可打印的模板 结构如下 */}
                        {/* <div className="templateCard">
                            <div className="top">
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                            </div>
                            <div className="bottom">
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        <div className="templateCard">
                            <div className="top">
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                                <img src={img1} alt="" />
                            </div>
                        </div> */}
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
