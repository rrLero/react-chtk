// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import type {Connector} from 'react-redux';

import RatingView from '../../views/rating';

type OwnProps = {

};

type DispatchProps = {

};

type StateProps = {

};

type Props = DispatchProps & StateProps & OwnProps;

export class RatingController extends React.Component<Props> {

    render() {
        return (
              <RatingView
                  rating={[{name: 'player1', id: '1', points: 3500}]}
              />
            )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(RatingController));
