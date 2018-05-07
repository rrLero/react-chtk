// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {find, path, equals, compose} from 'ramda';

import AdminSingleTourView from '../../views/single-tour';
import GetToursController from '../../../../controllers/get-tours';
import GetPlayersController from '../../../../controllers/get-players';
import {addTour, editTour, removeTour} from '../../services/actions';

import type {ContextRouter} from 'react-router-dom';
import type {ResponseTour} from '../../services/typedef';
import type {ApiDispatcher} from '../../../../store/typedef';

type OwnProps = {

};

type DispatchProps = {
    addTour: (ResponseTour) => ApiDispatcher,
    editTour: (ResponseTour) => ApiDispatcher,
    removeTour: (ResponseTour) => ApiDispatcher
};

type StateProps = {
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps & ContextRouter;

export class AdminSingleTourController extends React.Component<Props> {

    render() {
        const {match} = this.props;
        const {id} = match.params;
        const equalsId = equals(id);
        const pathToMongoId = path(['_id', '$oid']);
        const findDataEqualToUrl = find(compose(equalsId, pathToMongoId));
        return (
            <GetPlayersController
                view={({data: playersData}) => {
                    return equalsId('add_new') && playersData ? (
                        <AdminSingleTourView
                            tour={null}
                            isLoading={this.props.isLoading}
                            players={playersData}
                            addTour={this.props.addTour}
                            removeTour={this.props.removeTour}
                            editTour={this.props.editTour}
                        />
                    ) : (
                        <GetToursController
                            view={({data}) => (
                                data && playersData && findDataEqualToUrl(data) ? (
                                    <AdminSingleTourView
                                        tour={findDataEqualToUrl(data) || null}
                                        isLoading={this.props.isLoading}
                                        players={playersData}
                                        addTour={this.props.addTour}
                                        removeTour={this.props.removeTour}
                                        editTour={this.props.editTour}
                                    />
                                ) : null
                            )}
                        />
                    );
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.admin.isLoading
});

const mapDispatchToProps = {
    editTour,
    removeTour,
    addTour
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(AdminSingleTourController));
