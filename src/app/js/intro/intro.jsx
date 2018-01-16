// @flow
import React from 'react';
import type {Props} from "../../shared/defType";

export class AppIntro extends React.Component<Props> {

    constructor() {
        super();
    }

    render() {
        return (
            <section className="intro" id="home">
                <img src="./img/logo2.png" alt="logo" className="intro__img"/>
                <h1 className="intro__title">ЧТК - Черкасский теннисный клуб</h1>
                <p className="intro__text text"> Черкасский теннисный клуб - это объединение теннисистов любителей Черкасс и не только. Это не коммерческая организация призвана помочь любителям тенниса получить информацию о теннисной жизни нашего города.</p>
            </section>
        )
    }
}
