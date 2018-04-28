// @flow

import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import AdminAddPlayerController from './controllers/addPlayer';

const Admin = () => {
    return (
        <Switch>
            <Route path="/admin/add" component={AdminAddPlayerController}/>
        </Switch>
    );
};

export default Admin;

