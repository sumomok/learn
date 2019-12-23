import React from 'react';
import Ball from './ball';
import {random} from './tool'
export default class BallList extends React.Component {
    constructor() {
        super()
        this.state = {
            ballInfo:[]
        }
        let timer = setInterval(()=>{
            let clientHeight = document.documentElement.clientHeight;
            let clientWidth = document.documentElement.clientWidth;
            let ball = {
                width: random(50,150),
                height: random(50,150),
                background: `RGB(${random(0,255)},${random(0,255)},${random(0,255)})`,
                top: random(0,clientHeight),
                left: random(0,clientWidth),
                xSpeed:random(100,500),
                ySpeed:random(100,500),
            }
            this.setState({
                ballInfo:[...this.state.ballInfo,ball]
            })
            if (this.state.ballInfo.length >= 10 ) {
                clearInterval(timer)
                console.log('test')
            }
        },1000)
    }
    render(){
        let ballList = this.state.ballInfo.map((item,index)=><Ball key={index} {...item} />)
        return (<>
            {ballList}
        </>)
    }
}