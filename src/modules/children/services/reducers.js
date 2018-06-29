// @flow

import {
    GET_DATA_RATING,
    GET_CALENDAR_DATA_SUCCESS, GET_CALENDAR_DATA_REQUEST, GET_CALENDAR_DATA_FAILURE,
    SET_DATA_RATING_IS_LOADING, UNSET_DATA_RATING_IS_LOADING
} from './constants';
import type {ResponseDataRating} from '../../admin/services/typedef';
import {map, compose, path, lensPath, view, over, sortBy} from 'ramda';
import type {ScheduleGoogle} from './typedef';

const DEFAULT_STATE = {
    isLoading: false
};

export type State = {
    isLoading: boolean
};

type Action =
    | { type: 'GET_DATA_RATING', error: string, response: ResponseDataRating }
    | { type: 'GET_CALENDAR_DATA_REQUEST' }
    | { type: 'GET_CALENDAR_DATA_SUCCESS', response: ScheduleGoogle }
    | { type: 'GET_CALENDAR_DATA_FAILURE', error: string };

const rating = (state: State = DEFAULT_STATE, action: Action): State => {

    if (action.type === GET_DATA_RATING) {
        return {
            ...state,
            dataRating: action.response,
            isLoading: false
        };
    }

    if (action.type === GET_CALENDAR_DATA_REQUEST) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === GET_CALENDAR_DATA_SUCCESS) {
        const pathToStartDate = lensPath(['start', 'dateTime']);
        const pathToEndDate = lensPath(['end', 'dateTime']);
        const startPathSet = over(pathToStartDate, Date.parse);
        const endPathSet = over(pathToEndDate, Date.parse);
        const sortByDate = sortBy(view(pathToStartDate));
        const schedule = compose(sortByDate, map(compose(startPathSet, endPathSet)))(path(['items'], action.response));
        const freeTime = [];
        schedule.forEach((el, i) => {
            let toChange = true;
            if (!i) {
                el.court = 1;
                freeTime.push(view(pathToEndDate)(el));
                toChange = false;
            } else {
                freeTime.forEach((free, j) => {
                    if (view(pathToStartDate)(el) >= free && !el.court) {
                        el.court = j + 1;
                        freeTime[j] = view(pathToEndDate)(el);
                        toChange = false;
                    }
                });
            }
            if (toChange) {
                freeTime.push(view(pathToEndDate)(el));
                el.court = freeTime.length;
                toChange = false;
            }
        });
        return {
            ...state,
            isLoading: false,
            schedule,
            qnt: freeTime.length
        };
    }

    if (action.type === GET_CALENDAR_DATA_FAILURE) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === UNSET_DATA_RATING_IS_LOADING) {
        return {
            ...state,
            isLoading: false
        };
    }

    if (action.type === SET_DATA_RATING_IS_LOADING) {
        return {
            ...state,
            isLoading: true
        };
    }

    return state;
};

export default rating;
