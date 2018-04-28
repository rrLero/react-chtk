// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {getDataRating} from '../../services/actions';
import Spinner from 'material-ui/Progress/CircularProgress';

import type {Connector} from 'react-redux';

import RatingTableView from '../../views/rating-table';

type OwnProps = {
    filter: Array<number>
};

type DispatchProps = {
    getDataRating: () => void
};

type StateProps = {
    data: Array<{
        avatarUrl: string,
        coachId: string,
        id: string,
        name: string,
        points: number,
        year: number
    }>,
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class RatingTableController extends React.Component<Props> {

    componentDidMount() {
        this.props.getDataRating();
    }

    render() {
        const {data, isLoading} = this.props;
        return (
            !data ? isLoading ? <Spinner/> : null : (
                <RatingTableView
                    rating={data}
                />
            )
        )
    }
}

const mapStateToProps = (state, props) => ({
    data: state.rating.dataRating && state.rating.dataRating.filter(el => {
        const nowYear = new Date(Date.now()).getFullYear();
        return (nowYear - el.year) >= props.filter[0] &&  (nowYear - el.year) < props.filter[1]
    }),
    isLoading: state.rating.isLoading
});

const mapDispatchToProps = {
    getDataRating
};

const connector: Connector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(RatingTableController));
