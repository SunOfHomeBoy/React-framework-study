/**
 * Created by xiaohe on 2018/6/29.
 */
import React, {Component} from 'react';

class SubAssembly extends Component {
    constructor(props, context) {
        super(props, context);
        console.log('子-周期:constructor', 3);
        console.log("子-constructor-props", props);
        console.log("子-context", context);
        this.state = {
            data: this.props.data
        }
        this.handle = this.props.handle.bind(this);
        console.log("子 Constructor", this);
    }

    componentWillMount() {
        console.log('子-周期:componentWillMount', 4)
    }

    componentWillReceiveProps() {
        console.log('子-周期:componentWillReceiveProps', 10);

        /*有个异步函数，会让你感觉不太一样*/
        setTimeout(() => {
            this.setState({
                data: this.props.data
            }, () => {
                console.log(this.state)
            })
            console.log("setTimeout异步宏任务，事件队列末尾，componentWillReceiveProps，setState改变状态，子组件重绘，生命周期 部分方法调用");
        }, 0)

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('子-周期:shouldComponentUpdate', 11);
        console.log('nextProps', nextProps);
        console.log('props', this.props);
        console.log('nextState', nextState);
        console.log('state', this.state);
        // 选择注释或放开以下代码，会有不同发现
        /* if(nextState.data == this.state.data){
            return false
        } */
        return true
    }

    componentWillUpdate() {
        console.log('子-周期:componentWillUpdate', 12);

    }

    componentDidUpdate() {
        console.log('子-周期:componentDidUpdate', 13)
    }

    componentDidMount() {
        console.log('子-周期:componentDidMount', 7)
    }

    componentWillUnmount() {
        console.log('子-周期:componentWillUnmount')
    }

    render() {
        {
            console.log('render', this.state.data, 5, "state")
            console.log('render', this.props.data, 6, "props")
        }
        return (
            <div onClick={this.handle}>
                <strong>子：</strong>
                <br/>
                state:{this.state.data}
                <br/>
                <br/>
                上述state是个坑哦，为了更好的让你理解props和state，请看SubAssembly的componentWillReceiveProps
                <br/>
                <br/>
                props:{this.props.data}
            </div>
        )
    }
}

export default SubAssembly;
