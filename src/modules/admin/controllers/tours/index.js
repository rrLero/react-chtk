// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import AdminToursView from '../../views/tours';
import GetToursController from '../../../../controllers/get-tours';

type OwnProps = {

};

type DispatchProps = {};

type StateProps = {
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class AdminToursController extends React.Component<Props> {

    render() {
        return (
            <GetToursController
                view={({data}) => (
                    <AdminToursView
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

export default withRouter(connector(AdminToursController));
