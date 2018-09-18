/**
 * Created by xiaohe on 2018/5/16.
 */
import React, { Component } from 'react';
import { Modal } from 'antd';

export default class MenuModal extends Component {
    constructor(props, context) {
        super(props, context);
        console.log("%c MenuModal.props", "background:#bfc", props, context);
        this.state = {
            ModalText: '确认删除选中项',
            visible: false,
            confirmLoading: false,
        }
    }

    handleOk = () => {
        this.props.onOk()
    }

    handleCancel = () => {
        this.props.onCancel()
    }

    render() {
        return (
            <div>
                <Modal
                    title="是否删除？"
                    visible={this.props.visible}
                    confirmLoading={this.props.confirmLoading}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="确认"
                >
                    <p>{this.state.ModalText}</p>
                </Modal>
            </div>
        )
    }
}