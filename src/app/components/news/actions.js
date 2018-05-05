// @flow

import {
    CHANGE_ACTIVE_NEW, GET_NEWS_FAILURE, GET_NEWS_REQUEST, GET_NEWS_SUCCESS, SET_ACTIVE_NEW,
    TURN_OFF_TIMER
} from './constants';

import {Db} from "../../shared/db";
import type {ApiDispatch, Dispatch} from '../../../store/typedef';

export const getNews = () => (dispatch: ApiDispatch) => {

    return dispatch({
        CALL_API: {
            types: [GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE],
            endpoint: () => Db.listNews()
        }
    });
};

export const setActiveNew = (activeNew: number) => (dispatch: Dispatch) => dispatch({
    type: SET_ACTIVE_NEW,
    activeNew: activeNew
});

export const changeActiveNew = () => (dispatch: Dispatch) => dispatch({
    type: CHANGE_ACTIVE_NEW,
});

export const turnOffTimer = () => (dispatch: Dispatch) => dispatch({
    type: TURN_OFF_TIMER,
    isTimerOn: false
});
