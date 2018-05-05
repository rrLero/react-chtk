// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import GetDataRatingController from '../../../../controllers/get-data-rating';

import Spinner from 'material-ui/Progress/CircularProgress';

import RatingTableView from '../../views/rating-table';

import type {WithStyleConnector} from '../../../../typedef';

type OwnProps = {
    filter: Array<number>
};

type DispatchProps = {

};

type Data = Array<{
    avatarUrl: string,
    coachId: string,
    id: string,
    name: string,
    points: number,
    year: number
}>;

type StateProps = {
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class RatingTableController extends React.Component<Props> {

    filterData: (Data) => Data = data => {
        const {filter} = this.props;
        return data.filter(el => {
            const nowYear = new Date(Date.now()).getFullYear();
            return (nowYear - el.year) >= filter[0] && (nowYear - el.year) < filter[1];
        });
    };

    render() {
        const {isLoading} = this.props;
        return (
            <GetDataRatingController
                view={({data}) => (
                    !data ? isLoading ? <Spinner/> : null : (
                        <RatingTableView
                            rating={this.filterData(data)}
                        />
                    )
                )}
            />
        );
    }
}

const mapStateToProps = (state, props) => ({
    isLoading: state.rating.isLoading
});

const mapDispatchToProps = {

};

const connector: WithStyleConnector<OwnProps, Props> = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(RatingTableController));
