// @flow

import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import ScheduleController from './controllers/schedule/index';
import RatingController from './controllers/rating/index';
import ChildrenView from './views';

const Children = () => {
    return (
        <Switch>
            <ChildrenView>
                <Route exact={true} path="/children" component={() => <Redirect to="/children/schedule" />}/>
                <Route path="/children/schedule" component={ScheduleController}/>
                <Route path="/children/rating" component={RatingController}/>
            </ChildrenView>
        </Switch>
    );
};

export default Children;

