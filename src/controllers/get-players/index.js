// @flow

import React from 'react';
import {connect} from 'react-redux';

import {getPlayersList} from '../../modules/admin/services/actions';

import type {Node} from 'react';
import type {Data} from './typedef';
import type {ApiDispatch} from '../../store/typedef';

type OwnProps = {
    view: ({data: Array<Data>}) => Node
};

type DispatchProps = {
    getPlayersList: () => (dispatch: ApiDispatch) => Promise<*>
};

type StateProps = {
    data: Array<Data>
};

type Props = DispatchProps & StateProps & OwnProps;

export class GetPlayersController extends React.Component<Props> {

    componentDidMount() {
        this.props.getPlayersList();
    }

    render() {
        const {data, view} = this.props;
        return view({data});
    }
}

const mapStateToProps = state => ({
    data: state.admin.players
});

const mapDispatchToProps = {
    getPlayersList
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(GetPlayersController);
