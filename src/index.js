// @flow
import './public/less/variables.less';

import React from 'react';
import {render} from 'react-dom';

import App from './app';

const root = document.getElementById('root');

if (root !== null) {
    render(
        <App/>,
        root
    );
}
