import React from 'react';
import { ChessType } from '../types/enum';
import { Chess } from './ChessComp';
import './index.scss';
interface IProps{
    Chesss:ChessType [],
    onStateChange?:(n:number)=>void,
    NowState:ChessType.red | ChessType.block
}
export default class Index extends React.PureComponent<IProps>{
    HandleClick(n:number){
        if (this.props.onStateChange){
           this.props.onStateChange(n)
        }
    }
    render(){
        let ChessList = this.props.Chesss.map((type,index)=><Chess onChange={(n)=>{this.HandleClick(n)}} key={index} type={type} index={index}></Chess>)
        return(
            <div className="Checkerboard">
                {ChessList}
            </div>
        )
    }
}

