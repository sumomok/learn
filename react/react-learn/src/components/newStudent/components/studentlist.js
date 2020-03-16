import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
function studentlist(props) {
    let dom = props.studentlist.map(it => {
        return (
            <div key={it.id}>
                <p>{it.name}</p>
            </div>
        )
    })
    return (
        <div>
            {dom}
        </div>
    )
}
function mapStoreToProps(store) {
    console.log(store);
    return {
        studentlist: store.student
    }
}
export default connect(mapStoreToProps, null)(studentlist)

// connect作用相当于 ↓
// class connectYL extends React.PureComponent {
//     componentDidMount() {
//         store.subscribe(() => {
//             this.setState({
//                 data: store.getState()
//             })
//         })
//     }
//     render() {
//         let Comp = this.props.children;
//         return (
//             <Comp props={{ ...this.props, ...this.state }} />
//         )
//     }
// }
