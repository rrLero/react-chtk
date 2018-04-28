// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import type {Connector} from 'react-redux';

import AdminAddPlayerView from '../../views/addPlayer';

type OwnProps = {

};

type DispatchProps = {

};

type StateProps = {

};

type Props = DispatchProps & StateProps & OwnProps;

export class AdminAddPlayerController extends React.Component<Props> {

    render() {
        return (
            <AdminAddPlayerView
            />
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(AdminAddPlayerController));
