// @flow

import {GET_NEWS_SUCCESS, GET_NEWS_REQUEST, GET_NEWS_FAILURE, SET_ACTIVE_NEW, CHANGE_ACTIVE_NEW, TURN_OFF_TIMER} from './constants';
import type {NewsState} from "./typedef";
import type {OneNew} from "../../../typedef";

const DEFAULT_STATE: NewsState = {
    news: [],
    activeNew: {},
    isTimerOn: true
};

type Action =
    | { type: 'GET_NEWS_REQUEST' }
    | { type: 'GET_NEWS_SUCCESS', response: Array<OneNew> }
    | { type: 'GET_NEWS_FAILURE', error: string }
    | { type: 'SET_ACTIVE_NEW', activeNew: OneNew }
    | { type: 'TURN_OFF_TIMER', isTimerOn: Boolean }

export default (state: NewsState = DEFAULT_STATE, action: Action): NewsState => {

    if (action.type === GET_NEWS_REQUEST) {
        return {
            ...state,
        };
    }

    if (action.type === GET_NEWS_SUCCESS) {
        return {
            ...state,
            news: action.response.slice(0,7),
            activeNew: action.response[0]
        };
    }

    if (action.type === GET_NEWS_FAILURE) {
        return {
            ...state,
            news: []
        };
    }

    if (action.type === SET_ACTIVE_NEW) {
        return {
            ...state,
            activeNew: action.activeNew
        };
    }

    if (action.type === TURN_OFF_TIMER) {
        return {
            ...state,
            isTimerOn: false
        };
    }

    if (action.type === CHANGE_ACTIVE_NEW) {
        const index = state.news.indexOf(state.activeNew);
        const newIndex = index + 1 === state.news.length ? 0 : index + 1;
        return {
            ...state,
            activeNew: state.news[newIndex] || {}
        };
    }

    return state;
};
