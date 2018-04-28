// @flow

import {combineReducers} from 'redux';
import courts from '../app/components/courts/reducers';
import news from '../app/components/news/reducers'
import toggleMenu from '../app/components/header/reducers';
import rating from '../modules/children/services/reducers';

export default combineReducers({
    courts,
    news,
    toggleMenu,
    rating
});
