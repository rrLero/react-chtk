// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import AdminACoachesView from '../../views/coaches';
import GetCoachesController from '../../../../controllers/get-coaches';

type OwnProps = {

};

type DispatchProps = {

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

};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(AdminCoachesController));
