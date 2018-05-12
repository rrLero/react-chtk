// @flow

import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ScheduleController from './controllers/schedule/index';
import RatingController from './controllers/rating/index';
import ToursController from './controllers/tours/index';
import PlayersController from './controllers/players/index';
import ChildrenView from './views';

const Children = () => {
    return (
        <Switch>
            <ChildrenView>
                <Route exact={true} path="/children" component={() => <Redirect to="/children/schedule" />}/>
                <Route path="/children/schedule" component={ScheduleController}/>
                <Route path="/children/rating" component={RatingController}/>
                <Route exact={true} path="/children/tours" component={ToursController}/>
                <Route path="/children/tours/:id" component={ToursController}/>
                <Route exact={true} path="/children/players" component={PlayersController}/>
                <Route path="/children/players/:id" component={PlayersController}/>
            </ChildrenView>
        </Switch>
    );
};

export default Children;

