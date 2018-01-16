// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import {AppIntro} from "./intro/intro";
import {AppHeader} from "./header/header";
import {AppCourts} from "./courts/courts";
import {AppNews} from "./news/news";
import type {Props} from "../shared/defType";


class App extends React.Component<Props> {

    constructor() {
        super();
    }

    render() {
        return (
            <section>
                <AppHeader />
                <AppIntro />
                <AppCourts />
                <AppNews />
            </section>
        )
    }
}

const root = document.getElementById('root');
ReactDOM.render(
    <App />, root ? root : document.createElement('div')
);