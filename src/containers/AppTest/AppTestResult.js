import React, {Component} from 'react';
export default class AppTestResult extends Component{
    constructor(props,context){
        super(props,context)
        this.state={
            text:'default'
        }
        console.warn("children-constructor")
    }
    componentWillReceiveProps(nextProps){
        console.warn("children-componentWillReceiveProps")
        this.setState({
            text: nextProps.text
        })
    }
    componentWillMount(){
        this.setState({
            text: this.props.text
        })
        console.warn("children-componentWillMount")
    }
    componentDidMount(){
        console.warn("children-componentDidMount")
    }
    componentWillUpdate(nextProps, nextState){
        console.warn("children-componentWillUpdate")
    }
    componentDidUpdate(nextProps, nextState){
        console.warn("children-componentDidUpdate")
    }
    render(){
        console.warn("children-render")
        return(
            <div>
                <div>Result-props: {this.props.text}</div>
                <div onClick={this.props.modal}>Result-state: {this.state.text}</div>
            </div>
        )
    }
}