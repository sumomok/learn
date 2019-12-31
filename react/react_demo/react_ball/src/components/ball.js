import React from 'react';
export default class Ball extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: props.width || 100,
            height: props.height || 100,
            background: props.background || "#f40",
            top: props.top || 100,
            left: props.left || 100,
            xSpeed:props.xSpeed || 150,
            ySpeed:props.ySpeed || 150,
        }
        const time = 16
        setInterval(()=>{
            let newTop = this.state.ySpeed * (time / 1000) + this.state.top ;
            let newleft = this.state.xSpeed * (time / 1000) + this.state.left;
            let ySpeed = this.state.ySpeed;
            let xSpeed = this.state.xSpeed;
            if (newTop <= 0 ) {
                newTop = 0;
                ySpeed = -ySpeed;
            } else if (newTop >= document.documentElement.clientHeight - this.state.height) {
                newTop = document.documentElement.clientHeight - this.state.height;
                ySpeed = -ySpeed;
            }
            if (newleft <= 0 ) {
                newleft = 0;
                xSpeed = -xSpeed;
            } else if (newleft >= document.documentElement.clientWidth - this.state.width) {
                newleft = document.documentElement.clientWidth - this.state.width;
                xSpeed = -xSpeed;
            }
            this.setState({
                top: newTop ,
                left: newleft,
                xSpeed:xSpeed,
                ySpeed:ySpeed
            })

        },time)
    }
    render() {
        return (<div className="ball" style={{ width: this.state.width, height: this.state.height, background: this.state.background,top:this.state.top,left:this.state.left}}>

        </div>)



    }
}