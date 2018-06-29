// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {filter, contains, toString, path, compose, map, sort, find, equals} from 'ramda';

import GetToursController from '../../../../controllers/get-tours';
import ToursView from '../../views/tours';
import Spinner from 'material-ui/Progress/CircularProgress';

import type {Match, RouterHistory} from 'react-router-dom';

type OwnProps = {
    match: Match,
    history: RouterHistory
};

type DispatchProps = {

};

type StateProps = {
    isLoading: boolean
};

type Props = DispatchProps & StateProps & OwnProps;

export class ToursController extends React.Component<Props> {

    render() {
        const {match, isLoading} = this.props;
        const pathToDate = path(['date']);
        const pathToId = path(['params', 'id']);
        const equalsToUrlId = equals(pathToId(match));
        const pathToMongoId = path(['_id', '$oid']);
        const thisYear = new Date().getFullYear();
        const sortBy = (a, b) => {
            return (pathToDate(a) > pathToDate(b)) ? -1 : 1;
        };
        const tours = compose(sort(sortBy), filter(compose(contains(toString(thisYear)), pathToDate)));
        const findTour = find(compose(equalsToUrlId, pathToMongoId));
        const findLastTour = equalsToUrlId('last');
        const suggestions = map(el => ({
            value: pathToMongoId(el),
            label: `${el.date} ${el.name}`
        }));
        return (
            <GetToursController
                view={({data}) => (
                    !data ? isLoading ? <Spinner size={100}/> : null : (
                        <ToursView
                            tour={findTour(data) || findLastTour && data[data.length - 1]}
                            suggestions={suggestions(tours(data))}
                            id={findLastTour ? pathToMongoId(data[data.length - 1]) : pathToId(match)}
                        />
                    )
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

export default withRouter(connector(ToursController));
