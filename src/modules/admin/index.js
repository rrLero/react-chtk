// @flow

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AdminCoachesController from './controllers/coaches';
import AdminPlayersController from './controllers/players';
import AdminView from './views';


const Admin = () => {
    return (
        <Switch>
            <AdminView>
                <Route path="/admin/players" component={AdminPlayersController}/>
                <Route path="/admin/coaches" component={AdminCoachesController}/>
            </AdminView>
        </Switch>
    );
};

export default Admin;

