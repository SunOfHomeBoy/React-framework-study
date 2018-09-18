/**
 * Created by xiaohe on 2018/5/7.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Router from 'con/Router/Router.js';
import {Provider} from 'react-redux'

import store from 'store/index.js';

import Mock from 'mock/index';
ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>
    , document.getElementById('main')
)