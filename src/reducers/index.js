// @flow

import {combineReducers} from 'redux';
import courts from '../app/components/courts/reducers';
import news from '../app/components/news/reducers'
import toggleMenu from '../app/components/header/reducers';
import rating from '../modules/children/services/reducers';
import admin from '../modules/admin/services/reducers';

import type {State as RatingSate} from '../modules/children/services/reducers';
import type {State as ToggleMenuSate} from '../app/components/header/reducers';
import type {State as NewsSate} from '../app/components/news/reducers';
import type {State as CourtsSate} from '../app/components/courts/reducers';
import type {State as AdminSate} from '../modules/admin/services/reducers';

export type State = {|
    courts: CourtsSate,
    news: NewsSate,
    toggleMenu: ToggleMenuSate,
    rating: RatingSate,
    admin: AdminSate
|};


export default combineReducers({
    courts,
    news,
    toggleMenu,
    rating,
    admin
});
