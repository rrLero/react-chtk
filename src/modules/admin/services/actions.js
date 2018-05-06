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
    REMOVE_PLAYER_FAILURE, REMOVE_PLAYER_REQUEST, REMOVE_PLAYER_SUCCESS,
    EDIT_COACH_FAILURE, EDIT_COACH_REQUEST, EDIT_COACH_SUCCESS,
    ADD_COACH_FAILURE, ADD_COACH_REQUEST, ADD_COACH_SUCCESS,
    REMOVE_COACH_FAILURE, REMOVE_COACH_REQUEST, REMOVE_COACH_SUCCESS,
    EDIT_TOUR_FAILURE, EDIT_TOUR_REQUEST, EDIT_TOUR_SUCCESS,
    ADD_TOUR_FAILURE, ADD_TOUR_REQUEST, ADD_TOUR_SUCCESS,
    REMOVE_TOUR_FAILURE, REMOVE_TOUR_REQUEST, REMOVE_TOUR_SUCCESS,
    LOGIN
} from './constants';

import type {ApiDispatch, GetState, Dispatch, Dispatcher} from '../../../store/typedef';
import type {Player} from '../views/plyer-detail/typedef';
import type {Coach} from '../views/coach-detail/typedef';
import type {ResponseTour as Tour} from './typedef';

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

export const editCoach = (coach: Coach) => (dispatch: ApiDispatch) => {
    const {id, ...rest} = coach;
    return dispatch({
        CALL_API: {
            types: [
                EDIT_COACH_REQUEST,
                EDIT_COACH_SUCCESS,
                EDIT_COACH_FAILURE
            ],
            endpoint: () => put(`coaches/${id}`, {$set: {...rest}})
        }
    });
};

export const addCoach = (coach: Coach) => (dispatch: ApiDispatch) => {
    const {id, ...rest} = coach;
    return dispatch({
        CALL_API: {
            types: [
                ADD_COACH_REQUEST,
                ADD_COACH_SUCCESS,
                ADD_COACH_FAILURE
            ],
            endpoint: () => post('coaches', {...rest})
        }
    });
};

export const removeCoach = (coach: Coach) => (dispatch: ApiDispatch) => {
    const {id} = coach;
    return dispatch({
        CALL_API: {
            types: [
                REMOVE_COACH_REQUEST,
                REMOVE_COACH_SUCCESS,
                REMOVE_COACH_FAILURE
            ],
            endpoint: () => remove(`coaches/${id}`)
        }
    });
};

export const editTour = (tour: Tour) => (dispatch: ApiDispatch) => {
    const {_id, ...rest} = tour;
    return dispatch({
        CALL_API: {
            types: [
                EDIT_TOUR_REQUEST,
                EDIT_TOUR_SUCCESS,
                EDIT_TOUR_FAILURE
            ],
            endpoint: () => put(`tournaments/${_id.$oid}`, {$set: {...rest}})
        }
    });
};

export const addTour = (tour: Tour) => (dispatch: ApiDispatch) => {
    const {_id, ...rest} = tour;
    return dispatch({
        CALL_API: {
            types: [
                ADD_TOUR_REQUEST,
                ADD_TOUR_SUCCESS,
                ADD_TOUR_FAILURE
            ],
            endpoint: () => post('tournaments', {...rest})
        }
    });
};

export const removeTour = (tour: Tour) => (dispatch: ApiDispatch) => {
    const {_id} = tour;
    return dispatch({
        CALL_API: {
            types: [
                REMOVE_TOUR_REQUEST,
                REMOVE_TOUR_SUCCESS,
                REMOVE_TOUR_FAILURE
            ],
            endpoint: () => remove(`tournaments/${_id.$oid}`)
        }
    });
};

export const login = (pass: string): Dispatcher => (dispatch: Dispatch) => {
    return dispatch({
        type: LOGIN,
        pass
    });
};
