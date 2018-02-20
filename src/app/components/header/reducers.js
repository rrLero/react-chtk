// @flow

import {SET_TOGGLE_MENU} from './constants';
import type {ToggleState} from "./typedef";

const DEFAULT_STATE: ToggleState = {
    isToggle: false,
};

type Action =
    | { type: 'SET_TOGGLE_MENU'}

export default (state: ToggleState = DEFAULT_STATE, action: Action): ToggleState => {

    if (action.type === SET_TOGGLE_MENU) {
        return {
            ...state,
            isToggle: !state.isToggle
        };
    }

    return state;
};
