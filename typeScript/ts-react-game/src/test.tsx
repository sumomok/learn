import React from 'react'
interface IProps{
    num:number
    onChange?:(n:number)=>void
}
export const Test:React.FC<IProps> =  function (props){
    return(
        <div>
            <p>{props.num}</p>
            <button onClick={()=>{if(props.onChange)props.onChange(props.num + 1)}}>加一</button>
            <button onClick={()=>{if(props.onChange)props.onChange(props.num - 1)}}>减一</button>
        </div>
    )
}
