// @flow

import React from 'react';
import {connect} from 'react-redux';

import {getNewsChildrenList} from '../../modules/admin/services/actions';

import type {Node} from 'react';
import type {Dispatch} from '../../store/typedef';
import type {ResponseNew} from '../../modules/admin/services/typedef';

type OwnProps = {
    view: ({data: Array<ResponseNew>}) => Node
};

type DispatchProps = {
    getNewsChildrenList: () => (dispatch: Dispatch) => Promise<*>
};

type StateProps = {
    data: Array<ResponseNew>
};

type Props = DispatchProps & StateProps & OwnProps;

export class GetNewsController extends React.Component<Props> {

    componentDidMount() {
        this.props.getNewsChildrenList();
    }

    render() {
        const {view, data} = this.props;
        return (
            view({data})
        );
    }
}

const mapStateToProps = state => ({
    data: state.admin.news
});

const mapDispatchToProps = {
    getNewsChildrenList
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(GetNewsController);
