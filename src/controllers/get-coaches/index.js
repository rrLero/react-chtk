// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getCoachesList} from '../../modules/admin/services/actions';

import type {Node} from 'react';
import type {Data} from './typedef';
import type {Dispatch} from '../../store/typedef';

type OwnProps = {
    view: ({data: Array<Data>}) => Node
};

type DispatchProps = {
    getCoachesList: () => (dispatch: Dispatch) => Promise<*>
};

type StateProps = {
    data: Array<Data>
};

type Props = DispatchProps & StateProps & OwnProps;

export class GetCoachesController extends React.Component<Props> {

    componentDidMount() {
        this.props.getCoachesList();
    }

    render() {
        const {data, view} = this.props;
        return view({data});
    }
}

const mapStateToProps = state => ({
    data: state.admin.coaches
});

const mapDispatchToProps = {
    getCoachesList
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(GetCoachesController));
