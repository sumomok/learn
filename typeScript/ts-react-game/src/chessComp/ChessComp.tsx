import React from "react"
import { ChessType } from "../types/enum";
import './ChessComp.scss';

interface IProps{
    type:ChessType,
    onChange?:(n:number)=>void
    index:number
}
export const Chess:React.FC<IProps> = function (props){
    let chessItem;
    if (props.type === ChessType.red){
        chessItem = <div className="red chess-item"></div>
    }
    if (props.type === ChessType.block){
        chessItem = <div className="block chess-item"></div>
    }
    return(
        <div className="chess" onClick={()=>{if(props.onChange)props.onChange(props.index)}}>
            {chessItem}
        </div>
    )
}