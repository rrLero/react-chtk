// @flow
import './styles.less';

import React from 'react';

const AppIntro = ()=> {
        return (
            <section className="intro" id="home">
                <img src={require('./logo2.png')} alt="logo" className="intro__img"/>
                <h1 className="intro__title">ЧТК - Черкасский теннисный клуб</h1>
                <p className="intro__text"> Черкасский теннисный клуб - это объединение теннисистов любителей Черкасс и не только. Это некоммерческая организация призвана помочь любителям тенниса получить информацию о теннисной жизни нашего города.</p>
            </section>
        )
};
export default AppIntro;
