// @flow

import {get, post, put, remove} from '../../../api/index';

import {
    GET_COACHES_REQUEST, GET_COACHES_SUCCESS, GET_COACHES_FAILURE,
    GET_PLAYERS_FAILURE, GET_PLAYERS_REQUEST, GET_PLAYERS_SUCCESS,
    GET_POINTS_FAILURE, GET_POINTS_REQUEST, GET_POINTS_SUCCESS,
    GET_SCHEDULE_FAILURE, GET_SCHEDULE_REQUEST, GET_SCHEDULE_SUCCESS,
    GET_TOURNAMENTS_FAILURE, GET_TOURNAMENTS_REQUEST, GET_TOURNAMENTS_SUCCESS,
    EDIT_PLAYER_FAILURE, EDIT_PLAYER_REQUEST, EDIT_PLAYER_SUCCESS,
    ADD_PLAYER_FAILURE, ADD_PLAYER_REQUEST, ADD_PLAYER_SUCCESS,
    REMOVE_PLAYER_FAILURE, REMOVE_PLAYER_REQUEST, REMOVE_PLAYER_SUCCESS
} from './constants';

import type {ApiDispatch, GetState} from '../../../store/typedef';
import type {Player} from '../views/plyer-detail/typedef';

export const getCoachesList = () => (dispatch: ApiDispatch) => {
    return dispatch({
        CALL_API: {
            types: [
                GET_COACHES_REQUEST,
                GET_COACHES_SUCCESS,
                GET_COACHES_FAILURE
            ],
            endpoint: () => get('coaches')
        }
    });
};

export const getSchedule = () => (dispatch: ApiDispatch, getState: GetState) => {
    return dispatch({
        CALL_API: {
            types: [
                GET_SCHEDULE_REQUEST,
                GET_SCHEDULE_SUCCESS,
                GET_SCHEDULE_FAILURE
            ],
            endpoint: () => get('schedule')
        }
    });
};

export const getPoints = () => (dispatch: ApiDispatch) => {
    return dispatch({
        CALL_API: {
            types: [
                GET_POINTS_REQUEST,
                GET_POINTS_SUCCESS,
                GET_POINTS_FAILURE
            ],
            endpoint: () => get('points')
        }
    });
};

export const getTournamentsList = () => (dispatch: ApiDispatch) => {
    return dispatch({
        CALL_API: {
            types: [
                GET_TOURNAMENTS_REQUEST,
                GET_TOURNAMENTS_SUCCESS,
                GET_TOURNAMENTS_FAILURE
            ],
            endpoint: () => get('tournaments')
        }
    });
};

export const getPlayersList = () => (dispatch: ApiDispatch) => {
    return dispatch({
        CALL_API: {
            types: [
                GET_PLAYERS_REQUEST,
                GET_PLAYERS_SUCCESS,
                GET_PLAYERS_FAILURE
            ],
            endpoint: () => get('players')
        }
    });
};

export const editPlayer = (player: Player) => (dispatch: ApiDispatch) => {
    const {id, coach, ...rest} = player;
    return dispatch({
        CALL_API: {
            types: [
                EDIT_PLAYER_REQUEST,
                EDIT_PLAYER_SUCCESS,
                EDIT_PLAYER_FAILURE
            ],
            endpoint: () => put(`players/${id}`, {$set: {coach: {id: coach}, ...rest}})
        }
    });
};

export const addPlayer = (player: Player) => (dispatch: ApiDispatch) => {
    const {id, coach, ...rest} = player;
    return dispatch({
        CALL_API: {
            types: [
                ADD_PLAYER_REQUEST,
                ADD_PLAYER_SUCCESS,
                ADD_PLAYER_FAILURE
            ],
            endpoint: () => post('players', {coach: {id: coach}, ...rest})
        }
    });
};

export const removePlayer = (player: Player) => (dispatch: ApiDispatch) => {
    const {id} = player;
    return dispatch({
        CALL_API: {
            types: [
                REMOVE_PLAYER_REQUEST,
                REMOVE_PLAYER_SUCCESS,
                REMOVE_PLAYER_FAILURE
            ],
            endpoint: () => remove(`players/${id}`)
        }
    });
};
