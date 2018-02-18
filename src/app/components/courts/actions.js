// @flow

import {CALL_API} from '../../../api/index';
import { GET_COURTS_FAILURE, GET_COURTS_REQUEST, GET_COURTS_SUCCESS } from './constants';

import type {Dispatch} from 'redux';
import {Db} from "../../shared/db";

export const getCourts = () => (dispatch: Dispatch) => {

    return dispatch({
        [CALL_API]: {
            types: [GET_COURTS_REQUEST, GET_COURTS_SUCCESS, GET_COURTS_FAILURE],
            endpoint: () => Db.listCourts()
        }
    });
};
