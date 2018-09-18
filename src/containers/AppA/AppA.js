/**
 * Created by xiaohe on 2018/5/7.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dom, Result, Clear} from 'com/index.js'
import AppACss from "./AppA.scss";
import {Menu, Table, Pagination} from 'antd';

export default class AppA extends React.Component {
    constructor(props, context) {
        super(props);
        // console.log("props", props,"\n","context111", context);
        this.state = {
            text: [],
            list: [1, 2, 3, 4, 5]
        }
        this.handle = this.handle.bind(this);
        this.clearEvent = this.clearEvent.bind(this);
    }

    componentWillMount() {
        console.log("挂载之前");
        fetch("../../public/data/data.json").then(
            function (res) {
                console.log("first Promise");
                // console.log('res',res)
                return res.json(); // res.json 返回一个Promise
            }
        ).then((data) => {
            console.log("second Promise");
            // console.log("获取数据data", data.result.AppA, data);
            this.setState({
                list: data.result.AppA
            })
        });
        // this.handle(event);
    }

    handle(a) {
        console.log(1111, this.context.store.getState())
        console.log("a, a", a);
        this.setState({
            text: this.state.text.concat(a.target.innerHTML)
        })
    }

    clearEvent() {
        this.setState({
            text: []
        })
    }

    render() {
        return (
            <div>
                <strong className={AppACss.strong}>最普通的react,父传子子传父，没有调用redux，无状态子组件，在周期里获取数据，用的fetch非ajax</strong>
                <ul>
                    {

                        this.state.list.map((data, i) => {
                            console.log("data", data, "i", i);
                            // alert("1")
                            return <Dom text={data.name} key={i} handle={this.handle}/>
                        })
                    }
                </ul>
                <Result text={this.state.text}/>
                <Clear text={"freebsd"} handle={this.clearEvent}/>
            </div>

        )
    }
};
AppA.contextTypes = {
    store: PropTypes.object
}
