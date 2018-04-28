// @flow

import {
    GET_TOURNAMENTS_SUCCESS, GET_TOURNAMENTS_REQUEST, GET_TOURNAMENTS_FAILURE,
    GET_PLAYERS_FAILURE, GET_PLAYERS_REQUEST, GET_PLAYERS_SUCCESS, GET_DATA_RATING,
    GET_SCHEDULE_SUCCESS, GET_SCHEDULE_REQUEST, GET_SCHEDULE_FAILURE
} from './constants';

const DEFAULT_STATE = {
    isLoading: false
};

import type {ResponsePlayers, ResponseTour} from './typedef';

export type State = {
    isLoading: boolean
};

type Action =
    | { type: 'GET_PLAYERS_REQUEST' }
    | { type: 'GET_PLAYERS_SUCCESS', response: Array<ResponsePlayers> }
    | { type: 'GET_PLAYERS_FAILURE', error: string }
    | { type: 'GET_TOURNAMENTS_REQUEST' }
    | { type: 'GET_TOURNAMENTS_SUCCESS', response: Array<ResponseTour> }
    | { type: 'GET_TOURNAMENTS_FAILURE', error: string }
    | { type: 'GET_DATA_RATING', error: string };



const rating = (state: State = DEFAULT_STATE, action: Action): State => {

    if (action.type === GET_PLAYERS_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === GET_PLAYERS_SUCCESS) {
        return {
            ...state,
            players: action.response
        };
    }

    if (action.type === GET_PLAYERS_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === GET_TOURNAMENTS_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === GET_TOURNAMENTS_SUCCESS) {
        return {
            ...state,
            tournaments: action.response
        };
    }

    if (action.type === GET_TOURNAMENTS_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === GET_DATA_RATING) {
        return {
            ...state,
            dataRating: action.response,
            isLoading: false
        };
    }

    if (action.type === GET_SCHEDULE_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === GET_SCHEDULE_SUCCESS) {
        return {
            ...state,
            schedule: action.response
        };
    }

    if (action.type === GET_SCHEDULE_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    return state;
};

export default rating;
