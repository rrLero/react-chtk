// @flow

import { GET_COURTS_FAILURE, GET_COURTS_REQUEST, GET_COURTS_SUCCESS } from './constants';

import type {ApiDispatch} from '../../../store/typedef';
import {Db} from '../../shared/db';

export const getCourts = () => (dispatch: ApiDispatch) => {
    return dispatch({
        CALL_API: {
            types: [GET_COURTS_REQUEST, GET_COURTS_SUCCESS, GET_COURTS_FAILURE],
            endpoint: () => Db.listCourts()
        }
    });
};
