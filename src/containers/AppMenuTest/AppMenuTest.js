/**
 * Created by xiaohe on 2018/5/7.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Menu, Table, Modal, Button, Pagination, Icon } from 'antd';

import MenuSelection from './MenuSelection';
import MenuTable from './MenuTable';
import MenuRemove from './MenuRemove';
import MenuModal from './MenuModal';
import MenuPage from './MenuPage';

import menuCss from './AppMenuTest.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class AppMenuTest extends React.Component {
    constructor(props, context) {
        console.log("props::", props);
        super(props);
        // console.log("props", props,"\n","context111", context);
        this.state = {
            ModalText: '确认删除选中项',
            visible: false,
            confirmLoading: false,
            current: 'MenuA',
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                    key: 'address',
                }
            ],
            dataSource: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号'
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号'
                }
            ],
            menuList: [
                {
                    key: 'MenuA',
                    data: [
                        {
                            key: '1',
                            name: '胡彦斌',
                            age: 32,
                            address: '西湖区湖底公园1号'
                        },
                        {
                            key: '2',
                            name: '胡彦祖',
                            age: 42,
                            address: '西湖区湖底公园1号'
                        }
                    ]
                },
                {
                    key: 'MenuB',
                    data: [
                        {
                            key: '1',
                            name: '李一苟',
                            age: 18,
                            address: '清华大学一号宿舍楼'
                        },
                        {
                            key: '2',
                            name: '李二狗',
                            age: 20,
                            address: '清华大学二号宿舍楼'
                        }
                    ]
                }
            ],
            // rowSelection: {
            //     onChange: this.onChange,
            //     // 不建议在state里面写方法
            //     getCheckboxProps: function (record) {
            //         // console.log("record::", record);
            //         return ({
            //             disabled: record.name === 'Disabled User', // Column configuration not to be checked
            //             name: record.name,
            //         })
            //     },
            // },
            selectedRows: [],
            selectedRowKeys: [],
            text: []
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.handle = this.handle.bind(this);
        // this.clearEvent = this.clearEvent.bind(this);
    }

    // Async Confirme start
    showModal = () => {
        if (this.state.selectedRows.length === 0) {
            Modal.info({
                content: "请选择删除项",
                okText: "回去选择"
            })
            return
        }
        this.setState({
            visible: true,
        });
    }

    /**
     * modal 展示switch
     */
    showModal2 = () => {
        console.log("showModal2");
        if (this.state.selectedRows.length === 0) {
            Modal.info({
                content: "请选择删除项",
                okText: "回去选择"
            })
            return
        }
        this.setState({
            visible: true,
        });
    }

    /**
     * modal 删除事件
     */
    handleOk = () => {
        this.setState({
            ModalText: '模拟请求服务器，进行异步删除',
            confirmLoading: true,
        });

        console.log("这里对数组进行操作", this.state.selectedRows);

        let tempData = JSON.parse(JSON.stringify(this.state.dataSource));
        this.state.selectedRows.map((item, i) => {
            // 批量删除 会 在 删除第一个后，改变数组的长度。
            console.log(item.key, i);
            for (let b = 0; b < tempData.length; b++) {
                if (item.key === tempData[b].key) {
                    console.log(`我是数组对应的key：${b}`);
                    tempData.splice(b, 1)
                }

            }
        })
        console.log("tempData", tempData);
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
                ModalText: '确认删除选中项',
                dataSource: tempData,
                selectedRows: []
            });
        }, 2000);
    }
    /**
     * modal 取消事件
     */
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }
    // Async Confirme End

    onChange = (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({ selectedRows });
    }

    /**
     * table子组件调用父组件 方法
     */
    selectedRows = (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({ selectedRowKeys, selectedRows });
    }

    getCheckboxProps = (record) => {
        // console.log("record::", record);
        return ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        })
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.state.menuList.map((data, i) => {
            if (data.key === e.key) {
                console.log(i, e.key);
                console.log(this.state.menuList[i].data);
                this.setState({
                    current: e.key,
                    dataSource: this.state.menuList[i].data
                });
            }
        })
    }
    /**
     * menu 子组件 调用方法
     */
    handleClick2 = (e) => {
        console.log('click hd2', e);
        this.state.menuList.map((data, i) => {
            if (data.key === e.key) {
                console.log(i, e.key);
                console.log(this.state.menuList[i].data);
                this.setState({
                    current: e.key,
                    dataSource: this.state.menuList[i].data,
                    selectedRows: [], // 当前选择行数据
                    selectedRowKeys: [] // 当前选择行key集合
                });
            }
        })
    }

    switchData(e, arg) {
        console.log("event", e, "\n", "arg::", arg);
        if (e.key = "MenuA") {
            this.setState({
                dataSource: [
                    {
                        key: '11',
                        name: '胡彦斌1111',
                        age: 32,
                        address: '西湖区湖底公园1号'
                    },
                    {
                        key: '12',
                        name: '胡彦祖1111',
                        age: 42,
                        address: '西湖区湖底公园1号'
                    }
                ]
            })
        } else if (e.key = "MenuB") {
            console.log("click 2");
        }
    }

    componentWillMount() {
        console.log("componentWillMount fetch virtual data");
        fetch("../../public/data/menuTest.json").then(
            function (res) {
                console.log("first Promise");
                // console.log('res',res)
                return res.json(); // res.json 返回一个Promise
            }
        ).then((data) => {
            console.log("second Promise：：", data);
            // console.log("获取数据data", data.result.AppA, data);
            this.setState({
                menuList: data,
                dataSource: data[0].data
            })
        });
        // this.handle(event);
    }
    componentWillUpdate() {
        // console.table(this.state);
        console.log(this.state);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps === this.props && nextState === this.state) {
            console.log("No change");
            return false
        } else {
            console.log("I am changed!!!");
            return true
        }
    }

    handle(a) {
        // console.log(1111, this.context.store.getState())
        // console.log("a, a", a);
        // this.setState({
        //     text: this.state.text.concat(a.target.innerHTML)
        // })
    }

    clearEvent() {
        this.setState({
            text: []
        })
    }

    clearCli = (e) => {
        console.log("组件传参，event事件：：", e);
    }

    render() {
        return (
            <div className="menuCon">
                {(3 + 3 === 6) ? (<Alert message="Success Text" type="success" />) : ""}
                {/* <Alert message="Success Text" type="success" /> */}
                <div className="backup">

                    {/*  <Menu
                    // className="menu"
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                    style={{ width: 256 }}
                // defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                // mode={this.state.mode}
                // theme={this.state.theme}
                >
                    {
                        this.state.menuList.map((data, i) => {
                            // console.log("data::", data, "i::", i);
                            return (
                                <Menu.Item key={data.key}>
                                    {data.key}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
                <div className="menuRight">
                    <Button type="danger" onClick={this.showModal}>删除</Button>
                    <Table rowSelection={this.state.rowSelection} dataSource={this.state.dataSource} columns={this.state.columns} />
                </div>  */}
                    {/* <Modal
                    title="是否删除？"
                    visible={this.state.visible}
                    confirmLoading={this.state.confirmLoading}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="确认"
                >
                    <p>{this.state.ModalText}</p>
                </Modal> */}
                </div>
                <div className="sub">
                    <MenuSelection
                        onClick={this.handleClick2}
                        selectedKeys={this.state.current}
                        mode="inline"
                        style={{ width: 256 }}
                        menuList={this.state.menuList} />
                    <MenuRemove text={"删3除"} state={this.state} type={"danger"} handle={this.showModal2} />
                    <MenuTable
                        selectedRowKeys={this.state.selectedRowKeys}
                        selectedRows={this.selectedRows}
                        rowSelection={this.state.rowSelection}
                        dataSource={this.state.dataSource}
                        columns={this.state.columns} />
                    <MenuModal
                        visible={this.state.visible}
                        confirmLoading={this.state.confirmLoading}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    />
                </div>
            </div>
        )
    }
};
AppMenuTest.contextTypes = {
    store: PropTypes.object
}
