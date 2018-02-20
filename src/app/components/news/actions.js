// @flow

import {CALL_API} from '../../../api/index';
import {CHANGE_ACTIVE_NEW, GET_NEWS_FAILURE, GET_NEWS_REQUEST, GET_NEWS_SUCCESS, SET_ACTIVE_NEW} from './constants';

import type {Dispatch} from 'redux';
import {Db} from "../../shared/db";

export const getNews = () => (dispatch: Dispatch) => {

    return dispatch({
        [CALL_API]: {
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