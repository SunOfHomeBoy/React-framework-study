/**
 * Created by xiaohe on 2018/6/29.
 */
import React, {Component} from 'react';
import SubAssembly from './SubAssembly'

class Conclusion extends Component {
    constructor(props, context) {
        super(props, context);
        console.clear();
        console.log('父-周期constructor', 1);
        this.state={
            text:'我是一初始的值',
            data:'我就是一个简单的子组件，你点我一下试试？'
        }
        this.handle = this.handle.bind(this);
        this.myHandle = this.myHandle.bind(this);
    }

    componentWillMount() {
        console.log('父-周期componentWillMount', 2)
    }

    componentWillReceiveProps() {
        console.log('父-周期componentWillReceiveProps 8之后')
    }

    shouldComponentUpdate() {
        console.log('父-周期shouldComponentUpdate', "9之前");
        return true
    }

    componentWillUpdate() {
        console.log('父-周期componentWillUpdate', 9)
    }

    componentDidUpdate() {
        console.log('父-周期componentDidUpdate', 14)
    }

    componentDidMount() {
        console.log('父-周期componentDidMount', 8)
    }

    componentWillUnmount() {
        console.log('父-周期componentWillUnmount')
    }
    handle(e) {
        this.setState({
            text:'这是一次成功的子传父',
            data:'我成功的呼叫了我爸爸'
        })
        console.log(e);
        console.log("子组件点击调用方法改变状态，父子组件相关周期调用");
        console.log('这是一次成功的子传父，子组件调用父组件方法');
    }
    myHandle(){
        this.setState({
            text:'这是一次成功的父传子',
            data:'你好小崽子们',
            createdProperty: 'created a property'
        });
        console.log('这是一次成功的父传子,父组件调用‘myHandle’方法');
    }
    render() {
        {
            console.log('render', this.state.data, "zxx", "state")
            console.log('render', this.props, "xxz", "props")
            console.log("父组件-render-context", this.context);
        }
        return (
            <div>
                <strong>如果我是你，我会打开控制台看console</strong>
                <br/>
                <strong>父：</strong>
                <div onClick={this.myHandle}>{this.state.text}</div>
                <br/>

                <SubAssembly data={this.state.data} handle={this.handle}/>
            </div>
        )
    }
}

export default Conclusion;
