// @flow

import {GET_COURTS_SUCCESS, GET_COURTS_REQUEST, GET_COURTS_FAILURE} from './constants';
import type {AppState} from './typedef';
import type {Court} from '../../../typedef';

const DEFAULT_STATE: AppState = {
    courts: []
};

export type State = AppState;

type Action =
    | { type: 'GET_COURTS_REQUEST' }
    | { type: 'GET_COURTS_SUCCESS', response: Array<Court> }
    | { type: 'GET_COURTS_FAILURE', error: string };

export default (state: State = DEFAULT_STATE, action: Action): AppState => {

    if (action.type === GET_COURTS_REQUEST) {
        return {
            ...state
        };
    }

    if (action.type === GET_COURTS_SUCCESS) {
        return {
            ...state,
            courts: action.response
        };
    }

    if (action.type === GET_COURTS_FAILURE) {
        return {
            ...state
        };
    }

    return state;
};
