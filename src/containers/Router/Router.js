/**
 * Created by xiaohe on 2018/5/8.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter, Route, NavLink, Link, Switch} from 'react-router-dom';


import {AppA,AppB,AppC,AppD,Nav,AppLogin,AppImg,Conclusion,AppTest, AppMenuTest} from 'con/index.js'

export default class router extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <Nav/>
                    <Switch>
                        <Route path="/conclusion" component={Conclusion}/>
                        <Route path="/appA" component={AppA}/>
                        <Route path="/appB" component={AppB}/>
                        <Route path="/appC" component={AppC}/>
                        <Route path="/appD" component={AppD}/>
                        <Route path="/appLogin" component={AppLogin}/>
                        <Route path="/appImg" component={AppImg}/>
                        <Route path="/appTest" component={AppTest}/>
                        <Route path="/appMenuTest" component={AppMenuTest}/>
                    </Switch>
                </div>

            </HashRouter>

        )
    }
}
router.contextTypes = {
    store: PropTypes.object
}
