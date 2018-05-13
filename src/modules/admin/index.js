// @flow

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AdminCoachesController from './controllers/coaches';
import AdminPlayersController from './controllers/players';
import AdminToursController from './controllers/tours';
import AdminSingleTourController from './controllers/single-tour';
import AdminNewsController from './controllers/news';
import AdminView from './views';

const Admin = () => {
    return (
        <Switch>
            <AdminView>
                <Route path="/admin/players" component={AdminPlayersController}/>
                <Route path="/admin/coaches" component={AdminCoachesController}/>
                <Route exact={true} path="/admin/tours" component={AdminToursController}/>
                <Route path="/admin/tours/:id" component={AdminSingleTourController}/>
                <Route path="/admin/news" component={AdminNewsController}/>
            </AdminView>
        </Switch>
    );
};

export default Admin;

