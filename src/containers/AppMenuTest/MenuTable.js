/**
 * Created by xiaohe on 2018/5/16.
 */
import React, { Component } from 'react';
import { Menu, Table, Modal, Button, Pagination, Icon } from 'antd';

export default class MenuTable extends Component {
    constructor(props, context) {
        super(props, context);
        console.log("%c MenuTable.props", "background:#bfc", props, context);
        this.state = {
            selectedRowKeys: this.props.selectedRowKeys
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(" %c willReceive","background:red;");
        console.info(nextProps);
        this.setState({
            selectedRowKeys: nextProps.selectedRowKeys
        })
    }
    componentWillUpdate() {
        console.table("willUpdate", this.state);

    }
    componentDidUpdate() {

    }

    onChange = (selectedRowKeys, selectedRows) => {
        console.log("子组件接收 回调函数");
        // this.setState({ selectedRows });
        console.log("selectedRowKeys::", selectedRowKeys);
        this.props.selectedRows(selectedRowKeys, selectedRows)
    }

    getCheckboxProps = record => {
        // console.log("%c record::", "background:red", record);
        return ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        })
    }

    render() {
        // console.log(123,this.props.selectedKeys)
        console.log("render::", this.state);
        const { selectedRowKeys } = this.state;
       
        const rowSelection= {
            selectedRowKeys,
            onChange: this.onChange,
            getCheckboxProps: this.getCheckboxProps
        }
        return (
            <div>
                {/* 显示结果:{this.props.text} */}
                {/* <h1>
                    <b>table</b>
                </h1> */}
                <Table
                    rowSelection={rowSelection}
                    dataSource={this.props.dataSource}
                    columns={this.props.columns} />
            </div>
        )
    }
}