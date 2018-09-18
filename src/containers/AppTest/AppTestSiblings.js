 import React, {Component} from 'react';
// export default class AppTestSiblings extends Component{
//     constructor(props,context){
//         super(props,context)
//         this.state={
//             text:'default'
//         }
//     }
//     render(){
//         return(
//             <div>Siblings: {this.props.modal}</div>
//         )
//     }
// }
const AppTestSibilings = (props)=>{
    return (
            <div>Siblings: {props.modal}</div>
    )
}
export default AppTestSibilings