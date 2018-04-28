// @flow
import '../public/less/main.less';
import '../public/less/normalize.less';

import React from 'react';
import {Provider} from 'react-redux';
import withRoot from '../with-root';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import store from "../store";
import Main from './components/main';
import Children from '../modules/children';
import Admin from '../modules/admin';


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path='/' component={Main}/>
                    <Route path='/children' component={Children}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default withRoot(App);