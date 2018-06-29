// @flow

import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {path, compose, map, sort, find, equals, filter} from 'ramda';

import GetRatingController from '../../../../controllers/get-data-rating';
import GetCoachesController from '../../../../controllers/get-coaches';

import PlayersView from '../../views/players';
import Spinner from 'material-ui/Progress/CircularProgress';

import {yearsArray} from '../../views/rating-tabs/constants';

import type {Match, RouterHistory} from 'react-router-dom';
import type {Data as TourData} from '../../../../controllers/get-tours/typedef';
import type {Data as PlayerData} from '../../../../controllers/get-players/typedef';
import type {Data as CoachesData} from '../../../../controllers/get-coaches/typedef';
import type {Data as RatingData} from '../../../../controllers/get-data-rating/typedef';

type OwnProps = {
    match: Match,
    history: RouterHistory
};

type DispatchProps = {

};

type StateProps = {
    isLoading: boolean,
    players: Array<PlayerData>,
    coaches: Array<CoachesData>,
    tours: Array<TourData>
};

type Props = DispatchProps & StateProps & OwnProps;

export class PlayersController extends React.Component<Props> {

    componentWillReceiveProps(nextProps: Props) {
        const {match} = nextProps;
        const {players} = this.props;
        const pathToId = path(['params', 'id']);
        const equalsToUrlId = equals(pathToId(match));
        const pathToMongoId = path(['_id', '$oid']);
        if (equalsToUrlId('rand')) {
            if (players) {
                const randPlayer = this.getRandomPlayer(players);
                this.props.history.push(`/children/players/${pathToMongoId(randPlayer)}`);
            }
        }
    }

    getBorderYear = (year: number) => {
        return yearsArray.find(el => (
            (year >= el[0]) && (year < el[1])
        )) || [];
    };

    filterData = (data: Array<RatingData>, year: number, id: string) => {
        const filterArr = this.getBorderYear(year);
        if (!filterArr) {
            return -1;
        }
        return data.filter(el => {
            const nowYear = new Date(Date.now()).getFullYear();
            return (nowYear - el.year) >= filterArr[0] && (nowYear - el.year) < filterArr[1];
        }).findIndex(elem => elem.id === id);
    };

    getRandomPlayer = (players: Array<PlayerData>) => {
        const max = players.length - 1;
        const min = 0;
        return players[Math.floor(Math.random() * (max - min)) + min];
    };

    render() {
        const {match, isLoading, players, tours} = this.props;
        const nowYear = new Date(Date.now()).getFullYear();
        const pathToName = path(['lastName']);
        const pathToId = path(['params', 'id']);
        const equalsToUrlId = equals(pathToId(match));
        const pathToMongoId = path(['_id', '$oid']);
        const sortBy = (a, b) => {
            return (pathToName(a) < pathToName(b)) ? -1 : 1;
        };
        const playersSort = sort(sortBy);
        const findPlayer = find(compose(equalsToUrlId, pathToMongoId));
        const getCoachId = path(['coach', 'id']);
        const suggestions = map(el => ({
            value: pathToMongoId(el),
            label: `${el.lastName} ${el.name}`
        }));
        return (
            <GetCoachesController
                view={({data: coaches}) => (
                    <GetRatingController
                        view={({data: dataRating}) => (
                            !(players && tours && coaches && dataRating) ? isLoading ? <Spinner size={100}/> : null : (
                                <PlayersView
                                    player={findPlayer(players)}
                                    suggestions={suggestions(playersSort(players))}
                                    coach={
                                        find(compose(equals(getCoachId(findPlayer(players))), pathToMongoId))(coaches)
                                    }
                                    id={pathToId(match)}
                                    age={nowYear - path(['year'])(findPlayer(players))}
                                    tours={filter(path([pathToId(match)]))(tours)}
                                    currentRating={
                                        this.filterData(
                                            dataRating,
                                            nowYear - path(['year'])(findPlayer(players)),
                                            pathToId(match)
                                        ) + 1
                                    }
                                    ratingBorders={this.getBorderYear(nowYear - path(['year'])(findPlayer(players)))}
                                    points={path(['points'])(find(compose(equalsToUrlId, path(['id'])))(dataRating))}
                                />
                            )
                        )}
                    />
                )}
            />
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.admin.isLoading,
    players: state.admin.players,
    tours: state.admin.tours
});

const mapDispatchToProps = {

};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(connector(PlayersController));
