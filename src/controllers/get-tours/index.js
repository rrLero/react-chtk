// @flow

import React from 'react';
import {connect} from 'react-redux';

import {getTournamentsList} from '../../modules/admin/services/actions';

import type {Node} from 'react';
import type {Data} from './typedef';
import type {ApiDispatch} from '../../store/typedef';

type OwnProps = {
    view: ({data: Array<Data>}) => Node
};

type DispatchProps = {
    getTournamentsList: () => (dispatch: ApiDispatch) => Promise<*>
};

type StateProps = {
    data: Array<Data>
};

type Props = DispatchProps & StateProps & OwnProps;

export class GetToursController extends React.Component<Props> {

    componentDidMount() {
        this.props.getTournamentsList();
    }

    render() {
        const {data, view} = this.props;
        return view({data});
    }
}

const mapStateToProps = state => ({
    data: state.admin.tours
});

const mapDispatchToProps = {
    getTournamentsList
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(GetToursController);
