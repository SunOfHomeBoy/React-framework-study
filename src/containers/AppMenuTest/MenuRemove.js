/**
 * Created by xiaohe on 2018/6/11.
 */
import React, { Component } from 'react';
import { Menu, Table, Modal, Button, Pagination, Icon } from 'antd';

const MenuRemove = ({ text, type, state, handle }) => {
    // console.log("text::", text, " + handle", handle, `type:: ${type}`);
    // console.log("woshi state::", state);
    return (
        <div className="MenuRemove">
            <Button type={type} onClick={handle}>{text}</Button>
        </div>
    )
};
export default MenuRemove;