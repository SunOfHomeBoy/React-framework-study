import React, { Component } from 'react';
import AppTestResult from './AppTestResult'
import AppTestSiblings from './AppTestSiblings'
class AppTest extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            text: "constructor",
            modal: "default"
        }
        this.handle = this.handle.bind(this)
        this.modal = this.modal.bind(this)
        console.log(1, "constructor")
    }
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.group("shouldComponentUpdate")
        console.log("5.1 确认是否渲染");
        console.log("5.2 shouldComponentUpdate", nextProps, "\n", "nextText::", nextState)
        console.groupEnd()
        if (nextState == this.state) {
            return false
        }
        return true
    }
    componentWillMount() {
        this.setState({
            text: "componentWillMount"
        }, () => {
            console.log(4, "componentWillMount-异步-不代表周期被调用", this.state.text)
        })
        console.log(2, "componentWillMount", this.state.text)

    }
    componentWillUpdate(nextProps, nextState) {
        console.group("componentWillUpdate")
        console.log(6, "componentWillUpdate", this.state.text, nextProps, nextState)
        console.groupEnd()
    }
    handle() {
        console.group("handle 方法")
        this.setState({
            text: "handle"
        }, () => {
            console.log("%c handle-异步-不代表方法被调用", "background: yellow;", this.state.text)
        })
        console.log("handle", this.state.text)
        console.groupEnd()
    }
    modal(e) {
        this.setState({
            modal: e.target.innerHTML
        })
    }
    componentDidMount() {
        this.setState({
            text: "componentDidMount"
        }, () => {
            console.log("componentDidMount-异步-不代表周期被调用", this.state.text, "p.s: DidMount 修改setState引起重绘")
        })
        console.log("componentDidMount  %c ::此时开始异步修改状态,并且 调用 shouldComponentUpdate 方法", "background:#cef", 3, this.state.text)
    }
    componentDidUpdate(nextProps, nextState) {
        console.log("componentDidUpdate", this.state.text, nextProps, nextState)
    }
    componentWillUnmount() {
        console.warn("componentWillUnmount")
    }
    render() {
        return (
            <div>
                <div onClick={this.handle}>111{this.state.text}111</div>
                <br />
                <AppTestResult text={this.state.text} modal={this.modal} />
                <AppTestSiblings modal={this.state.modal} />
            </div>

        )
    }
}
export default AppTest