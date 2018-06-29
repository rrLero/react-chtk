// @flow

import {
    GET_DATA_RATING, GET_CALENDAR_DATA_FAILURE, GET_CALENDAR_DATA_REQUEST, GET_CALENDAR_DATA_SUCCESS,
    SET_DATA_RATING_IS_LOADING, UNSET_DATA_RATING_IS_LOADING
} from './constants';

import type {ApiDispatch, Dispatch} from '../../../store/typedef';

import {getPlayersList, getTournamentsList, getPoints} from '../../admin/services/actions';
import {getGoogle} from '../../../api';

export const getDataRating = () => (dispatch: Dispatch) => {
    const nowYear = new Date(Date.now()).getFullYear();
    dispatch({type: SET_DATA_RATING_IS_LOADING});
    return Promise.all([
        getPlayersList()(dispatch),
        getTournamentsList(nowYear)(dispatch),
        getPoints()(dispatch)]).then(res => {
        const data = res[0].response.map(el => {
            return {
                name: el.name + ' ' + el.lastName,
                id: el._id.$oid,
                year: el.year,
                coachId: el.coach.id,
                avatarUrl: el.avatarUrl,
                points: res[1].response.reduce((prev, curr) => {
                    return prev + (res[2].response[0][curr[el._id.$oid]] || 0);
                }, 0)
            };
        }).filter(el => el.points).sort((a, b) => b.points - a.points);
        dispatch({type: UNSET_DATA_RATING_IS_LOADING});
        return dispatch({type: GET_DATA_RATING, response: data});
    });
};

export const getMinMaxToday = (date: Date) => {
    date.setHours(3, 0, 0, 0);
    const timeMin = date.toISOString();
    date.setHours(26, 59, 59, 0);
    const timeMax = date.toISOString();
    return {timeMin, timeMax};
};

export const getDataCalendar = (date?: Date = new Date()) => (dispatch: ApiDispatch) => {
    return dispatch({
        CALL_API: {
            types: [
                GET_CALENDAR_DATA_REQUEST,
                GET_CALENDAR_DATA_SUCCESS,
                GET_CALENDAR_DATA_FAILURE
            ],
            endpoint: () => getGoogle('events', getMinMaxToday(date))
        }
    });
};
