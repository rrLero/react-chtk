// @flow

import {SET_TOGGLE_MENU} from './constants';

import type {Dispatch} from '../../../store/typedef';

export const setToggleMenu = () => (dispatch: Dispatch) => dispatch({
    type: SET_TOGGLE_MENU
});
