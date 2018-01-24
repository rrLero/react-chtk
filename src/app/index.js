// @flow
import '../public/less/main.less';
import '../public/less/normalize.less';

import React from 'react';

import {AppIntro} from "./components/intro/index";
import {AppHeader} from "./components/header/index";
import {AppCourts} from "./components/courts/index";
import {AppNews} from "./components/news/index";

const App = () => {
    return (
        <section>
            <AppHeader />
            <AppIntro />
            <AppCourts />
            <AppNews />
        </section>
    )
};

export default App;