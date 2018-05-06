// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import AdminACoachesView from '../../views/coaches';
import GetCoachesController from '../../../../controllers/get-coaches';

import {editCoach, addCoach, removeCoach} from '../../services/actions';

import type {ApiDispatcher} from '../../../../store/typedef';
import type {Coach} from '../../views/coach-detail/typedef';

type OwnProps = {

};

type DispatchProps = {
    addCoach: (Coach) => ApiDispatcher,
    editCoach: (Coach) => ApiDispatcher,
    removeCoach: (Coach) => ApiDispatcher
};

type StateProps = {
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class AdminCoachesController extends React.Component<Props> {

    render() {
        return (
            <GetCoachesController
                view={({data}) => (
                    <AdminACoachesView
                        data={data}
                        isLoading={this.props.isLoading}
                        addCoach={this.props.addCoach}
                        removeCoach={this.props.removeCoach}
                        editCoach={this.props.editCoach}
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
    editCoach,
    addCoach,
    removeCoach
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(AdminCoachesController));
