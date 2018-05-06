// @flow

import {
    GET_COACHES_SUCCESS,
    GET_COACHES_REQUEST,
    GET_COACHES_FAILURE,
    GET_PLAYERS_FAILURE,
    GET_PLAYERS_REQUEST,
    GET_PLAYERS_SUCCESS,
    GET_SCHEDULE_FAILURE,
    GET_SCHEDULE_REQUEST,
    GET_SCHEDULE_SUCCESS,
    GET_TOURNAMENTS_FAILURE,
    GET_TOURNAMENTS_REQUEST,
    GET_TOURNAMENTS_SUCCESS,
    ADD_PLAYER_SUCCESS,
    ADD_PLAYER_REQUEST,
    ADD_PLAYER_FAILURE,
    REMOVE_PLAYER_SUCCESS,
    REMOVE_PLAYER_REQUEST,
    REMOVE_PLAYER_FAILURE,
    EDIT_PLAYER_SUCCESS,
    EDIT_PLAYER_REQUEST,
    EDIT_PLAYER_FAILURE,
    ADD_COACH_SUCCESS,
    ADD_COACH_REQUEST,
    ADD_COACH_FAILURE,
    REMOVE_COACH_SUCCESS,
    REMOVE_COACH_REQUEST,
    REMOVE_COACH_FAILURE,
    EDIT_COACH_SUCCESS,
    EDIT_COACH_REQUEST,
    EDIT_COACH_FAILURE,
    LOGIN
} from './constants';

const DEFAULT_STATE = {
    isLoading: false
};

import type {ResponsePlayers, ResponseSchedule, ResponseTour, ResponseCoach} from './typedef';

export type State = {
    isLoading: boolean,
    players?: Array<ResponsePlayers>,
    coaches?: Array<ResponseCoach>,
    tours?: Array<ResponseTour>
};

type Action =
    | { type: 'GET_COACHES_REQUEST' }
    | { type: 'GET_COACHES_SUCCESS', response: Array<ResponseCoach> }
    | { type: 'GET_COACHES_FAILURE', error: string }
    | { type: 'GET_PLAYERS_REQUEST' }
    | { type: 'GET_PLAYERS_SUCCESS', response: Array<ResponsePlayers> }
    | { type: 'GET_PLAYERS_FAILURE', error: string }
    | { type: 'GET_TOURNAMENTS_REQUEST' }
    | { type: 'GET_TOURNAMENTS_SUCCESS', response: Array<ResponseTour> }
    | { type: 'GET_TOURNAMENTS_FAILURE', error: string }
    | { type: 'GET_SCHEDULE_REQUEST' }
    | { type: 'GET_SCHEDULE_SUCCESS', response: Array<ResponseSchedule> }
    | { type: 'GET_SCHEDULE_FAILURE', error: string }
    | { type: 'GET_DATA_RATING', error: string }
    | { type: 'ADD_PLAYER_SUCCESS', response: ResponsePlayers }
    | { type: 'ADD_PLAYER_REQUEST' }
    | { type: 'ADD_PLAYER_FAILURE', error: string }
    | { type: 'REMOVE_PLAYER_REQUEST'}
    | { type: 'REMOVE_PLAYER_SUCCESS', response: ResponsePlayers }
    | { type: 'REMOVE_PLAYER_FAILURE', error: string }
    | { type: 'EDIT_PLAYER_REQUEST'}
    | { type: 'EDIT_PLAYER_SUCCESS', response: ResponsePlayers }
    | { type: 'EDIT_PLAYER_FAILURE', error: string }
    | { type: 'ADD_COACH_SUCCESS', response: ResponseCoach }
    | { type: 'ADD_COACH_REQUEST' }
    | { type: 'ADD_COACH_FAILURE', error: string }
    | { type: 'REMOVE_COACH_REQUEST'}
    | { type: 'REMOVE_COACH_SUCCESS', response: ResponseCoach }
    | { type: 'REMOVE_COACH_FAILURE', error: string }
    | { type: 'EDIT_COACH_REQUEST'}
    | { type: 'EDIT_COACH_SUCCESS', response: ResponseCoach }
    | { type: 'EDIT_COACH_FAILURE', error: string }
    | { type: 'LOGIN', pass: string };


const admin = (state: State = DEFAULT_STATE, action: Action): State => {

    if (action.type === GET_COACHES_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === GET_COACHES_SUCCESS) {
        return {
            ...state,
            coaches: action.response,
            isLoading: false
        };
    }

    if (action.type === GET_COACHES_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === GET_PLAYERS_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === GET_PLAYERS_SUCCESS) {
        return {
            ...state,
            players: action.response,
            isLoading: false
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
            tours: action.response,
            isLoading: false
        };
    }

    if (action.type === GET_TOURNAMENTS_FAILURE) {
        return {
            ...state,
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
            schedule: action.response,
            isLoading: false
        };
    }

    if (action.type === GET_SCHEDULE_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === ADD_PLAYER_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === ADD_PLAYER_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === ADD_PLAYER_SUCCESS) {
        return {
            ...state,
            players: [...state.players || [], {...action.response}],
            isLoading: false
        };
    }

    if (action.type === REMOVE_PLAYER_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === REMOVE_PLAYER_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === REMOVE_PLAYER_SUCCESS) {
        const id = action.response._id.$oid;
        return {
            ...state,
            players: [...state.players || []].filter(el => el._id.$oid !== id),
            isLoading: false
        };
    }

    if (action.type === EDIT_PLAYER_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === EDIT_PLAYER_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === EDIT_PLAYER_SUCCESS) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === ADD_COACH_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === ADD_COACH_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === ADD_COACH_SUCCESS) {
        return {
            ...state,
            coaches: [...state.coaches || [], {...action.response}],
            isLoading: false
        };
    }

    if (action.type === REMOVE_COACH_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === REMOVE_COACH_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === REMOVE_COACH_SUCCESS) {
        const id = action.response._id.$oid;
        return {
            ...state,
            coaches: [...state.coaches || []].filter(el => el._id.$oid !== id),
            isLoading: false
        };
    }

    if (action.type === EDIT_COACH_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === EDIT_COACH_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === EDIT_COACH_SUCCESS) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === LOGIN) {
        return {
            ...state,
            isLogin: action.pass === 'rrlero'
        };
    }

    return state;
};

export default admin;
