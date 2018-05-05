// @flow

import {GET_DATA_RATING} from './constants';
import type {ResponseDataRating} from '../../admin/services/typedef';

const DEFAULT_STATE = {
    isLoading: false
};

export type State = {
    isLoading: boolean
};

type Action =
    | { type: 'GET_DATA_RATING', error: string, response: ResponseDataRating };

const rating = (state: State = DEFAULT_STATE, action: Action): State => {

    if (action.type === GET_DATA_RATING) {
        return {
            ...state,
            dataRating: action.response,
            isLoading: false
        };
    }

    return state;
};

export default rating;
