// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import AdminPlayersView from '../../views/players';
import GetPlayersControllers from '../../../../controllers/get-players';
import GetCoachesController from '../../../../controllers/get-coaches';

import {editPlayer, addPlayer, removePlayer} from '../../services/actions';

import type {ApiDispatcher} from '../../../../store/typedef';

type OwnProps = {

};

type DispatchProps = {
    editPlayer: () => ApiDispatcher,
    addPlayer: () => ApiDispatcher,
    removePlayer: () => ApiDispatcher
};

type StateProps = {
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class AdminPlayersController extends React.Component<Props> {

    render() {
        return (
            <GetCoachesController
                view={({data: coachesData}) => (
                    <GetPlayersControllers
                        view={({data: playersData}) => (
                            <AdminPlayersView
                                playersData={playersData}
                                coachesData={coachesData}
                                editPlayer={this.props.editPlayer}
                                addPlayer={this.props.addPlayer}
                                removePlayer={this.props.removePlayer}
                                isLoading={this.props.isLoading}
                            />
                        )}
                    />
                )}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.admin.isLoading
});

const mapDispatchToProps = {
    editPlayer,
    addPlayer,
    removePlayer
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(AdminPlayersController));
