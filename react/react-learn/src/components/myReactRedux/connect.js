import React from 'react';
import ctx from './ctx';
export default function (mapStateToProps,mapDispatchToProps){



    // 返回一个高阶组件
    return function (Comp){
        class Temp extends React.Component{
            static contextType = ctx;

            constructor(props,contextType) {
                super(props,contextType);
                this.context.subire 
            }
            render(){
                return <Comp {...this.state}></Comp>
            }
        }
        Temp.displayName = Comp.displayName || Comp.name
        return Temp
    }
}