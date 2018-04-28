// @flow

import {get} from '../../../api/index';
import {CALL_API} from '../../../api/index';

import {
    GET_PLAYERS_REQUEST, GET_PLAYERS_SUCCESS, GET_PLAYERS_FAILURE,
    GET_TOURNAMENTS_FAILURE, GET_TOURNAMENTS_REQUEST, GET_TOURNAMENTS_SUCCESS,
    GET_POINTS_FAILURE, GET_POINTS_REQUEST, GET_POINTS_SUCCESS,
    GET_SCHEDULE_FAILURE, GET_SCHEDULE_REQUEST, GET_SCHEDULE_SUCCESS
} from './constants';

import type {ApiDispatcher, ApiDispatch} from '../../../store/typedef';

export const getPlayersList = (): ApiDispatch => (dispatch, getState) => {
    return dispatch({
        [CALL_API]: {
            types: [
                GET_PLAYERS_REQUEST,
                GET_PLAYERS_SUCCESS,
                GET_PLAYERS_FAILURE
            ],
            endpoint: () => get('players')
        }
    });
};

export const getTournamentsList = (): ApiDispatch => (dispatch, getState) => {
    return dispatch({
        [CALL_API]: {
            types: [
                GET_TOURNAMENTS_REQUEST,
                GET_TOURNAMENTS_SUCCESS,
                GET_TOURNAMENTS_FAILURE
            ],
            endpoint: () => get('tournaments')
        }
    });
};

export const getPoints = (): ApiDispatch => (dispatch, getState) => {
    return dispatch({
        [CALL_API]: {
            types: [
                GET_POINTS_REQUEST,
                GET_POINTS_SUCCESS,
                GET_POINTS_FAILURE
            ],
            endpoint: () => get('points')
        }
    });
};

export const getDataRating = (): ApiDispatcher => (dispatch, getState) => {
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
            return dispatch({type: 'GET_DATA_RATING', response: data})
    })
};

export const getSchedule = (): ApiDispatch => (dispatch, getState) => {
    return dispatch({
        [CALL_API]: {
            types: [
                GET_SCHEDULE_REQUEST,
                GET_SCHEDULE_SUCCESS,
                GET_SCHEDULE_FAILURE
            ],
            endpoint: () => get('schedule')
        }
    });
};