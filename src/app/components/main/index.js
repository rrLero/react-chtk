// @flow

import './styles.less';
import React from 'react';

import AppIntro from "../intro/index";
import AppHeader from "../header/index";
import AppCourts from "../courts/index";
import AppNews from "../news/index";
import CoachesArticle from "../coaches-article";
import Partners from "../partners";
import Footer from "../footer";

import type {ContextRouter} from 'react-router-dom';

type ContextProps = ContextRouter;

type OwnProps = {};

type StateProps = {};

type DispatchProps = {};

type Props = OwnProps & StateProps & DispatchProps & ContextProps;

const Main = (props: Props) => {
    return (
        <section>
            <AppHeader/>
            <AppIntro/>
            <AppCourts/>
            <AppNews/>
            <CoachesArticle/>
            <Partners/>
            <Footer/>
        </section>
    )
};

export default Main;