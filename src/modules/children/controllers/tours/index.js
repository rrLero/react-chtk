// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {filter, contains, toString, path, compose, map, sort, find, equals} from 'ramda';

import GetToursController from '../../../../controllers/get-tours';
import ToursView from '../../views/tours';

import type {Match, RouterHistory} from 'react-router-dom';

type OwnProps = {
    match: Match,
    history: RouterHistory
};

type DispatchProps = {

};

type StateProps = {

};

type Props = DispatchProps & StateProps & OwnProps;

export class ToursController extends React.Component<Props> {

    render() {
        const {match} = this.props;
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
        const suggestions = map(el => ({
            value: pathToMongoId(el),
            label: `${el.date} ${el.name}`
        }));
        return (
            <GetToursController
                view={({data}) => (
                    data ? (
                        <ToursView
                            tour={findTour(data)}
                            suggestions={suggestions(tours(data))}
                            id={pathToId(match)}
                        />
                    ) : null
                )}
            />
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(ToursController));
