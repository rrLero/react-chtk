// @flow
import '../public/less/main.less';
import '../public/less/normalize.less';

import React from 'react';
import {Provider} from 'react-redux';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import store from "../store";
import Main from './components/main';


const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route component={Main}/>
            </BrowserRouter>
        </Provider>
    )
};

export default App;