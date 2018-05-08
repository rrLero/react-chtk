// @flow

import React from 'react';
import {connect} from 'react-redux';

import {getDataRating} from '../../modules/children/services/actions';

import type {Node} from 'react';
import type {Data} from './typedef';
import type {Dispatch} from '../../store/typedef';

type OwnProps = {
    view: ({data: Array<Data>}) => Node
};

type DispatchProps = {
    getDataRating: () => (dispatch: Dispatch) => Promise<*>
};

type StateProps = {
    data: Array<{
        avatarUrl: string,
        coachId: string,
        id: string,
        name: string,
        points: number,
        year: number
    }>
};

type Props = DispatchProps & StateProps & OwnProps;

export class GetDataRatingController extends React.Component<Props> {

    componentDidMount() {
        this.props.getDataRating();
    }

    render() {
        const {data, view} = this.props;
        return view({data});
    }
}

const mapStateToProps = state => ({
    data: state.rating.dataRating
});

const mapDispatchToProps = {
    getDataRating
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(GetDataRatingController);
