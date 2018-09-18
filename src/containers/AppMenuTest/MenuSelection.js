/**
 * Created by xiaohe on 2018/5/16.
 */
import React, { Component } from 'react';
import { Menu, Table, Modal, Button, Pagination, Icon } from 'antd';

export default class MenuSelection extends Component {
    constructor(props, context) {
        super(props, context);
        console.log("%c MenuSelection.props", "background:#bfc", props, context);
        // this.state = {
        //     current: this.props.selectedKeys
        // }
    }

    render() {
        // console.log(123,this.props.selectedKeys)
        return (
            <div>
                {/* 显示结果:{this.props.text} */}
                {/*  <h1>
                    <b>selection</b>
                </h1> */}
                <Menu
                    // className="menu"
                    onClick={this.props.onClick}
                    selectedKeys={[this.props.selectedKeys]}
                    mode="inline"
                    style={{ width: 256 }}
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                // mode={this.state.mode}
                // theme={this.state.theme}
                >
                    {
                        this.props.menuList.map((data, i) => {
                            // console.log("data::", data, "i::", i);
                            return (
                                <Menu.Item key={data.key}>
                                    {data.key}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
        )
    }
}