// @flow

import {
    GET_DATA_RATING
} from './constants';

import type {Dispatch} from '../../../store/typedef';

import {getPlayersList, getTournamentsList, getPoints} from '../../admin/services/actions';

export const getDataRating = () => (dispatch: Dispatch) => {
    return Promise.all([
        getPlayersList()(dispatch),
        getTournamentsList()(dispatch),
        getPoints()(dispatch)]).then(res => {
            const data = res[0].response.map(el => {
                return {
                    name: el.name + ' ' + el.lastName,
                    id: el._id.$oid,
                    year: el.year,
                    coachId: el.coach.id,
                    avatarUrl: el.avatarUrl,
                    points: res[1].response.reduce((prev, curr) => {
                        return prev + res[2].response[0][curr[el._id.$oid]]
                    }, 0)

                }
            }).sort((a,b) => b.points - a.points);
            return dispatch({type: GET_DATA_RATING, response: data})
    })
};

